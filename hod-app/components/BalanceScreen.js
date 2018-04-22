import React from 'react';
import Debt from './balance/Debt';
import client from '../services/client'
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

export default class BalanceScreen extends React.Component {

  _navigateTo(screen, body){
    return this.props.navigation.navigate(screen, body);
  }

  handleDepositPress = () => this._navigateTo('Deposit', { email: 'asda' });

  constructor () {
    super()
    this.state = { balances: [{hash_tag:"sasa",balance:1}] }
  }

  _render = {
    item: ({item}) => (<Debt hashtag={item.hash_tag} balance={item.balance} handleButtonPress= {this.handleDepositPress}/>)
  }

  componentWillMount() {
    var result = [];

    const { params } = this.props.navigation.state;
    const email = params ? params.email : null;
    this.setState({email: email});

    client.getBalance(email).then((responseJson) => {
      responseJson.balances.forEach((balance) => 
        result.push(balance)
      )
      this.setState({balances: [...result]});
      console.log([...result]);
      console.log("sasa",this.state.balances);
    }); 
  }

  render() {
     return(<View style={styles.view}><FlatList data={this.state.balances} extraData={this.state} renderItem={this._render.item}  /></View>);
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});
