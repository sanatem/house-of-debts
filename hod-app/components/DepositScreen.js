import React from 'react';

import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

import client from '../services/client'

export default class DepositScreen extends React.Component {

  handleDepositPress = () => {
    client.postDeposit({
      username: this.state.email,
      house: this.state.hashtag,
      reason: this.state.reason,
      amount: this.state.amount
     });

    this.props.navigation.navigate('Home', {email: this.state.email})
  }

  handleHashtag = (text) => this.setState({ hashtag: text })
  handleReason = (text) =>  this.setState({ reason: text })
  handleAmount = (text) =>  this.setState({ amount: text })


  componentWillMount() {
    /* Read the params from the Login Screen state */
    const { params } = this.props.navigation.state;
    const email = params ? params.email : null;
    this.setState({email: email});

  }

  render(){

    return (
      <View style={styles.container}>
        <Text> Deposit view</Text>
        <Text> Ingrese los siguientes campos </Text>
        <TextInput style={styles.input} placeholder="Ingrese monto" onChangeText={this.handleAmount}/>
        <TextInput style={styles.input} placeholder="Ingrese casa" onChangeText={this.handleHashtag} />
        <TextInput  style={styles.input} placeholder="Ingrese descripcion" onChangeText={this.handleReason} />
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
