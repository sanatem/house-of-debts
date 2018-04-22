import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    email: ''
  }

  handleEmail = (text) => this.setState({email: text })

  handlePress = () => {}

  render() {
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
