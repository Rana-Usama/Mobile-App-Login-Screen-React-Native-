import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

//components
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const HomeTab = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: { height: RFPercentage(7.5), borderRadius: RFPercentage(3.5) },
        tabStyle: { backgroundColor: colors.primary },
        activeTintColor: "grey",
        inactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="HomeScreen2"
        options={{ header: () => null }}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={RFPercentage(4.3)} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen3"
        options={{ header: () => null }}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={RFPercentage(4.3)} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen4"
        options={{ header: () => null }}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={RFPercentage(4.3)} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        options={{ header: () => null }}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={RFPercentage(4.3)} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeTab" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
