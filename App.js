import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { applyMiddleware, createStore } from 'redux';
import { DetailsScreen } from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';
import './ReactotronConfig';
import reducer from './reducers';
import thunk from 'redux-thunk';

Reactotron.log('Testando a conexão com o Reactotron.');

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Listagem de Poneys'
      })
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
