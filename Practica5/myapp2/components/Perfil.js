/*Avance uno*/
import {View, Text, Button, StyleSheet} from "react-native";
import React,{useState} from "react";

export const Perfil = ({nombre, carrera, materia, cuatri}) => {

    const[mostrar,setMostrar]=useState(false)

    return (
        <View style={styles.tarjeta}>
            <Text style={styles.nombre}>{nombre}</Text>

            {/* Renderizado condicional */}
            {mostrar &&
            <>
            <Text style={styles.carrera}>{carrera}</Text>
            <Text style={styles.otroTexto}>{materia}</Text>
            <Text style={styles.otroTexto}>{cuatri}</Text>
            </>
            }
            <Button title="Mostrar Perfil" onPress={ ()=>setMostrar(!mostrar) }/>

        </View>
    );
}

const styles=StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:600,
        textTransform:'uppercase',
    },
    carrera:{
        fontSize:18,
        color:'blue',
        fontFamily:'Roboto',
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontFamily:'italic',
    },
    tarjeta:{
        borderWidth:2,
        padding:25,
        margin:15,
    },
})

/*Perfil usando desestructuracion*/
/* import {View, Text} from "react-native-web";

export const Perfil = ({nombre, carrera, materia, cuatri}) => {
    return (
        <View>
            <Text>{nombre}</Text>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
        </View>
    );
} */

//Perfil usando props

/* import {View, Text} from "react-native-web";

export const Perfil = (props) => {
    return (
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
    );
} */