import React from 'react';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './components/HomeScreen';
import { DetailsScreen } from './components/DetailsScreen';

Reactotron.log('Testando a conexão com o Reactotron.');
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
