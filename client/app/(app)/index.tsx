import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { AuthContext } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            // console.log("Checking auth =", storedToken);
            if (!storedToken) {
                router.replace('/auth');
                // router.replace('/(main)/search');
            } else {
                // router.replace('/(main)/Profile');
                router.replace('/(main)/Dashboard/Performance');
            }
        };

        checkAuth();
    }, [authContext, router]);

    if (!isReady) {
        return null;
    }
    return null;
}
