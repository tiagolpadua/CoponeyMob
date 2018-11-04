import React from 'react';
import { Button, Text, View } from 'react-native';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count += 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count -= 1
    });
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Contador: {this.state.count}</Text>
        <Button
          title="Incrementar"
          onPress={() => this.increment()}
        />
        <Button
          title="Decrementar"
          onPress={() => this.decrement()}
        />
        <Button
          title="Resetar"
          onPress={() => this.reset()}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}