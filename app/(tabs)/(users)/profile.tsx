import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ justifyContent: 'flex-start', flex: 1, padding: 10 }}>
                        <ThemedText type="title" style={{ color: '#fff' }}>Hello, Rémi</ThemedText>
                        <ThemedText style={{color: '#fff', fontSize: 16 }}>Tu as 1 événement prévu cette semaine</ThemedText>
                    </View>
                    <View>
                        <Image 
                            source={require('@/assets/images/react-logo.png')} 
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 20, backgroundColor: '#fff', borderTopRightRadius: 20, borderTopLeftRadius: 20, flex: 1, padding: 20 }}>
                    <View style={styles.card}>
                        {/* Image à gauche */}
                        <Image
                            source={require('@/assets/images/react-logo.png')}
                            style={styles.eventImage}
                        />

                        {/* Contenu à droite */}
                        <View style={styles.content}>
                            <Text style={styles.title}>Concert last train</Text>

                            {/* Date */}
                            <View style={styles.row}>
                                <Text style={styles.icon}>📅</Text>
                                <View>
                                <Text style={styles.label}>Date</Text>
                                <Text style={styles.value}>17 juin 2025</Text>
                                </View>
                            </View>

                            {/* Lieu */}
                            <View style={styles.row}>
                                <Text style={styles.icon}>📍</Text>
                                <View>
                                <Text style={styles.label}>Lieu</Text>
                                <Text style={styles.value}>Hérouville saint clair</Text>
                                </View>
                            </View>

                            {/* Membres */}
                            <View style={[styles.row, { marginTop: 10 }]}>
                                <Image
                                source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
                                style={styles.avatar}
                                />
                                <Image
                                source={{ uri: "https://randomuser.me/api/portraits/women/2.jpg" }}
                                style={[styles.avatar, { marginLeft: -10 }]}
                                />
                                <Image
                                source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }}
                                style={[styles.avatar, { marginLeft: -10 }]}
                                />
                                <Text style={{ marginLeft: 10, color: "#333" }}>500 membres</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <ThemedText type='subtitle' style={{marginTop: 25}}>À propos de vous</ThemedText>
                        <ThemedText style={{color: '#00000080', marginTop: 15}}>Amateur de musique live, de ciné en plein air et de rencontres inspirantes, Rémi aime faire bouger sa ville et 
                            connecter les gens autour d’expériences uniques. Que ce soit pour organiser une expo photo, un tournoi de molkky ou un 
                            apéro chill en rooftop, il a toujours une idée derrière la tête.
                        </ThemedText>
                    </View>

                    <View>
                        <Link href="/edit" asChild>
                            <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Modifier mon profil</Text>
                            </Pressable>
                        </Link>
                    </View>

                    <View>
                        <Pressable
                            style={styles.button}
                            onPress={async () => {
                                await supabase.auth.signOut();
                            }}
                        >
                            <Text style={styles.buttonText}>Se déconnecter</Text>
                        </Pressable>
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
    button: {
        backgroundColor: "#2D5EFF",
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        padding: 15,
        alignItems: "center",
    },
    eventImage: {
        width: 120,
        height: 150,
        borderRadius: 15,
    },
    content: {
        flex: 1,
        marginLeft: 25,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    icon: {
        fontSize: 20,
        marginRight: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#555",
    },
    value: {
        fontSize: 14,
        color: "#333",
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#fff",
    },
});