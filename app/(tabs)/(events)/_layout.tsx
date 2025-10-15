import { Stack } from "expo-router";

export default function UsersLayout() {
    return (
        <Stack>
        <Stack.Screen 
            name="eventCreate" 
            options={{ title: "Create event" }} 
        />
        <Stack.Screen 
            name="eventDetail" 
            options={{ title: "Event detail" }} 
        />
        <Stack.Screen 
            name="eventEdit" 
            options={{ title: "Modifier de event" }} 
        />
        </Stack>
    );
}