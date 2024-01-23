import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

// This file will add a header to our application which contains our Drawer Menu Navigation
export default function _layout() {
  return (
    <Drawer>
      {/* This will change the header title from index to whatever we want, in this case changed it to About */}
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "About",
          title: "About",
        }}
      />
    </Drawer>
  );
}
