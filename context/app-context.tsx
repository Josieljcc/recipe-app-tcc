import { IRecipe, IUser, IUserLogin } from "@/types";
import React from "react";

export type AppContextType = {
  recipes: IRecipe[];
  setRecipes: (recipes: IRecipe[]) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  favorites: IRecipe[];
  setFavorites: (favorites: IRecipe[]) => void;
  currentRecipe: IRecipe | null;
  setCurrentRecipe: (currentRecipe: IRecipe | null) => void;
  user: IUserLogin | null;
  setUser: (user: IUserLogin | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
};

const AppContext = React.createContext<AppContextType>({} as AppContextType);

export default AppContext;
