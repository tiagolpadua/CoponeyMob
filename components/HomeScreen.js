import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../reducers';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Contador: { counter }</Text>
        <Button
          title="Incrementar"
          onPress={() => this.props.increment()}
        />
        <Button
          title="Decrementar"
          onPress={() => this.props.decrement()}
        />
        <Button
          title="Resetar"
          onPress={() => this.props.reset()}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);