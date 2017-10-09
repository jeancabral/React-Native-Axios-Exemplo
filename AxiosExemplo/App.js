import React, { Component } from 'react';
import {View} from 'react-native';
import ListaItens from './src/components/ListaItens';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.debug("Construindo a aplicação");
  }

  componentWillMount(){
    console.debug("Fazendo alguma coisa antes de renderizar");
  }

  componentDidMount(){
    console.debug("Fazendo alguma coisa DEPOIS de renderizar");
  }
  


  render() {
    const exemplo = "Exemplo para aparecer no Console";
    console.debug(exemplo);
    return (
      <View>
        <ListaItens />
        <ListaItens />
        <ListaItens />
      </View>
    );
  }
}
