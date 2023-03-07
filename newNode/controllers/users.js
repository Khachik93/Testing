const userModel = require("../models/users");

const getAllUsers = async (req, res) => {
  return userModel.getAllUser(req,res).then((data) => data);
};

const getUsersById = async (req, res) => {
  return userModel.getUsersById(req,res).then((data) => data);
};

const createUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

const updateUser = async (req, res) => {};

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
