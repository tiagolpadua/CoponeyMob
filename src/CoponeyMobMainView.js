import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import HeaderButtonsComponent from "./components/HeaderButtonsComponent";
import ListaPoneysScreen from "./components/ListaPoneysScreen";
import { MantemPoneyScreen } from "./components/MantemPoneyScreen";
import "./ReactotronConfig";

const RootStack = createStackNavigator(
  {
    ListagemPoneys: {
      screen: ListaPoneysScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Lista de Poneys",
        headerRight: <HeaderButtonsComponent navigation={navigation} />
      })
    },
    MantemPoney: MantemPoneyScreen
  },
  {
    initialRouteName: "ListagemPoneys"
  }
);

class CoponeyMobMainView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      alert(this.props.error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.props.loading}
          textContent={"Carregando..."}
          textStyle={styles.spinnerTextStyle}
        />
        <RootStack />
      </View>
    );
  }
}

CoponeyMobMainView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    loading: state.app.loading,
    error: state.app.error
  };
};

const mapDispatchToProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinnerTextStyle: {
    color: "#FFF"
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoponeyMobMainView);
