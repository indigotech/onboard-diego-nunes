const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
// eslint-disable-next-line no-useless-escape
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const ValidateEmail = (value: string): boolean => {
  if (regexEmail.test(value)) {
    return false;
  } else {
    return true;
  }
};
export const ValidatePassword = (value: string): boolean => {
  if (regexPassword.test(value)) {
    return false;
  } else {
    return true;
  }
};
