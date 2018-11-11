import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPoney } from "../actions";
import MantemPoneyForm from "./MantemPoneyForm";

class AdicionaPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddPoney = poney => {
    this.props.addPoney(poney);
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPoney
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdicionaPoneyScreen);
