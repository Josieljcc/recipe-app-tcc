import RecipeCard from "@/app/components/recipe-card";
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
    <View className="flex-1 items-center justify-center">
      <RecipeCard recipe={currentRecipe} />
    </View>
  );
}
