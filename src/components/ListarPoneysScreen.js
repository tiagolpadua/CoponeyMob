import { Left, ListItem, Text } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

class ListarPoneysScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.poneys.list}
          renderItem={({ item }) => (
            <ListItem noIndent>
              <Left>
                <Text style={styles.item}>{item.nome}</Text>
              </Left>
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
  }
});

const mapStateToProps = state => {
  return {
    poneys: state.poneys
  };
};

const mapDispatchToProps = {};

ListarPoneysScreen.propTypes = {
  poneys: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarPoneysScreen);
