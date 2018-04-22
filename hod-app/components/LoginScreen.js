import React from 'react';
import {StyleSheet, Button, TextInput, Text, View} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class LoginScreen extends React.Component {

  state = {
    email: ''
  }

  handleEmail = (text) => this.setState({email: text })

  handlePress = () => {
    console.log(this.state.email);
    this.props.navigation.navigate('Home', {email: this.state.email})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>
          🏠 House of Debts 🏠
        </Text>
        <TextInput style={styles.input} placeholder="Ingrese su email" onChangeText={this.handleEmail}/>
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
  input:{
    padding: 10,
    margin: 10,
    width:250,
    textAlign:'center',
  },
});
