import React from 'react';

import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

import client from '../services/client'

export default class DepositScreen extends React.Component {

  state = {
      email: ''
    }

  handleDepositPress = () => {
    //client.postDeposit(this.state.email);
    this.props.navigation.navigate('Home', {email: this.state.email})
  }
  render(){

    return (
      <View style={styles.container}>
        <Text> Deposit view</Text>
        <Text> Ingrese los siguientes campos </Text>
        <TextInput style={styles.input} placeholder="Ingrese monto" />
        <TextInput style={styles.input} placeholder="Ingrese casa" />
        <TextInput  style={styles.input} placeholder="Ingrese descripcion" />
        <Button title="Depositar" onPress={this.handleDepositPress} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    padding: 10,
    margin: 10,
    width:250,
  },
});
