import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default class DepositScreen extends React.Component {

  render(){

    return (
      <View style={styles.container}>
        <Text> Deposit view</Text>
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
