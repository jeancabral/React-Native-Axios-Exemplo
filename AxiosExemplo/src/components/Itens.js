import React, { Component } from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default class Itens extends Component {
  render() {
    return (
      <View style={estilo.item}>
        <View style={estilo.foto}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={estilo.detalhe}>
          <Text style={estilo.titulo}>{this.props.item.titulo}</Text>
          <Text style={estilo.valor}>R$ {this.props.item.valor}</Text>
          <Text>Local: {this.props.item.local_anuncio}</Text>
          <Text>Plubicado em: {this.props.item.data_publicacao}</Text>
          
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  foto:{
    width: 102,
    height: 102
  },
  detalhe:{
    flex: 1,
    marginLeft: 10
  },
  titulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5
  },
  valor: {
    fontSize:18,
    fontWeight:'bold',
    marginBottom: 5
  }

});


