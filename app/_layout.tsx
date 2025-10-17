import { supabase } from "@/lib/supabase";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Session } from "@supabase/supabase-js";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import "react-native-reanimated";

import Auth from "@/components/Auth";
import SplashScreen from "@/components/SplashScreen";
import { useColorScheme } from "@/hooks/useColorScheme";
import { usePermissions } from "@/hooks/usePermissions";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { permissions } = usePermissions();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [session, setSession] = useState<Session | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    Animated.timing(scaleAnim, {
      toValue: 1.1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
      });
    }, 1800); // 1,8s avant de commencer le fondu

    return () => {
      clearTimeout(timer);
      listener.subscription.unsubscribe();
    };
  }, [fadeAnim, scaleAnim]);

  if (!loaded) return null;

  const permissionsLoading =
    permissions.camera === null ||
    permissions.location === null ||
    permissions.contacts === null ||
    permissions.notifications === null;

  if (showSplash || permissionsLoading) {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[StyleSheet.absoluteFill, { opacity: fadeAnim, zIndex: 10 }]}
          >
            <SplashScreen scaleAnim={scaleAnim} />
          </Animated.View>
        </View>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        {session?.user ? (
          <Auth />
        ) : (
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        )}
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
