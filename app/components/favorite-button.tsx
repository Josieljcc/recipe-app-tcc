import useFavorites from "@/hooks/useFavorites";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

type Props = {
  id: number;
  styles?: string;
};

function FavoriteButton({ id, styles }: Props) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((favorite) => favorite.ID === id);

  const handlePress = async () => {
    if (isFavorite) {
      await removeFavorite(id);
      return;
    }
    await addFavorite(id);
  };

  if (isFavorite === null) {
    return <ActivityIndicator size="small" color="white" />;
  }

  return (
    <TouchableOpacity className={styles} onPress={handlePress}>
      {isFavorite ? (
        <AntDesign name="heart" size={24} color="red" />
      ) : (
        <AntDesign name="hearto" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
}

export default FavoriteButton;
