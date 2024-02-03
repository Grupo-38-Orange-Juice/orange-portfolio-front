/* eslint-disable no-restricted-syntax */
import {
  emailValidator,
  lengthRangeValidator, lowerCaseValidator, numberValidator, requiredValidator, upperCaseValidator,
} from './helpers';

const validate = (validators, field, value) => {
  for (const validator of validators) {
    const error = validator(field, value);
    if (error) {
      return error;
    }
  }
  return '';
};

const passwordValidators = [
  requiredValidator,
  lengthRangeValidator(8, 32),
  lowerCaseValidator,
  upperCaseValidator,
  numberValidator,
];

export const validatePassword = (password) => validate(passwordValidators, 'Senha', password);

const emailValidators = [
  requiredValidator,
  lengthRangeValidator(4, 64),
  emailValidator,
];

export const validateEmail = (email) => validate(emailValidators, 'E-mail', email);

const nameValidators = [
  requiredValidator,
  lengthRangeValidator(2, 18),
];

export const validateName = (name) => validate(nameValidators, 'Nome', name);

export const validateLastName = (lastName) => validate(nameValidators, 'Sobrenome', lastName);

export const registerValidators = {
  name: validateName,
  lastName: validateLastName,
  email: validateEmail,
  password: validatePassword,
};

export const loginValidators = {
  email: validateEmail,
  password: validatePassword,
};
