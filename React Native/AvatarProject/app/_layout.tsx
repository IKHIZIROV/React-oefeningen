import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../styles/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.parchment,
          },
        }}
      />
    </>
  );
}