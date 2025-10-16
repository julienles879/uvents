import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, Pressable, AppState } from 'react-native';
import { supabase } from '@/lib/supabase';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    async function signUpWithEmail() {
        setLoading(true);
        const { data: { session }, error } = await supabase.auth.signUp({ email, password });
        if (error) Alert.alert(error.message);
        if (!session) Alert.alert('Vérifie ton email pour valider ton inscription.');
        setLoading(false);
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Connexion / Inscription</Text>

        <TextInput
            style={styles.input}
            placeholder="email@adresse.com"
            placeholderTextColor="#aaa"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
        />

        <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#aaa"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            autoCapitalize="none"
        />

        <Pressable style={styles.button} onPress={signInWithEmail} disabled={loading}>
            <Text style={styles.buttonText}>{loading ? 'Connexion...' : 'Se connecter'}</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: '#2D5EFF' }]} onPress={signUpWithEmail} disabled={loading}>
            <Text style={[styles.buttonText, { color: '#fff' }]}>
            {loading ? 'Création...' : "S'inscrire"}
            </Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#eee',
        marginVertical: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
});