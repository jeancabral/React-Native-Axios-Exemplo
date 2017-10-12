import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import axios from "axios";

import Itens from "./Itens";

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };

  }


  componentWillMount() {
    console.log('eu me amo');
    //Requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      //.then(response => { console.log(response); })
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados!'); })
  }


  render() {
    return (
      <ScrollView style={estilo.container}>
        {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#DDD'
  }

});
