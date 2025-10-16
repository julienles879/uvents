import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';
import { Camera } from 'expo-camera';

export function usePermissions() {
    const [permissions, setPermissions] = useState({
        camera: null as boolean | null,
        location: null as boolean | null,
        contacts: null as boolean | null,
    });

    useEffect(() => {
        (async () => {
        // Camera
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        // Location
        const locationStatus = await Location.requestForegroundPermissionsAsync();
        // Contacts
        const contactsStatus = await Contacts.requestPermissionsAsync();

        setPermissions({
            camera: cameraStatus.status === 'granted',
            location: locationStatus.status === 'granted',
            contacts: contactsStatus.status === 'granted',
        });
        })();
    }, []);

    return permissions;
}