import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import MantemPoneyForm from "./MantemPoneyForm";

class AtualizarPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUpdatePoney = poney => {
    alert("Atualizar ponei: " + JSON.stringify(poney));
    this.props.navigation.navigate("ListarPoneys");
  };

  render() {
    return (
      <MantemPoneyForm
        initialValues={this.props.navigation.getParam("poney")}
        navigation={this.props.navigation}
        onSubmit={this.handleUpdatePoney}
      />
    );
  }
}

AtualizarPoneyScreen.propTypes = {
  updatePoney: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AtualizarPoneyScreen);
