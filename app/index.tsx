import { images } from "@/constants";
import { Image, Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Image source={images.logo} className="size-40" resizeMode="contain" />

      <Text className="font-inter-bold text-3xl text-blue-600">
        Welcome to Vault
      </Text>
    </View>
  );
}
