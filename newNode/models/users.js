const dataPath = "./data/users.json";
const fs = require("fs");
const client = require("../config/config");

const createUser = (name, id) => {


  client.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, id], (error) => {
    if (error) {
      throw error
    }
    response.status(201).send("User added")
  })
};

const updateUser = (userName) => {
  try {
    client.query(query, [userName]);
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const deleteUser = (userName) => {
  try {
    client.query('DELETE FROM "users" WHERE "name" = $1', [userName]);
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const getUserById = async ({ id }) => {
  const query = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId],
  };
  try {
    const res = await client.query(query);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
  }

};

const getAllUser = async (req, res) => {
  try {
    return client.query("select * from users")
      .then((data) => res.send(data.rows))
      .catch((error) => error)
  } catch (error) {
    resizeBy.send
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUser,
};
