import {Stack} from "expo-router";

export default function RootLayout(){
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen 
                name="detalleusuario" 
                options={{ headerShown: true, title: 'Detalle del usuario' }} 
            />
            <Stack.Screen 
                name="actualizar-usuario" 
                options={{ headerShown: true, title: 'Actualizar Usuario' }} 
            />
        </Stack>
    );
}