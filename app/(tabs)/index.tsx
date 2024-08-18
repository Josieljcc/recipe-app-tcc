import { ThemedView } from "@/components/ThemedView";
import { ScrollView, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useEffect, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import RecipeCard from "../components/recipe-card";
import { useRecipes } from "@/hooks/useRecipes";
import Header from "../components/header-home/header";

export default function HomeScreen() {
  const { recipes, nextPage, prevPage, getRecipesBySearch } = useRecipes();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    getRecipesBySearch(searchText);
    setSearchText("");
  };

  if (!recipes) {
    return null;
  }

  return (
    <ThemedView className="bg-zinc-700 flex-1 pt-32">
      <Header
        handleSearch={handleSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ScrollView className="pt-4" showsVerticalScrollIndicator={false}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </ScrollView>
      <TouchableOpacity
        className="bg-zinc-500 absolute right-2 text-white rounded-full p-2 w-10 h-10 flex-1 items-center justify-center top-[58%]"
        onPress={nextPage}
      >
        <AntDesign name="caretright" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-zinc-500 absolute left-2 text-white rounded-full p-2 w-10 h-10 flex-1 items-center justify-center top-[58%]"
        onPress={prevPage}
      >
        <AntDesign name="caretleft" size={24} color="white" />
      </TouchableOpacity>
    </ThemedView>
  );
}
