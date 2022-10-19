/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import { DarkTheme, LightTheme } from '../constants/Colors'
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AppContext } from "../context/AppProvider";

import {
  RootStackParamList,
} from "../../types";
// import { useAuthenticationStatus } from "@nhost/react";


export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : LightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { currentWalletAddress, setCurrentWalletAddress } = React.useContext(AppContext);

  return (
    <>
      <Stack.Navigator>
        {!currentWalletAddress ? (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Root"
            component={AppStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </>
  );
}

