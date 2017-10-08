import React, { Component } from 'react';
import {View} from 'react-native';
import ListaItens from './src/components/ListaItens';

export default class App extends Component {
  render() {
    return (
      <View>
      <ListaItens />
      <ListaItens />
      </View>
    );
  }
}
