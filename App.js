import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from "./components/CardSet";
import cards from './data';


//COMIENZA A RENDERIZAR MI COMPONENTE CARD CON LOS DATOS DEL PRIMER VIDEO

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardSet items={cards}>
        </CardSet>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0edf2',
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column'
    
  },
  
    
});
