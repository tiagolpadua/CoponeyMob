import React from 'react';
import { Container, Button, Text } from 'native-base';
import { connect } from 'react-redux';

class HomeScreenNB extends React.Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenNB);
