const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const regexName =
  /^([a-zA-Z]{2,}\s[a-zA-Z]{0,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
const regexPhone = /(^[0-9]*$)/;
const regexBirthDate = /(^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$)/;

export const isValidEmail = (value: string): boolean => {
  return regexEmail.test(value);
};
export const isValidPassword = (value: string): boolean => {
  return regexPassword.test(value);
};
export const isValidName = (value: string): boolean => {
  return regexName.test(value);
};
export const isValidPhone = (value: string): boolean => {
  return regexPhone.test(value);
};
export const isValidBirth = (value: string): boolean => {
  return regexBirthDate.test(value);
};
