import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component {

  render(){

    /* Read the params from the Login Screen state */
    const { params } = this.props.navigation.state;
    const email = params ? params.email : null;

    return (
      <View style={styles.container}>
        <Text> Main menu !!</Text>
        <Text> Welcolme {email}</Text>
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
