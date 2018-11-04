import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { poneys } = this.props;
    
    return (
      <View>
        <Button title="Logar" onPress={() => null}/>
        <FlatList
          data={poneys}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.nome}</Text>
              <Text style={styles.item}>{item.cor}</Text>
            </View>
          )}
        />
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
    width: 150
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
