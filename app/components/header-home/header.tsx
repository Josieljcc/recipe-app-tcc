import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
  handleSearch?: () => void;
};

export default function Header({
  searchText,
  setSearchText,
  handleSearch,
}: Props) {
  return (
    <View className="bg-zinc-800 absolute top-0 left-0 right-0 z-10 p-12 rounded-b-3xl">
      <View style={{ position: "relative", justifyContent: "center" }}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          className="rounded-full h-10 bg-slate-50 border-gray-500 px-4"
          placeholder="Search..."
        />
        <TouchableOpacity
          className="absolute right-2 rounded-full w-10 h-10 flex-1 items-center justify-center"
          onPress={handleSearch}
        >
          <Ionicons name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
