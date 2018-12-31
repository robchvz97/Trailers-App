//IMPORTO LIBRERIAS NECESARIAS PARA LA APP
import React from "react";
import PropTypes from 'prop-types';  //SIRVE PARA MANDAR WARNING SI FALTA DE USAR ALGUN ARGUMENTO DEL COMPONENTE CARD
import {
    View, 
    StyleSheet, 
    Text,
    Image,
    TouchableHighlight,
    Linking
} from "react-native";

//CREAMOS FUNCION DEL COMPONENTE CARD CON ARGUMENTOS
//YA QUE SE UTILIZARÁ VARIAS VECES CON DIFERENTES VALORES
const Card = ({title, urlimage, description, url}) => {

// CODIGO POR UTILIZAR
    const ImageUrl = {
        uri: urlimage
    };

    const onPressButton = () => {
        Linking.openURL(url);
    };

//PARTE VISUAL DEL COMPONENTE
    return (
        <View style={styles.content}>
            <Text style={styles.title}>
               {title}
            </Text>
            <TouchableHighlight onPress={onPressButton}>
            <Image style={styles.img} source={ImageUrl}/>
            </TouchableHighlight>
            <Text style={styles.descriptionText}>
                {description}
            </Text>

            <TouchableHighlight onPress={onPressButton} underlayColor="#fff" style={styles.button}>
                <Text style={styles.buttonText}>Ver Trailer</Text>
            </TouchableHighlight>
        </View>
    )
};



//CREAMOS HOJA DE ESTILOS
const styles = StyleSheet.create({
    content: {
        marginTop:25,
        flex:0,   //flex 0 hace que todo se ajuste al contenido
        backgroundColor: '#e6e6e6',
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize:23,
        color:"black",
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    img: {
        height:180,
        borderRadius:15,
        width:350
    },
    button: {
        height:40,
        backgroundColor: "#80b3ff",
        marginTop:20,
        justifyContent: 'center',
        borderRadius: 10,
        width:120
    },
    buttonText: {
        fontSize:20,
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    descriptionText: {
        paddingTop:20,
        fontSize: 15,
        color: "black",
    }
});

//UTILIZAMOS LA LIBRERIA PROPTYPES PARA VALIDAR QUE SE UTILICEN TODOS LOS ARGUMENTOS
//DEL COMPONENTE CARD
Card.propTypes = {
    title: PropTypes.string.isRequired,
    urlimage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

//IMPORTANTE EXPORTAR EL COMPONENTE PARA UTILIZARLO EN APP.JS
export default Card;