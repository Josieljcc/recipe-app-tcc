import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function IndexScreen() {
  return (
    <ThemedView className="flex flex-1 items-center justify-between">
      <Image
        source={require("@/assets/images/initialBg.jpg")}
        className="w-full h-full absolute -z-20"
      />

      <ThemedText className="mt-10 font-bold text-zinc-50" type="link">
        13k+ Recipes
      </ThemedText>
      <View className="w-full flex flex-col items-center justify-between">
        <ThemedText className="text-5xl text-zinc-50 font-bold">
          Let's Cooking
        </ThemedText>
        <ThemedText className="text-zinc-50 mb-8 text-base">
          Find best recipes
        </ThemedText>
        <Link href="/login" asChild>
          <TouchableOpacity className="bg-red-500 rounded-md w-[90%] mb-8 py-2 flex items-center justify-center">
            <Text className="text-zinc-50 text-base ">Start Cooking ➤</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}
