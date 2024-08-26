import { useEffect, useState } from "react";
import AppContext from "./app-context";
import { IRecipe, IUserLogin } from "@/types";
import * as SecureStore from "expo-secure-store";
import { getFavorites } from "@/utils/api-functions";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<IRecipe | null>(null);
  const [user, setUser] = useState<IUserLogin | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const inicializeUser = async () => {
    const user = await SecureStore.getItemAsync("user");
    console.log(user);

    if (user) {
      setUser(JSON.parse(user));
    }
  };

  const inicializeFavorites = async () => {
    if (!user) {
      return;
    }

    const favorites = await getFavorites(user.token);
    if (favorites) {
      setFavorites(favorites);
    }
  };

  useEffect(() => {
    inicializeUser();
  }, []);

  useEffect(() => {
    inicializeFavorites();
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes,
        currentPage,
        setCurrentPage,
        favorites,
        setFavorites,
        currentRecipe,
        setCurrentRecipe,
        user,
        setUser,
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
