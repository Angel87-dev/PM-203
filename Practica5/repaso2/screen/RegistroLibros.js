/*Zona 1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ActivityIndicator,
  FlatList, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';

/*Zona 2: zona de los componentes visuales (main)*/
export default function RegistroLibros() {
  const [splash, setSplash] = useState(true);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  const agregarLibro = () => {
    if (!titulo || !autor || !genero) {
      Alert.alert(
        "Faltan datos",
        "Completa todos los campos."
      );
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };

      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      Alert.alert(
        "Éxito",
        "Libro agregado correctamente."
      );
    }, 4000);
  };

  if (splash) {
    return (
      <ImageBackground
        source={require('../assets/fondo.jpg')}
        style={styles.splashContainer}
        resizeMode="cover"
      >
        <Text style={styles.carga}>Bienvenido</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/fondo2.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        enabled={true}
      >
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>
            Catálogo de Libros
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ingresa el título del libro"
            value={titulo}
            onChangeText={(texto) => setTitulo(texto)}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingresa el autor"
            value={autor}
            onChangeText={(texto) => setAutor(texto)}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingresa el género"
            value={genero}
            onChangeText={(texto) => setGenero(texto)}
          />

          {cargando && (
            <ActivityIndicator
              animating={true}
              size="large"
              color="blue"
              style={styles.spinner}
            />
          )}

          <Pressable
            style={styles.boton}
            onPress={agregarLibro}
          >
            <Text style={styles.textoBoton}>
              Agregar Libro
            </Text>
          </Pressable>

          <FlatList
            style={styles.lista}
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Título: </Text>
                  {item.titulo}
                </Text>

                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Autor: </Text>
                  {item.autor}
                </Text>

                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Género: </Text>
                  {item.genero}
                </Text>
              </View>
            )}
          />
        </View>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

/*Zona 3: estilos y posicionamiento*/
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  fondo: {
    flex: 1,
  },

  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  carga: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },

  contenedor: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },

  input: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },

  spinner: {
    marginVertical: 15,
  },

  boton: {
    width: '90%',
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  lista: {
    width: '90%',
  },

  item: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});