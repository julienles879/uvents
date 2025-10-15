import { ThemedText } from '@/components/ThemedText';
import { Image } from 'expo-image';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ModifUserScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>    
                <ThemedText style={styles.title} type="title">Logo Uvents</ThemedText>

                <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                    <Image 
                        source={require('@/assets/images/react-logo.png')} 
                        style={styles.img}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <ThemedText style={{ color: '#fff', fontSize: 20, backgroundColor: '#0039C8', padding: 10, borderRadius: 5, marginHorizontal: 20 }}>
                        John Doe
                    </ThemedText>
                    <ThemedText style={{ color: '#fff', fontSize: 20, backgroundColor: '#0039C8', padding: 10, borderRadius: 5, marginHorizontal: 20, marginTop: 10 }}>
                        remicorbeau@gmail.com
                    </ThemedText>
                    <ThemedText style={{ color: '#fff', fontSize: 20, backgroundColor: '#0039C8', padding: 10, borderRadius: 5, marginHorizontal: 20, marginTop: 10 }}>
                        Homme
                    </ThemedText>
                    <ThemedText style={{ color: '#fff', fontSize: 20, backgroundColor: '#0039C8', padding: 10, borderRadius: 5, marginHorizontal: 20, marginTop: 10 }}>
                        07 ** ** ** **
                    </ThemedText>
                    <View style={{backgroundColor: '#0039C8', padding: 10, borderRadius: 5, marginHorizontal: 20, marginTop: 10}}>
                        <ThemedText style={{ color: '#fff', fontSize: 20 }}>
                            Description
                        </ThemedText>
                        <ThemedText style={{ color: '#ffffff80', fontSize: 16, marginTop: 10 }}>
                        Amateur de musique live, de ciné en plein air et de rencontres inspirantes, Rémi aime faire bouger sa ville et connecter les gens autour d’expériences uniques. Que ce soit pour organiser une expo photo, un tournoi de molkky ou un apéro chill en rooftop, il a toujours une idée derrière la tête.
                        </ThemedText>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Pressable style={styles.button} onPress={() => alert("Modifications appliquées")}>
                        <Text style={styles.buttonText}>Appliquer les modifications</Text>
                    </Pressable>
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
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    backButton: {
        fontSize: 28,
        color: "#fff",
        marginRight: 10,
        position: 'absolute',
        left: 20,
    },
    title: { 
        fontSize: 22, 
        fontWeight: "bold",
        backgroundColor: '#00000080', 
        color: '#fff', 
        textAlign: 'center', 
        padding: 10,
        marginBottom: 10,
    },
    subtitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    img: {
        width: 120, 
        height: 120, 
        borderRadius: 100, 
        backgroundColor: 'red', 
        marginTop: 20
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 10,
    },
    buttonText: {
        color: "#0039C8",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
});