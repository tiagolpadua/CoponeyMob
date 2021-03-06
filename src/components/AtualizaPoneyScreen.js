import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePoney } from "../actions";
import MantemPoneyForm from "./MantemPoneyForm";

class AdicionaPoneyScreen extends React.Component {
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

AdicionaPoneyScreen.propTypes = {
  updatePoney: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = () => {
  return {};
};

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
)(AdicionaPoneyScreen);
