import { Image, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "./components/Input";
import Button from "./components/Button";
import { registerSchema } from "@/schemas/registerSchema";
import { postRegister } from "@/utils/api-functions";
import { useRouter } from "expo-router";

export type RegisterForm = z.infer<typeof registerSchema>;

export default function LoginScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterForm) => {
    await postRegister(data);
    router.push("/login");
  };

  return (
    <ThemedView className="flex flex-1 items-center justify-center">
      <Image
        source={require("@/assets/images/loginBg-01.jpg")}
        className="absolute brightness-90 -z-10 top-0 object-cover w-full h-full"
      />
      <View
        className="flex rounded-md  
         p-4 py-10 gap-4 flex-col w-[90%]
        bg-black/80"
      >
        <Input control={control} name="name" placeholder="Name" />
        <Input control={control} name="email" placeholder="Email" />
        <Input
          control={control}
          secure
          name="password"
          placeholder="Password"
        />
        <Button
          isLoading={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="w-full"
          title="Register"
          onPress={handleSubmit(handleRegister)}
        />
      </View>
    </ThemedView>
  );
}
