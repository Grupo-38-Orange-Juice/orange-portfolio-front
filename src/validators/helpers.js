export const lengthRangeValidator = (min, max) => (field, value) => {
  if (value.length < min || value.length > max) {
    return `${field} deve ter entre ${min} e ${max} caracteres`;
  }
  return '';
};

export const arrayLengthRangeValidator = (min, max) => (field, value) => {
  console.log(value);
  if (value.length < min || value.length > max) {
    return `${field} deve ter entre ${min} e ${max} itens`;
  }
  return '';
};

export const requiredValidator = (field, value) => {
  if (!value) {
    return `${field} é obrigatório(a)`;
  }
  return '';
};

export const emailValidator = (field, value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    return `${field} deve ser um e-mail válido`;
  }

  return '';
};

export const lowerCaseValidator = (field, value) => {
  if (!value.match(/[a-z]/)) {
    return `${field} deve conter pelo menos uma letra minúscula`;
  }
  return '';
};

export const upperCaseValidator = (field, value) => {
  if (!value.match(/[A-Z]/)) {
    return `${field} deve conter pelo menos uma letra maiúscula`;
  }
  return '';
};

export const numberValidator = (field, value) => {
  if (!value.match(/\d/)) {
    return `${field} deve conter pelo menos um número`;
  }
  return '';
};
