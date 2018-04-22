import React from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import { StackNavigator} from 'react-navigation';

const Root = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  }
});


export default class App extends React.Component {

  render() {
    return (<Root/>);
  }
}

