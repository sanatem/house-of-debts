import React from 'react';
import {LoginScreen, HomeScreen, DepositScreen, BalanceScreen} from './components/index.js';
import { StackNavigator} from 'react-navigation';

const Root = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Deposit: {
    screen: DepositScreen,
  },
  Balance: {
    screen: BalanceScreen,
  },
});


export default class App extends React.Component {

  render() {
    return (<Root/>);
  }
}

