import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
      headerStyle: {

      }
    }} >
      <Stack.Screen name="drawer" />
    </Stack>
  );
}

export default RootLayout;