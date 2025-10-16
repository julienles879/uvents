import { ThemedText } from '@/components/ThemedText';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ModifUserScreen() {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        // Récupérer la session actuelle de l'utilisateur
        supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        if (session) getProfile(session);
        });
    }, []);

    async function getProfile(session: Session) {
        try {
        setLoading(true);
        const { data, error } = await supabase
            .from('profiles')
            .select('username, email, gender, phone, description, avatar_url')
            .eq('id', session.user.id)
            .single();

        if (error) throw error;

        if (data) {
            setUsername(data.username || '');
            setEmail(data.email || session.user.email);
            setGender(data.gender || '');
            setPhone(data.phone || '');
            setDescription(data.description || '');
            setAvatarUrl(data.avatar_url || '');
        }
        } catch (error) {
        if (error instanceof Error) Alert.alert(error.message);
        } finally {
        setLoading(false);
        }
    }

    async function updateProfile() {
        try {
        setLoading(true);
        if (!session?.user) throw new Error('Utilisateur non connecté');

        const updates = {
            id: session.user.id,
            username,
            email,
            gender,
            phone,
            description,
            avatar_url: avatarUrl,
            updated_at: new Date(),
        };

        const { error } = await supabase.from('profiles').upsert(updates);

        if (error) throw error;

        Alert.alert('✅ Modifications enregistrées avec succès');
        } catch (error) {
        if (error instanceof Error) Alert.alert(error.message);
        } finally {
        setLoading(false);
        }
    }

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <ThemedText style={styles.title} type="title">Mon Profil</ThemedText>

            <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                <Image
                source={avatarUrl ? { uri: avatarUrl } : require('@/assets/images/react-logo.png')}
                style={styles.img}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                placeholderTextColor="#ccc"
                value={username}
                onChangeText={setUsername}
                />
                <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                value={email}
                editable={false}
                />
                <TextInput
                style={styles.input}
                placeholder="Genre"
                placeholderTextColor="#ccc"
                value={gender}
                onChangeText={setGender}
                />
                <TextInput
                style={styles.input}
                placeholder="Téléphone"
                placeholderTextColor="#ccc"
                value={phone}
                onChangeText={setPhone}
                />
                <TextInput
                style={[styles.input, { height: 100 }]}
                multiline
                placeholder="Description"
                placeholderTextColor="#ccc"
                value={description}
                onChangeText={setDescription}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Pressable style={styles.button} onPress={updateProfile} disabled={loading}>
                <Text style={styles.buttonText}>
                    {loading ? 'Chargement...' : 'Appliquer les modifications'}
                </Text>
                </Pressable>
            </View>
            </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D5EFF',
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#00000080',
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        marginBottom: 10,
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: 'red',
        marginTop: 20,
    },
    formGroup: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    input: {
        backgroundColor: '#0039C8',
        color: '#fff',
        fontSize: 18,
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 10,
    },
    buttonText: {
        color: '#0039C8',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});