import React from 'react';

import {Text, View, StyleSheet, Button} from 'react-native';

export default class HomeScreen extends React.Component {

  _navigateTo(screen, body){
    return this.props.navigation.navigate(screen, body);
  }

  handleDepositPress = () => this._navigateTo('Deposit', {email: this.state.email});

  handleMyDebtsPress = () => this._navigateTo('Balance', {email: this.state.email});

  componentWillMount() {
    /* Read the params from the Login Screen state */
    const { params } = this.props.navigation.state;
    const email = params ? params.email : null;
    this.setState({email: email});

  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.marginBotMd}> Welcolme {this.state.email}</Text>
        <Button style={styles.marginBotXlg} title="Deposit $$" onPress={ this.handleDepositPress }/>
        <Button style={styles.marginBotXlg} title="My Debts" onPress={ this.handleMyDebtsPress }/>
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
  marginBotXlg: {
    marginBottom: 40
  }, 
  marginBotMd: {
    marginBottom: 20
  },
});
