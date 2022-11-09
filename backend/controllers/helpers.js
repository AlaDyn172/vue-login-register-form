const md5 = require("md5");

const encrypt = string => {
  return md5(`vue-login-register-form-${string}`);
};

const regtoken = () => {
  return md5(Date.now());
};

const validateRegister = (username, password, email) => {
  if (username.length < 3) return false;
  if (username.length > 16) return false;
  if (password.length < 8) return false;
  if (password.length > 16) return false;
  if (!validateEmail(email)) return false;
  return true;
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

module.exports = {
  encrypt,
  regtoken,
  validateRegister
};