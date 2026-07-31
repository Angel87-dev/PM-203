import React, { useState } from 'react';
import {SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Alert, Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ActualizarUsuario() {
  const { id, nombre: nombreParam, edad: edadParam } = useLocalSearchParams();
  const router = useRouter();

  const [nombre, setNombre] = useState(nombreParam || '');
  const [edad, setEdad] = useState(String(edadParam || ''));
  const [guardando, setGuardando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarCambios = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Vacíos', 'Todos los campos son obligatorios');
      return;
    }

    try {
      setGuardando(true);
      const respuesta = await fetch(`http://localhost:5000/v1/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46MTIzNA==',
        },
        body: JSON.stringify({ nombre, edad }),
      });

      if (respuesta.ok) {
        mostrarMensaje('Éxito', 'Usuario actualizado correctamente');
        router.replace('/(tabs)/consulta');
      } else {
        mostrarMensaje('Error', 'No se pudo actualizar el usuario');
      }
    } catch (error) {
      console.log('Error API: ', error);
      mostrarMensaje('Error', 'No fue posible actualizar el usuario');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre del usuario"
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          keyboardType="numeric"
          placeholder="Edad del usuario"
        />

        <Pressable
          style={styles.boton}
          onPress={guardarCambios}
          disabled={guardando}
        >
          <Text style={styles.textoBoton}>
            {guardando ? 'Guardando...' : 'Guardar cambios'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 5,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#F5C518',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  textoBoton: {
    color: '#0e0c0c',
    fontSize: 17,
    fontWeight: 'bold',
  },
});