import { IIngredient } from "@/types";
import { useState } from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  ingredient: IIngredient;
};

function Ingredient({ ingredient }: Props) {
  const [isDone, setIsDone] = useState(false);
  return (
    <View className="flex-1 items-center justify-center mb-2">
      <BouncyCheckbox
        size={25}
        fillColor="#16a34a"
        unFillColor="#737373"
        text={ingredient.name}
        innerIconStyle={{ borderWidth: 0 }}
        textStyle={{
          color: isDone ? "#737373" : "#fafafa",
        }}
        onPress={() => setIsDone(!isDone)}
      />
    </View>
  );
}

export default Ingredient;
