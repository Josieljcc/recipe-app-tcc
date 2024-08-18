import { IRecipe } from "@/types";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import FavoriteButton from "./favorite-button";

const BASE_IMAGE_URL = process.env.EXPO_PUBLIC_BASE_IMAGE_URL;
type Props = {
  recipe: IRecipe;
  className?: string;
};

export default function RecipeCard({ recipe, className }: Props) {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: `/recipe/[id]`, params: { id: recipe.ID } });
  };

  return (
    <TouchableOpacity
      style={[styles.card, styles.shadowProp]}
      onPress={handlePress}
      className={`justify-center items-center w-[300] m-auto rounded-xl ${className}`}
      key={recipe.ID}
    >
      <Image
        className="mb-4 rounded-xl"
        source={{
          uri: `${BASE_IMAGE_URL}${recipe.image}.jpg`,
          width: 300,
          height: 300,
        }}
      />
      <Text className="text-zinc-50 font-bold text-center w-full absolute bottom-8 text-lg z-20">
        {recipe.title}
      </Text>
      <LinearGradient
        colors={["transparent", "transparent", "rgba(0,0,0,0.9)"]}
        className="absolute top-0 left-0 right-0 bottom-4 rounded-xl"
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent", "transparent"]}
        className="absolute top-0 left-0 right-0 bottom-4 rounded-xl"
      />
      <FavoriteButton id={recipe.ID} styles="absolute top-2 right-2 z-20" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
  shadowProp: {
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "black",
  },
});
