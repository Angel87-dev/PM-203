import {View, ScrollView, Text, TextInput, Alert, Button, StyleSheet, Platform} from 'react-native';
import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

Platform
if (Platform.OS === "web"){
  Alert.alert = (titular, mensaje, boton) => {
    const list = Array.isArray(mensaje) ? mensaje : boton;
    if (list){
      if (window.confirm(titular)) list.find((b) => b.onPress)?.onPress();
    }else{
      window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    }
  };
}

export default function TextinputScreen() {
  const [nombre, SetNombre] = useState();
  const [correo, SetCorreo] = useState();
  const [contraseña, SetContraseña] = useState();
  const [numero, SetNumero] = useState();
  const [bio, SetBio] = useState();

  const registro = () =>{
    if(!nombre || !correo || !contraseña || !numero)
    {
      Alert.alert("Faltan datos", "Completa los campos faltantes");
      return;
    }
    if(!correo.includes("@") || !correo.includes(".com")){
      Alert.alert("Correo invalido", "El correo debe contener @ y .com");
      return;
    }
    if(!numero.match(/^[0-9+ ]+$/)){
      Alert.alert("Numero Invalido", "El numero solo debe de contener 10 digitos");
      SetNumero("");
      return;
    }
    Alert.alert(`Registrara ${nombre}`),[
      {
        text:"No",
        styles:"cancel",
      },
      {
        text:"Si",
        onPress:()=>Alert.alert("Exito", "Usuario registrado correctamente")
      }
    ]
  }

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}>
        <Text style={styles.Titulo}>Formulario de registro de usuario</Text>
        <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        placeholderTextColor="black"
        autoCapitalize="words"
        value={nombre}
        onChangeText={(texto) => SetNombre(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo electronico"
        placeholderTextColor="black"
        keyboardType="email-address"
        autoCapitalize="none"
        value={correo}
        onChangeText={(texto) => SetCorreo(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña de minimo 6 caracteres"
        placeholderTextColor="black"
        secureTextEntry="true"
        value={contraseña}
        onChangeText={(texto) => SetContraseña(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder="Ingresa tu número de teléfono"
        placeholderTextColor="black"
        keyboardType="number-pad"
        maxLength={12}
        value={numero}
        onChangeText={(texto) => SetNumero(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder="Cuentanos sobre ti (Opcional)"
        placeholderTextColor="black"
        multiline="true"
        numberOfLines={4}
        maxLength={20}
        value={bio}
        onChangeText={(texto) => SetBio(texto)}
        />

        <Button title="Registrar" color="red" onPress={registro}/>
      </View>
    </ScrollView>
  )
}

/*Zona 3: estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "z#fff",
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
  },
  input: {
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
  },
});