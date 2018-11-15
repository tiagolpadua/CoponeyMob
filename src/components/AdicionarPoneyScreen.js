import { Text } from "native-base";
import React from "react";
import { connect } from "react-redux";

class AdicionaPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text>Tela de Inclusão de Poneis</Text>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdicionaPoneyScreen);
