const isValidNumber = (value) => {
  const valueString = value.toString();
  const number = Number(valueString);

  return valueString.length > 0 && number;
};

const schema = {
  Finalidade: {
    prop: "finalidade",
    type: String,
    required: false,
  },
  Valor: {
    prop: "valor",
    type: (value) => {
      if (!isValidNumber(value)) {
        return 0;
      }
      const number = Number(value);

      return number;
    },
  },
  Pago: {
    prop: "pago",
    type: String,
    required: false,
  },
  "Valor Pago": {
    prop: "valorPago",
    type: (value) => {
      if (!isValidNumber(value)) {
        return 0;
      }

      const number = Number(value);

      return number;
    },
  },
  Origem: {
    prop: "origem",
    type: String,
    required: false,
  },
  Rendimento: {
    prop: "rendimento",
    type: (value) => {
      if (!isValidNumber(value)) {
        return 0;
      }

      const number = Number(value);

      return number;
    },
    required: false,
  },
};

module.exports = schema;
