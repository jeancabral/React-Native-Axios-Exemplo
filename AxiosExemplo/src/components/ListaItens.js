import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";

import Itens from "./Itens";

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };

  }


  componentWillMount() {
    //Requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      //.then(response => { console.log(response); })
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados!'); })
  }


  render() {
    return (
      <ScrollView style={{paddingTop:40, margin:10}}>
        {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}
