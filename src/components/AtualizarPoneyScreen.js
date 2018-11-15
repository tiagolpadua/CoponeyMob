import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePoney } from "../actions";
import MantemPoneyForm from "./MantemPoneyForm";

class AtualizarPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUpdatePoney = poney => {
    this.props.updatePoney(poney);
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePoney
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AtualizarPoneyScreen);
