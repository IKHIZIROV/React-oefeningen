import { Tabs } from "expo-router";

const TabsLayout = () => {
    return(
        <Tabs screenOptions={{
            headerShown: false
        }} >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color, size}) => <Feather
                }}
            />
            <Tabs.Screen/>
        </Tabs>
    )
};

export default TabsLayout;