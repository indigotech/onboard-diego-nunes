const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const isValidEmail = (value: string): boolean => {
  return regexEmail.test(value);
};
export const isValidPassword = (value: string): boolean => {
  return regexPassword.test(value);
};
