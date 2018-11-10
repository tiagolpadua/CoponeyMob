import {
  Button,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  View
} from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { Image, Modal, Alert } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, logout } from "../actions";

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userName: "admin",
      password: "123456"
      // userName: "",
      // password: "",
    };
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  openLoginModal = () => {
    this.setState({ modalVisible: true });
  };

  handleLogin = () => {
    this.closeModal();
    if (this.state.userName === "admin" && this.state.password === "123456") {
      this.props.login({ name: this.state.userName });
    } else {
      Alert.alert("Erro", "Credenciais inválidas", [{ text: "OK" }]);
    }
  };

  renderLoginModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.closeModal}
      >
        <View>
          <Form>
            <Item floatingLabel>
              <Label>Usuário</Label>
              <Input
                autoCapitalize="none"
                onChangeText={userName => this.setState({ userName })}
                value={this.state.userName}
              />
            </Item>
            <Item floatingLabel last style={{ marginBottom: 20 }}>
              <Label>Senha</Label>
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Button
              full
              primary
              style={{ marginBottom: 20 }}
              onPress={this.handleLogin}
            >
              <Text>Login</Text>
            </Button>
            <Button full light onPress={this.closeModal}>
              <Text>Cancelar</Text>
            </Button>
          </Form>
        </View>
      </Modal>
    );
  };

  handleLogout = () => {
    Alert.alert(
      "Logout",
      this.props.profile.user.name + ", confirma o logout?",
      [
        { text: "Sim", onPress: this.props.logout },
        { text: "Não", style: "cancel" }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={{ paddingRight: 10 }}>
        {this.props.profile.user ? (
          <Button transparent onPress={this.handleLogout}>
            <Image source={require("../assets/admin.png")} />
          </Button>
        ) : (
          <Button onPress={this.openLoginModal}>
            <Icon name="contact" />
          </Button>
        )}
        {this.renderLoginModal()}
      </View>
    );
  }
}

ProfileComponent.propTypes = {
  profile: PropTypes.object
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, logout }, dispatch);

ProfileComponent.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
