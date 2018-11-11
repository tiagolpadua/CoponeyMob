import { Button, Icon, Left, ListItem, Right, Text } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deletePoney } from "../actions";

class ListaPoneysScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  noop = () => null;

  handleDeletePoney = poney => {
    Alert.alert("Exclusão", `Confirma a exclusão do poney ${poney.nome}?`, [
      { text: "Sim", onPress: () => this.props.deletePoney(poney) },
      { text: "Não", style: "cancel" }
    ]);
  };

  render() {
    const { poneys } = this.props;

    return (
      <View>
        <FlatList
          data={poneys.list}
          extraData={this.props.profile}
          renderItem={({ item }) => (
            <ListItem noIndent>
              <Left>
                <Text style={styles.item}>{item.nome}</Text>
              </Left>
              <Right>
                {this.props.profile.user && (
                  <View style={{ flexDirection: "row", flex: 1 }}>
                    <Button primary style={{ marginRight: 10 }}>
                      <Icon name="create" />
                    </Button>
                    <Button danger onPress={() => this.handleDeletePoney(item)}>
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

ListaPoneysScreen.propTypes = {
  poneys: PropTypes.object,
  profile: PropTypes.object,
  deletePoney: PropTypes.func
};

const mapStateToProps = state => {
  return {
    poneys: state.poneys,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deletePoney }, dispatch);

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
)(ListaPoneysScreen);
