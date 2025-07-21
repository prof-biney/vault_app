import { router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentTransfer = () => {
  return (
    <SafeAreaView className="flex-1 gap-5 justify-center items-center">
      <Text className="font-inter-bold text-3xl text-blue-700">
        Payment Transfer
      </Text>

      <Button title="Home" onPress={() => router.push("/")} />
    </SafeAreaView>
  );
};

export default PaymentTransfer;
