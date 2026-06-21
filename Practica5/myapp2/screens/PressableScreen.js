/*Zona 1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Switch, Alert} from 'react-native';

/*Zona 2: zona de los componentes visuales (main)*/
export default function PressableScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () =>
    setIsDarkMode(previousState => !previousState);
  return (
    <View style={[styles.container, isDarkMode ? styles.bgDark : styles.bgLight]}>
      <Text style={[styles.title, isDarkMode ? styles.textDark : styles.textLight]}>
        Ajustes del Sistema
      </Text>

      <View style={styles.row}>
        <Text style={[styles.label, isDarkMode ? styles.textDark : styles.textLight]}>
          Modo Oscuro: {isDarkMode ? "Activado" : "Desactivado"}
        </Text>

        <Switch trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isDarkMode}
        />
      </View>

      <Pressable onPress={() => Alert.alert('Éxito', 'Configuración guardada correctamente')}
        onLongPress={() => Alert.alert('Info', 'Mantuviste presionado el botón')}
        style={({ pressed }) => [styles.button, {backgroundColor: pressed ? '#0056b3' : '#007BFF'}]}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
      </Pressable>

      <StatusBar style='auto'/>
    </View>
  );
}

/*Zona 3: estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  bgLight: {backgroundColor: '#f5f5f5'},

  bgDark: {backgroundColor: '#121212'},

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  textLight: {color: '#000'},

  textDark: {color: '#fff'},

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 18,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});