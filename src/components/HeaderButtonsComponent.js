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
import { StyleSheet, Image, Modal, Alert } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, logout } from "../actions";

class HeaderButtonsComponent extends React.Component {
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

  closeLoginModal = () => {
    this.setState({ modalVisible: false });
  };

  openLoginModal = () => {
    this.setState({ modalVisible: true });
  };

  handleLogin = () => {
    this.closeLoginModal();
    if (this.state.userName === "admin" && this.state.password === "123456") {
      this.props.login({ name: this.state.userName });
    } else {
      Alert.alert("Erro", "Credenciais inválidas", [{ text: "OK" }]);
    }
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

  renderLoginModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.closeLoginModal}
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
            <Button full light onPress={this.closeLoginModal}>
              <Text>Cancelar</Text>
            </Button>
          </Form>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.headerButtonContainer}>
        <Button transparent>
          <Icon
            style={[styles.headerIconFont, styles.headerIconMargin]}
            name="eye"
          />
        </Button>
        {this.props.profile.user ? (
          <View style={styles.headerButtonContainer}>
            <Button transparent>
              <Icon
                style={[styles.headerIconFont, styles.headerIconMargin]}
                name="add"
              />
            </Button>
            <Button transparent onPress={this.handleLogout}>
              <Image
                style={styles.headerIconMargin}
                source={require("../assets/admin.png")}
              />
            </Button>
          </View>
        ) : (
          <Button transparent onPress={this.openLoginModal}>
            <Icon
              style={[styles.headerIconFont, styles.headerIconMargin]}
              name="contact"
            />
          </Button>
        )}
        {this.renderLoginModal()}
      </View>
    );
  }
}

HeaderButtonsComponent.propTypes = {
  profile: PropTypes.object
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, logout }, dispatch);

HeaderButtonsComponent.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func
};

const styles = StyleSheet.create({
  headerButtonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  headerIconMargin: {
    marginLeft: 10,
    marginRight: 10
  },
  headerIconFont: {
    fontSize: 35
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderButtonsComponent);
