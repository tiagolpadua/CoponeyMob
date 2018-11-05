import React from 'react';
import { Alert, TextInput, Modal, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userName: 'admin',
      password: '123456',
      login: false,
      refresh: false
    };
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  }

  refresh = () => {
    this.setState({
      refresh: !this.state.refresh
    })
  }

  login = () => {
    this.closeModal();
    if (this.state.userName === 'admin' && this.state.password === '123456') {
      this.setState({ login: true });
      this.refresh();
    } else {
      Alert.alert(
        'Erro',
        'Credenciais inválidas',
        [
          { text: 'OK' },
        ]
      )
    }
  }

  logoff = () => {
    this.refresh();
    this.setState({
      userName: 'admin',
      password: '123456',
      login: false
    });
  }

  noop = () => null;

  getUser = () => {
    if (this.state.login) {
      return (
        <View>
          <Text>Usuário Logado: {this.state.userName}</Text>
          <Button title="Logoff" onPress={this.logoff} />
        </View>
      );
    } else {
      return <Button title="Logar" onPress={this.openModal} />
    }
  }

  render() {
    const { poneys } = this.props;

    const isLoggedIn = this.state.login;

    return (
      <View>
        {this.getUser()}
        {isLoggedIn && <Button title="Novo Poney" onPress={this.noop} />}
        <FlatList
          data={poneys}
          extraData={this.state.refresh}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.nome}</Text>
              <Text style={styles.item}>{item.cor}</Text>
              {isLoggedIn && <Button title="Excluir" onPress={this.noop} />}
              {isLoggedIn && <Button title="Editar" onPress={this.noop} />}
            </View>
          )}
        />
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}>
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

              <Button title="Ok" onPress={this.login} />
              <Button title="Cancelar" onPress={this.closeModal} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    poneys: state.poneys
  };
};

const mapDispatchToProps = {
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 120
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
