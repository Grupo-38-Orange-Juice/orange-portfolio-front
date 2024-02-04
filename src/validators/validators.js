/* eslint-disable no-restricted-syntax */
import {
  arrayLengthRangeValidator,
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
const validatePassword = (password) => validate(passwordValidators, 'Senha', password);

const emailValidators = [
  requiredValidator,
  lengthRangeValidator(4, 64),
  emailValidator,
];
const validateEmail = (email) => validate(emailValidators, 'E-mail', email);

const nameValidators = [
  requiredValidator,
  lengthRangeValidator(2, 18),
];
const validateName = (name) => validate(nameValidators, 'Nome', name);
const validateLastName = (lastName) => validate(nameValidators, 'Sobrenome', lastName);

const titleValidators = [
  requiredValidator,
  lengthRangeValidator(3, 25),
];
const validateTitle = (title) => validate(titleValidators, 'Título', title);

const linkValidators = [
  lengthRangeValidator(2, 255),
];
const validateLink = (link) => validate(linkValidators, 'Link', link);

const descriptionValidators = [
  requiredValidator,
  lengthRangeValidator(3, 100),
];
const validateDescription = (description) => validate(descriptionValidators, 'Descrição', description);

const tagValidators = [
  requiredValidator,
  arrayLengthRangeValidator(1, 2),
];

const validateTags = (tags) => validate(tagValidators, 'Tags', tags);

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

export const postProjectValidators = {
  title: validateTitle,
  tags: validateTags,
  link: validateDescription,
  description: validateLink,
};
