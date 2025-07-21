import { images } from "@/constants";
import { router } from "expo-router";
import { Button, Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 gap-5 items-center justify-center ">
      <Image source={images.logo} className="size-40" resizeMode="contain" />

      <Text className="font-inter-bold text-3xl text-blue-600">
        Welcome to Vault
      </Text>

      <View className="flex gap-4">
        <Button title="My Banks" onPress={() => router.push("/my-banks")} />
        <Button
          title="Transfer"
          onPress={() => router.push("/payment-transfer")}
        />
        <Button
          title="History"
          onPress={() => router.push("/transaction-history")}
        />
      </View>

      <View className="mt-20">
        <Button title="Sign Out" onPress={() => router.push("/sign-in")} />
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}
