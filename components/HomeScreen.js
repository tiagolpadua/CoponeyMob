import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

let poneys = [
  { nome: 'Tremor', cor: 'Preto' },
  { nome: 'Tzar', cor: 'Branco' },
  { nome: 'Pégaso', cor: 'Cinza' },
  { nome: 'Relâmpago', cor: 'Malhado' },
  { nome: 'Tremor', cor: 'Preto' },
  { nome: 'Tzar', cor: 'Branco' },
  { nome: 'Pégaso', cor: 'Cinza' },
  { nome: 'Relâmpago', cor: 'Malhado' },
  { nome: 'Tremor', cor: 'Preto' },
  { nome: 'Tzar', cor: 'Branco' },
  { nome: 'Pégaso', cor: 'Cinza' },
  { nome: 'Relâmpago', cor: 'Malhado' },
  { nome: 'Tremor', cor: 'Preto' },
  { nome: 'Tzar', cor: 'Branco' },
  { nome: 'Pégaso', cor: 'Cinza' },
  { nome: 'Relâmpago', cor: 'Malhado' },
  { nome: 'Tremor', cor: 'Preto' },
  { nome: 'Tzar', cor: 'Branco' },
  { nome: 'Pégaso', cor: 'Cinza' },
  { nome: 'Relâmpago', cor: 'Malhado' }
];

poneys = poneys.map((p, idx) => ({ ...p, key: idx + '' }));

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={poneys}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.nome}</Text>
            <Text style={styles.item}>{item.cor}</Text>
          </View>
        )}
      />
    );
  }

  /*   render() {
      return (
        <FlatList
          data={poneys}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.nome}</Text>
              <Text style={styles.item}>{item.cor}</Text>
            </View>
          )}
        />
      );
    } */
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
    width: 150
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
