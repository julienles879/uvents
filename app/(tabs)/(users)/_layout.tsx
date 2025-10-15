import { Stack } from "expo-router";

export default function UsersLayout() {
    return (
        <Stack>
        <Stack.Screen 
            name="profile" 
            options={{ title: "Mon profil" }} 
        />
        <Stack.Screen 
            name="edit" 
            options={{ title: "Modifier mon profil" }} 
        />
        </Stack>
    );
}