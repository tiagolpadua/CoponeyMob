import { Button, Icon, Left, ListItem, Right, Text } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadPoneys } from "../actions";

class ListarPoneysScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPoneys();
  }

  render() {
    let { poneys } = this.props;

    let listExibicao = poneys.list.filter(
      p => this.props.poneys.viewDeleted === !!p.excluido
    );

    return (
      <View>
        <FlatList
          data={listExibicao}
          extraData={this.props.profile}
          renderItem={({ item }) => (
            <ListItem noIndent>
              <Left>
                <Text
                  style={[styles.item, item.excluido ? styles.tachado : ""]}
                >
                  {item.nome}
                </Text>
              </Left>
              <Right>
                {this.props.profile.user && !item.excluido && (
                  <View style={{ flexDirection: "row", flex: 1 }}>
                    <Button
                      primary
                      onPress={() =>
                        Alert.alert(
                          "Alterar",
                          "Aqui irá a tela de Alterar ponei",
                          [{ text: "OK" }]
                        )
                      }
                      style={{ marginRight: 10 }}
                    >
                      <Icon name="create" />
                    </Button>
                    <Button
                      danger
                      onPress={() =>
                        Alert.alert(
                          "Excluir",
                          "Aqui exibirá a confirmação de exclusão do ponei",
                          [{ text: "OK" }]
                        )
                      }
                    >
                      <Icon name="trash" />
                    </Button>
                  </View>
                )}
              </Right>
            </ListItem>
          )}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

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
  },
  tachado: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});

const mapStateToProps = state => {
  return {
    poneys: state.poneys,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPoneys }, dispatch);

ListarPoneysScreen.propTypes = {
  poneys: PropTypes.object,
  profile: PropTypes.object,
  loadPoneys: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarPoneysScreen);