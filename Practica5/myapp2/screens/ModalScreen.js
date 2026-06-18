/*Zona 1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

/*Zona 2: zona de los componentes visuales (main)*/
export default function ModalScreen() {
  return (
    <View style={styles.container}>

        <Text>Aquí va la practica de Fernando Daniel</Text>

      <StatusBar style="auto" />
    </View>
  );
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
