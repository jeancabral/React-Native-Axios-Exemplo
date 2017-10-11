import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";

import Itens from "./Itens";

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };

  }


  componentWillMount() {
    //Requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.php')
      //.then(response => { console.log(response); })
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados!'); })
  }


  render() {
    return (
      <View>
        {console.log(this.state.listaItens)}
      </View>
    );
  }
}
