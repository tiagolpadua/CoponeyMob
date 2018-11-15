import { Button, Text, Item, Label, Input, Picker, Icon } from "native-base";
import React from "react";
import { View } from "react-native";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const error = {
    nome: "",
    cor: ""
  };
  let nome = values.nome || "";
  let cor = values.cor || "";
  if (nome.length < 3) {
    error.nome = "Muito curto";
  }
  if (nome.length > 8) {
    error.nome = "Máximo de 8 caracteres";
  }
  if (!cor) {
    error.cor = "Cor inválida";
  }
  return error;
};

class MantemPoneyForm extends React.Component {
  renderInput = ({ input, label, meta: { error } }) => {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item floatingLabel error={hasError}>
        <Label>
          {label} {hasError && " - " + error}
        </Label>
        <Input {...input} />
      </Item>
    );
  };

  renderPicker = ({
    input: { onChange, value, ...inputProps },
    ...pickerProps
  }) => {
    return (
      <Item picker>
        <Picker
          selectedValue={value}
          onValueChange={value => onChange(value)}
          {...inputProps}
          {...pickerProps}
          mode="dropdown"
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          style={{ width: undefined }}
          placeholder="Selecione a cor"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
        >
          <Picker.Item label="Selecione a cor" value="" />
          <Picker.Item label="Amarelo" value="Amarelo" />
          <Picker.Item label="Baio" value="Baio" />
          <Picker.Item label="Branco" value="Branco" />
          <Picker.Item label="Preto" value="Preto" />
        </Picker>
      </Item>
    );
  };

  render() {
    const { invalid, handleSubmit } = this.props;
    return (
      <View style={{ marginTop: 10 }}>
        <Field name="nome" label="Nome" component={this.renderInput} />
        <Field name="cor" label="Cor" component={this.renderPicker} />
        <Button
          disabled={invalid}
          bordered={invalid}
          full
          primary
          style={{ marginBottom: 20 }}
          onPress={handleSubmit}
        >
          <Text>Salvar</Text>
        </Button>
        <Button
          full
          warning
          onPress={() => this.props.navigation.navigate("ListarPoneys")}
        >
          <Text>Cancelar</Text>
        </Button>
      </View>
    );
  }
}

export default reduxForm({
  form: "mantemPoney",
  validate
})(MantemPoneyForm);
