const dataPath = "./data/users.json";
const fs = require("fs");

const createProject = () => {};

const updateProject = () => {};

const deleteProject = () => {};

const getProjectById = async ({ id }) => {
  console.log(id);
  return fs.promises
    .readFile(dataPath, "utf8")
    .then((data) => {
      const jsonData = JSON.parse(data);
      const item = jsonData.users.find((item) => item.id === id);

      return item;
    })
    .catch((error) => console.log(error));
};

const getAllProject = async () => {
  return fs.promises
    .readFile(dataPath, "utf8")
    .then((data) => {
      const jsonData = JSON.parse(data);
      return jsonData;
    })
    .catch((error) => console.log(error));
};

module.exports = {
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getAllProject,
};
