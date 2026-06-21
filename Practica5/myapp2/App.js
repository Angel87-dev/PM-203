/*Zona 1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';

/*Zona 2: zona de los componentes visuales (main)*/
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen />
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona 3: estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});