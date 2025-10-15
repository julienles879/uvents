import React from "react";
import { Image } from 'expo-image';
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
        <Image 
            source={require("../assets/images/logo1.png")}
            style={styles.logo}
            contentFit="contain"
        />
        <ThemedText type="title">Chargement...</ThemedText>
        <ActivityIndicator size="large" color="#00AEEF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#2D5EFF"
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});