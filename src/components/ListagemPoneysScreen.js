import { Text, Body, Button, Left, ListItem, Right, Icon } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";

class ListagemPoneysScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userName: "admin",
      password: "123456",
      login: false,
      refresh: false
    };
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  refresh = () => {
    this.setState({
      refresh: !this.state.refresh
    });
  };

  login = () => {
    this.closeModal();
    if (this.state.userName === "admin" && this.state.password === "123456") {
      this.setState({ login: true });
      this.refresh();
    } else {
      Alert.alert("Erro", "Credenciais inválidas", [{ text: "OK" }]);
    }
  };

  logoff = () => {
    this.refresh();
    this.setState({
      userName: "admin",
      password: "123456",
      login: false
    });
  };

  noop = () => null;

  getUser = () => {
    if (this.state.login) {
      return (
        <View>
          <Text>Usuário Logado: {this.state.userName}</Text>
          <Button primary onPress={this.logoff}>
            <Text>Logoff</Text>
          </Button>
        </View>
      );
    } else {
      return (
        <Button primary onPress={this.openModal}>
          <Text>Logar</Text>
        </Button>
      );
    }
  };

  render() {
    const { poneys } = this.props;

    const isLoggedIn = this.state.login;

    return (
      <View>
        {this.getUser()}
        {isLoggedIn && (
          <Button primary onPress={this.noop}>
            <Text>Novo Poney</Text>
          </Button>
        )}
        <FlatList
          data={poneys.list}
          extraData={this.state.refresh}
          renderItem={({ item }) => (
            <ListItem noIndent>
              <Left>
                <Text style={styles.item}>{item.nome}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          )}
          keyExtractor={item => item._id}
        />
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <TextInput
                onChangeText={userName => this.setState({ userName })}
                value={this.state.userName}
              />
              <TextInput
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
              <Button onPress={this.login}>
                <Text>Ok</Text>
              </Button>
              <Button onPress={this.closeModal}>
                <Text>Cancelar</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

ListagemPoneysScreen.propTypes = {
  poneys: PropTypes.object
};

const mapStateToProps = state => {
  return {
    poneys: state.poneys
  };
};

const mapDispatchToProps = {};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 120
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListagemPoneysScreen);
