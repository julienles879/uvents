import { Ionicons } from "@expo/vector-icons";
import { Image } from 'expo-image';
import { router } from "expo-router";
import { StyleSheet, TextInput, View, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10 }}>
            <ThemedText type="title" style={{ color: '#fff' }}>Logo Uvents</ThemedText>
            <Image
              source={require('@/assets/images/react-logo.png')} 
              style={{ width: 60, height: 60, borderRadius: 100 }}
              />
          </View>

          <View style={{marginTop: 30, flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 10 }}>
            <ThemedText style={{ color: '#fff' }}>Hello, Remi</ThemedText>
            <ThemedText style={{ color: '#fff', fontWeight:'semibold' }}>Découvre des événements fait pour toi</ThemedText>
          </View>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Rechercher des événements"
              placeholderTextColor="#ccc"
            />
          </View>

          <ThemedText type="title" style={{ color: '#fff', marginTop: 20, marginLeft: 10 }}>Les événements pour toi</ThemedText>

          <View style={styles.eventsContainer}>
            {/* Event list slider */}
            <View style={{ flexDirection: 'row', gap: 15, marginTop: -50 }}>
              <Pressable style={styles.cardevents} onPress={() => router.push("(tabs)/(events)/detail")}>
                <Image
                  source={require('@/assets/images/react-logo.png')}
                  style={{ width: '100%', height: 150, borderRadius: 20 }}
                />

                <ThemedText type="subtitle" style={{ marginTop: 10 }}>Concert Last Train</ThemedText>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 30 }}>
                  <ThemedText style={{ color: '#555'}}>10/12/2025</ThemedText>
                  <ThemedText style={{ color: '#555' }}>20:00 - 23h30</ThemedText>
                </View>
                <ThemedText style={{ color: '#555', marginTop: 5 }}>Big Band Café - Hérouville Saint Clair</ThemedText>
              </Pressable>

              <Pressable style={styles.cardevents}>
                <Image
                  source={require('@/assets/images/react-logo.png')}
                  style={{ width: '100%', height: 150, borderRadius: 20 }}
                />

                <ThemedText type="subtitle" style={{ marginTop: 10 }}>Concert Last Train</ThemedText>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 30 }}>
                  <ThemedText style={{ color: '#555'}}>10/12/2025</ThemedText>
                  <ThemedText style={{ color: '#555' }}>20:00 - 23h30</ThemedText>
                </View>
                <ThemedText style={{ color: '#555', marginTop: 5 }}>Big Band Café - Hérouville Saint Clair</ThemedText>
              </Pressable>
            </View>

            <ThemedText type="title" style={{marginTop: 20, marginLeft: 10 }}>Catégories</ThemedText>
            {/* Categories list slider */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
              <ThemedText style={styles.cardlists}>Musique</ThemedText>
              <ThemedText style={styles.cardlists}>Sport</ThemedText>
              <ThemedText style={styles.cardlists}>Art</ThemedText>
              <ThemedText style={styles.cardlists}>Technologie</ThemedText>
            </View>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2D5EFF',
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0039C8",
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 8,
  },
  eventsContainer: {
    marginTop: 50,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    padding: 20
  },
  cardevents: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    padding: 15,
    width: 300,
  },
  cardlists: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});
