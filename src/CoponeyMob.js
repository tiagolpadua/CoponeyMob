import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { DetailsScreen } from "./components/DetailsScreen";
import HomeScreenNB from "./components/HomeScreenNB";
import "./ReactotronConfig";
import reducer from "./reducers";

Reactotron.log("Testando a conexão com o Reactotron.");

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreenNB,
      navigationOptions: () => ({
        title: "Listagem de Poneys"
      })
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const store = createStore(reducer, applyMiddleware(thunk));

export default class CoponeyMob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    setTimeout(() => this.setState({ loading: false }), 0);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.state.loading ? (
            <View style={styles.splashContainer}>
              <Text style={styles.loadingText}>Carregando...</Text>
              <Image source={require("./assets/loading.gif")} />
            </View>
          ) : (
            <RootStack />
          )}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  splashContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  loadingText: {
    fontSize: 20
  }
});
