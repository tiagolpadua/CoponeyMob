import React from 'react';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import { DetailsScreen } from './components/DetailsScreen';
import request from 'superagent';

import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { set } from './reducers';

request
  .get('https://cat-fact.herokuapp.com/facts')
  .then(res => {
    if(res.ok) {
      console.log('Request realizado com sucesso!');
    }
  });
  
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

const store = createStore(reducer, applyMiddleware(thunk));

function setToRemote() {
  return dispatch =>
    request.get('https://cat-fact.herokuapp.com/facts')
    .then(res => dispatch(set(res.body.all.length)))
};

store.dispatch(setToRemote());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
