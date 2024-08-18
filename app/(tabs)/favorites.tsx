import useFavorites from "@/hooks/useFavorites";
import { ScrollView, Text, View } from "react-native";
import RecipeCard from "../components/recipe-card";
import Header from "../components/header-home/header";
import { useEffect, useState } from "react";
import { IRecipe } from "@/types";

export default function FavoritesScreen() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<IRecipe[]>([]);
  const { favorites } = useFavorites();

  useEffect(() => {
    setSearchResults(
      favorites.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, favorites]);

  return (
    <View className="bg-zinc-700 flex-1 pt-32">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <ScrollView className="flex-1 bg-zinc-700 pt-4">
        {searchResults.map((favorite) => (
          <RecipeCard key={favorite.ID} recipe={favorite} />
        ))}
      </ScrollView>
    </View>
  );
}
