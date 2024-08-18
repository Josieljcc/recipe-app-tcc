import axios from "axios";
import { ILogin, IRecipe, IUser, IUserLogin } from "../types";
import Toast from "react-native-toast-message";
import ApiError from "@/types/api-error";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

const showToast = (message: string) => {
  Toast.show({
    type: "error",
    text1: "Error",
    text2: message,
  });
};

export async function postRegister(data: IUser) {
  try {
    const response = await axios.post(`${BACKEND_URL}/register`, data);
    await response.data;
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function postLogin(data: ILogin): Promise<IUserLogin | undefined> {
  try {
    const response = await axios.post(`${BACKEND_URL}/login`, data);
    return response.data;
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function getRecipes(page: string): Promise<IRecipe[] | undefined> {
  try {
    const response = await axios.get(`${BACKEND_URL}/recipes/page/${page}`);
    return response.data.recipes;
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function getRecipeById(id: string): Promise<IRecipe | undefined> {
  try {
    const response = await axios.get(`${BACKEND_URL}/recipes/${id}`);
    return response.data.recipe;
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function getRecipeBySearch(
  search: string
): Promise<IRecipe[] | undefined> {
  try {
    const response = await axios.get(`${BACKEND_URL}/recipes/search/${search}`);
    return response.data.recipes;
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function getFavorites(
  token: string
): Promise<IRecipe[] | undefined> {
  try {
    const response = await axios.get(`${BACKEND_URL}/favorites`, {
      headers: { Authorization: token },
    });
    return response.data.favorites;
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function postFavorite(token: string, id: number): Promise<void> {
  try {
    await axios.post(
      `${BACKEND_URL}/favorites/${id}`,
      {},
      { headers: { Authorization: token } }
    );
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}

export async function deleteFavorite(token: string, id: number): Promise<void> {
  try {
    await axios.delete(`${BACKEND_URL}/favorites/${id}`, {
      headers: { Authorization: token },
    });
  } catch (error: ApiError | any) {
    showToast(error.message);
  }
}
