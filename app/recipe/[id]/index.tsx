import Ingredient from "@/app/components/ingredient";
import RecipeCard from "@/app/components/recipe-card";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useRecipes } from "@/hooks/useRecipes";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function RecipeScreen() {
  const { id } = useLocalSearchParams();
  const { currentRecipe, getRecipeByIdHook } = useRecipes();

  useEffect(() => {
    if (id) {
      getRecipeByIdHook(id as string);
    }
  }, [id]);

  if (!currentRecipe) {
    return <View className="flex-1 items-center justify-center"></View>;
  }

  return (
    <ThemedView className="flex-1 bg-zinc-700 items-center justify-center">
      <ParallaxScrollView
        headerImage={<RecipeCard isDetail recipe={currentRecipe} />}
        headerBackgroundColor={{ dark: "#1A1A1A", light: "#F5F5F5" }}
      >
        <View className="flex-1 items-center justify-center">
          <Text className="text-zinc-50 mb-4 font-bold text-center w-full text-3xl">
            {currentRecipe.title}
          </Text>
          <Text className="text-zinc-50 mb-4 font-bold w-full text-2xl">
            Ingredients
          </Text>
          {currentRecipe.ingredients.map((ingredient) => (
            <Ingredient key={ingredient.ID} ingredient={ingredient} />
          ))}
          <Text className="text-zinc-50 my-4 font-bold w-full text-2xl">
            Instructions
          </Text>
          <Text className="text-xl text-gray-50">
            {currentRecipe.instructions}
          </Text>
        </View>
      </ParallaxScrollView>
    </ThemedView>
  );
}
