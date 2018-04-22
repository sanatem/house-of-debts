import React from 'react';

import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

const mock = [{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111},{'hash-tag':'abc','balance': 111}];

export default class BalanceScreen extends React.Component {
  
  constructor () {
    super()
    this.state = { balances: [] }
  }

  _render = {
    item: ({item}) => <Debt hashtag={item['hash-tag']} balance={item['balance']}/>
  }

  componentWillMount() {
    var result = [];
    
    mock.forEach((m) => {
      result.push({
        data: [m["hash-tag"],m['balance']]
      }) //fetch 
    });

    this.state.balances = [...result];
      
  }

  render() {
     return this.state.balances.length !== 0 ?  (<View style={styles.view}><FlatList data={mock} renderItem={this._render.item}  /></View>) : null;
  }s
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    
    fontSize: 14
  }
});
