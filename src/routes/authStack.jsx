import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/auth/welcome";
import SignUp from "../screens/auth/signUp";
import SignIn from "../screens/auth/signIn";
import VehicleDetails from "../screens/auth/vehicleDetails";

const AuthStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="VehicleDetails" component={VehicleDetails} />
    </Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
