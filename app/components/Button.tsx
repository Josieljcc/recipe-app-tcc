import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import clsx from "clsx";

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

function Button({ title, onPress, className, disabled, isLoading }: Props) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={clsx(
        "rounded-md py-2 flex items-center justify-center",
        className,
        {
          "bg-red-500": !disabled,
          "bg-gray-500": disabled,
        }
      )}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className="text-zinc-50">{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
