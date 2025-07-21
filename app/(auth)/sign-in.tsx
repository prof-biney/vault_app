import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>

      <Link className="text-3xl text-blue-700" href="/">
        Home
      </Link>
    </View>
  );
};

export default SignIn;
