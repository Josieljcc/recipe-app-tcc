import { useContext, useEffect } from "react";
import AppContext from "@/context/app-context";
import {
  deleteFavorite,
  getFavorites,
  postFavorite,
} from "@/utils/api-functions";

function useFavorites() {
  const { favorites, setFavorites, user } = useContext(AppContext);

  const getUserFavorites = async () => {
    if (!user) {
      return;
    }

    const favorites = await getFavorites(user.token);
    if (favorites) {
      setFavorites(favorites);
    }
  };

  const addFavorite = async (id: number) => {
    if (!user) {
      return;
    }
    await postFavorite(user.token, id);
    getUserFavorites();
  };

  const removeFavorite = async (id: number) => {
    if (!user) {
      return;
    }
    console.log(user?.name);
    await deleteFavorite(user.token, id);
    getUserFavorites();
  };

  return {
    favorites,
    getUserFavorites,
    addFavorite,
    removeFavorite,
  };
}

export default useFavorites;
