import React from "react";

import { Button, Text, View, StyleSheet } from "react-native";

export default class Debt extends React.Component {

  render () {

    return (
        <View style={styles.view}>
          <Text style={{ fontWeight: 'bold' }}>
            {'#' + this.props.hashtag + '  $' + this.props.balance}
          </Text>
          <Button title="💸" onPress={ this.props.handleButtonPress }/>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 14
  }
});
