import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import ListarPoneysScreen from "./components/ListarPoneysScreen";
import HeaderButtonsComponent from "./components/HeaderButtonsComponent";
import AdicionarPoneyScreen from "./components/AdicionarPoneyScreen";
import AtualizarPoneyScreen from "./components/AtualizarPoneyScreen";

const RootStack = createStackNavigator(
  {
    ListarPoneys: {
      screen: ListarPoneysScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Lista de Poneys",
        headerRight: <HeaderButtonsComponent navigation={navigation} />
      })
    },
    AdicionarPoney: {
      screen: AdicionarPoneyScreen,
      navigationOptions: {
        title: "Adicionar Poney"
      }
    },
    AtualizarPoney: {
      screen: AtualizarPoneyScreen,
      navigationOptions: {
        title: "Atualizar Poney"
      }
    }
  },
  {
    initialRouteName: "ListarPoneys"
  }
);

class CoponeyMobNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CoponeyMobNav;
