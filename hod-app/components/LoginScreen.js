import React from 'react';

import {StyleSheet, Button, TextInput, Text, View} from 'react-native';

import { StackNavigator} from 'react-navigation';

export default class LoginScreen extends React.Component {

  state = {
    email: ''
  }

  handleEmail = (text) => this.setState({email: text })

  handlePress = () => this.props.navigation.navigate('Home')


  render(){
    return (
      <View style={styles.container}>
        <Text>House of Debts</Text>
        <TextInput placeholder="Ingrese su email" onChangeText={this.handleEmail}/>
        <Button title="Ingresar" onPress={this.handlePress}/>
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
});
