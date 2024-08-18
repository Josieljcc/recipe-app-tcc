import AppContext from "@/context/app-context";
import {
  getRecipeById,
  getRecipeBySearch,
  getRecipes,
} from "@/utils/api-functions";
import { useContext, useEffect, useState } from "react";

export function useRecipes() {
  const {
    recipes,
    setRecipes,
    currentPage,
    setCurrentPage,
    currentRecipe,
    setCurrentRecipe,
    setIsLoading,
    isLoading,
  } = useContext(AppContext);

  const getRecipesBySearch = async (search: string) => {
    setIsLoading(true);
    const recipes = await getRecipeBySearch(search);
    if (recipes) {
      setRecipes(recipes);
    }
    setIsLoading(false);
  };

  const getRecipeByIdHook = async (id: string) => {
    setIsLoading(true);
    const recipe = await getRecipeById(id);
    if (recipe) {
      setCurrentRecipe(recipe);
    }
    setIsLoading(false);
  };

  const getRecipesByPage = async () => {
    setIsLoading(true);
    const recipes = await getRecipes(currentPage.toString());
    if (recipes) {
      setRecipes(recipes);
    }
    setIsLoading(false);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getRecipesByPage();
  }, [currentPage]);

  return {
    recipes,
    setCurrentPage,
    isLoading,
    nextPage,
    prevPage,
    getRecipesBySearch,
    getRecipeByIdHook,
    currentRecipe,
  };
}
