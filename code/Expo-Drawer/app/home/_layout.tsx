import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

// Within Home Component, adding the layout and tabs helps keep things organized
export default function _layout() {
  return (
    <Tabs
      // Hide the "index" header inside Home component
      screenOptions={{
        headerShown: false,
      }}
    ></Tabs>
  );
}
