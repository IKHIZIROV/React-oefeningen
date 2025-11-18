import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: "lightblue"
      }
    }}>

      <Stack.Screen 
        name="index" 
        options={{
          title: "Home"
        }}
      />
    </Stack>
  );
}

export default RootLayout;