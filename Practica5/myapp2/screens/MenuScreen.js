/*Zona 1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextinputScreen from './TextinputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';

/*Zona 2: zona de los componentes visuales (main)*/
export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safeArea':
            return <SafeAreaScreen/>
        case 'pressable':
            return <PressableScreen/>
        case 'text':
            return <TextinputScreen/>
        case 'flat':
            return <FlatListScreen/>
        case 'imageback':
            return <ImageBackgroundScreen/>
        case 'activity':
            return <ActivityIndicatorScreen/>
        case 'modal':
            return <ModalScreen/>

        case 'menu':
            default:
                return (
                    <View style={styles.container}>

                        <Text> MENÚ DE PRACTICAS: </Text>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('tarjetas')} title='Practica: Tarjetas'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('safeArea')} title='Practica: Safe Area'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('pressable')} title='Practica: Pressable'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('text')} title='Practica: Textinput'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('flat')} title='Practica: FlatList'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('imageback')} title='Practica: ImageBackground'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('activity')} title='Practica: ActivityIndicator'/>
                        <Text> </Text>
                        <Button onPress={()=>setScreen('modal')} title='Practica: Modal & Bottom'/>

                        <StatusBar style="auto" />
                    </View>
                );
  }
}

/*Zona 3: estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
});
