import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import FlightScreen from "./Screenone";
import ResultScreen from "./Screentwo";

const Stack = createNativeStackNavigator();

export default class Home extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#6FB23E",
            borderBottomColor: "#88b454",
          },
          headerRight: () => (
            <Ionicons
              name="person"
              color="white"
              size={28}
              style={{ paddingRight: 20 }}
            />
          ),
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Flight"
          component={FlightScreen}
          options={{
            headerLeft: () => (
              <Ionicons
                name="menu"
                color="white"
                size={36}
                style={{ paddingLeft: 20 }}
              />
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            headerTitle: "Hiling.Id",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    );
  }
}
