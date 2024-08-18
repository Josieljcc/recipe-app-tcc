import { Stack } from "expo-router";

export default function RecipeScreen() {
  return (
    <Stack>
      <Stack.Screen name="[id]/index" options={{ headerShown: false }} />
    </Stack>
  );
}
