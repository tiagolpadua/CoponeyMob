import { Left, ListItem, Text } from "native-base";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

class ListarPoneysScreen extends React.Component {
  poneys = [
    { nome: "Tremor" },
    { nome: "Tzar" },
    { nome: "Pégaso" },
    { nome: "Epona" },
    { nome: "Macedonio" },
    { nome: "Vicário" },
    { nome: "Tro" },
    { nome: "Nicanor" },
    { nome: "Niceto" },
    { nome: "Odón" },
    { nome: "Relâmpago" },
    { nome: "Pio" },
    { nome: "Elegante" },
    { nome: "Pompeu" }
  ];

  constructor(props) {
    super(props);
    this.poneys = this.poneys.map((p, idx) => ({ ...p, _id: idx + "" }));
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.poneys}
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

export default ListarPoneysScreen;
