import { Camera } from 'expo-camera';
import Constants from 'expo-constants';
import * as Contacts from 'expo-contacts';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export function usePermissions() {
    const [permissions, setPermissions] = useState({
        camera: null as boolean | null,
        location: null as boolean | null,
        contacts: null as boolean | null,
        notifications: null as boolean | null,
    });

    const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            // Camera
            const cameraStatus = await Camera.requestCameraPermissionsAsync();

            // Location
            const locationStatus = await Location.requestForegroundPermissionsAsync();

            // Contacts
            const contactsStatus = await Contacts.requestPermissionsAsync();

            // Notifications
            let notificationStatus: boolean = false;
            if (Constants.isDevice) {
                const { status: existingStatus } = await Notifications.getPermissionsAsync();
                let finalStatus = existingStatus;

                if (existingStatus !== 'granted') {
                    const { status } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }

                notificationStatus = finalStatus === 'granted';

                if (notificationStatus) {
                    const tokenData = await Notifications.getExpoPushTokenAsync();
                    setExpoPushToken(tokenData.data);
                    // tu peux envoyer tokenData.data à ton backend pour stocker le token
                }
            } else {
                Alert.alert('Les notifications push nécessitent un vrai appareil');
            }

            setPermissions({
                camera: cameraStatus.status === 'granted',
                location: locationStatus.status === 'granted',
                contacts: contactsStatus.status === 'granted',
                notifications: notificationStatus,
            });
        })();
    }, []);

    return { permissions, expoPushToken };
}