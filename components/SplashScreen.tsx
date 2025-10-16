import React from "react";
import { View, ActivityIndicator, StyleSheet, Animated } from "react-native";
import { ThemedText } from "@/components/ThemedText";

type SplashScreenProps = {
    scaleAnim?: Animated.Value;
};

export default function SplashScreen({ scaleAnim }: SplashScreenProps) {
    return (
        <View style={styles.container}>
        <Animated.Image 
            source={require("../assets/images/logo1.png")}
            style={[styles.logo, { transform: [{ scale: scaleAnim || 1 }] }]}
            resizeMode="contain"
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