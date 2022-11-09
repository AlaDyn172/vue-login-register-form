const { User } = require("../models");
const { encrypt, regtoken, validateRegister } = require("./helpers");

const updateToken = async (username, token) => {
  try {
    await User.update({
      token
    }, {
      where: {
        username
      }
    });
  } catch (e) {
    throw Error(`An error ocurred while updating the token!`);
  }
};

const getUser = async (username, password) => {
  try {
    let user = await User.findOne({
      where: {
        username,
        password: encrypt(password)
      }
    });

    if (!user) return false;
    let token = regtoken();
    await updateToken(username, token);
    return { user, token };
  } catch (e) {
    throw Error(`An error ocurred while getting the user!`);
  }
};

const createUser = async (username, password, email) => {
  try {
    if (!validateRegister(username, password, email)) throw Error(`Invalid registration, try again!`);
    let token = regtoken();
    let user = await User.create({
      username,
      password: encrypt(password),
      email,
      token
    });
    return { user, token };
  } catch (e) {
    if (e.toString().includes("Validation error")) throw Error(`Email or Username already exists!`);
    throw Error(`An error ocurred while creating the user!`);
  }
};

module.exports = {
  getUser,
  createUser
};