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
import React from "react";
import { Alert, Image, Modal, StyleSheet } from "react-native";

class HeaderButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      inputUserName: "",
      inputPassword: "",
      user: null
    };
  }

  closeLoginModal = () => {
    this.setState({ modalVisible: false });
  };

  openLoginModal = () => {
    this.setState({ modalVisible: true });
  };

  login = user => {
    this.setState({
      user
    });
  };

  logout = () => {
    this.setState({
      user: null
    });
  };

  handleLogin = () => {
    this.closeLoginModal();
    if (
      this.state.inputUserName === "admin" &&
      this.state.inputPassword === "123456"
    ) {
      this.login({ name: this.state.inputUserName });
    } else {
      Alert.alert("Erro", "Credenciais inválidas", [{ text: "OK" }]);
    }
  };

  handleLogout = () => {
    Alert.alert(
      "Logout",
      this.state.user.name + ", confirma o logout?",
      [{ text: "Sim", onPress: this.logout }, { text: "Não", style: "cancel" }],
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
                onChangeText={inputUserName => this.setState({ inputUserName })}
                value={this.state.inputUserName}
              />
            </Item>
            <Item floatingLabel last style={{ marginBottom: 20 }}>
              <Label>Senha</Label>
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={inputPassword => this.setState({ inputPassword })}
                value={this.state.inputPassword}
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
        {this.state.user ? (
          <View style={styles.headerButtonContainer}>
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

export default HeaderButtonsComponent;
