import React from "react";
import { StyleSheet, View } from "react-native";
import Reactotron from "reactotron-react-native";
import ListaPoneysScreen from "./components/ListaPoneysScreen";
import "./ReactotronConfig";
import { Spinner } from "native-base";

Reactotron.log("Testando a conexão com o Reactotron.");

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
          <Spinner />
        </View>
      );
    } else {
      return <ListaPoneysScreen />;
    }
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
});
