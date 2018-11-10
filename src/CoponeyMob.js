import { Text } from "native-base";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";
import { DetalhaPoneyScreen } from "./components/DetalhaPoneyScreen";
import ListagemPoneysScreen from "./components/ListagemPoneysScreen";
import ProfileComponent from "./components/ProfileComponent";
import configureStore from "./configureStore";
import "./ReactotronConfig";

Reactotron.log("Testando a conexão com o Reactotron.");

const RootStack = createStackNavigator(
  {
    ListagemPoneys: {
      screen: ListagemPoneysScreen,
      navigationOptions: () => ({
        title: "Listagem de Poneys",
        headerRight: <ProfileComponent />
      })
    },
    DetalhaPoney: DetalhaPoneyScreen
  },
  {
    initialRouteName: "ListagemPoneys"
  }
);

// const store = createStore(reducer, applyMiddleware(thunk));

const store = configureStore();

export default class CoponeyMob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    setTimeout(() => this.setState({ isReady: true }), 0);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando...</Text>
          <Image source={require("./assets/loading.gif")} />
        </View>
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <RootStack />
          </View>
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  loadingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  loadingText: {
    fontSize: 20
  }
});
