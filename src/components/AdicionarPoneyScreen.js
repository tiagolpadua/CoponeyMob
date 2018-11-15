import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import MantemPoneyForm from "./MantemPoneyForm";

class AdicionaPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddPoney = poney => {
    alert("Ponei adicionado: " + JSON.stringify(poney));
    this.props.navigation.navigate("ListarPoneys");
  };

  render() {
    return (
      <MantemPoneyForm
        navigation={this.props.navigation}
        onSubmit={this.handleAddPoney}
      />
    );
  }
}

AdicionaPoneyScreen.propTypes = {
  addPoney: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdicionaPoneyScreen);
