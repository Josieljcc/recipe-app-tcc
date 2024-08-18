import { Image, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema";
import { z } from "zod";
import Input from "./components/Input";
import Button from "./components/Button";
import { Link, useRouter } from "expo-router";
import { postLogin } from "@/utils/api-functions";
import * as SecureStore from "expo-secure-store";

export type LoginForm = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginForm) => {
    const user = await postLogin(data);
    if (user) {
      await SecureStore.setItemAsync("user", JSON.stringify(user));
      router.push("/(tabs)");
    }
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
        <Input control={control} name="email" placeholder="Email" />
        <Input
          control={control}
          secure
          name="password"
          placeholder="Password"
        />
        <Button
          disabled={!isValid || isSubmitting}
          className="w-full"
          title="Login"
          isLoading={isSubmitting}
          onPress={handleSubmit(handleLogin)}
        />
        <Link className="w-full" href={"/register"}>
          <ThemedText className="text-zinc-50 mt-0 ml-0 text-center underline w-full">
            Don't have an account?
          </ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
}
