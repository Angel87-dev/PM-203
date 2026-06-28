import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Button, Switch } from 'react-native';

export default function RegistroEvento() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const registro = () => {
    if(!nombre || !carrera || !semestre)
    {
      Alert.alert("Campos incompletos\n", "Debes llenar todos los campos.");
      return;
    }
    if(isNaN(semestre) || semestre < 1 || semestre > 10){
      Alert.alert("Error\n", "El semestre debe ser un número.");
      return;
    }
    Alert.alert(
      "Registro enviado",
      `Nombre: ${nombre} \nCarrera: ${carrera} \nSemestre: ${semestre} \n\nTaller: ${taller ? 'Sí' : 'No'} \nConstancia: ${constancia ? 'Sí' : 'No'} \nDeportes: ${deportes ? 'Sí' : 'No'}`,
      [{ text: "Aceptar" }]
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}>
        <Text style={styles.Titulo}>Registro de Evento Universitario</Text>
        <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre completo"
        placeholderTextColor="black"
        autoCapitalize="words"
        value={nombre}
        onChangeText={(texto) => setNombre(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder="Ingresa tu carrera"
        placeholderTextColor="black"
        value={carrera}
        onChangeText={(texto) => setCarrera(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder="Ingresa tu cuatrimestre"
        placeholderTextColor="black"
        value={semestre}
        onChangeText={(texto) => setSemestre(texto)}
        />

        <Text style={styles.opciones}>Opciones</Text>

        <View style={styles.switchRow}>
          <Text>¿Asistirá al taller?</Text>
          <Switch style={styles.switch} value={taller} onValueChange={() => setTaller(!taller)}/>
        </View>

        <View style={styles.switchRow}>
          <Text>¿Requiere constancia?</Text>
          <Switch style={styles.switch} value={constancia} onValueChange={() => setConstancia(!constancia)}/>
        </View>

        <View style={styles.switchRow}>
          <Text>¿Participará en deportes?</Text>
          <Switch style={styles.switch} value={deportes} onValueChange={() => setDeportes(!deportes)}/>
        </View>

        <View style={styles.boton}>
          <Button title="Enviar Registro" color="blue" onPress={registro}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 24,
    gap: 12,
  },
  Titulo: {
    padding: 30,
    fontSize: 20,
    alignContent: "stretch",
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
    marginBottom: 12,
  },
  opciones: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  switch: {
    fontSize: 15,
    marginTop: 8,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  boton: {
    marginTop: 16,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});