import userModel from "../model/user";

export const getAllUsers = async (req, res) => {
    const data = await userModel.getAllUsers();
    res.json(data);
}

const getUsersById = () => {}
const createUsers = () => {}
const deleteUsers = () =>{}
const updateUsers = () => {}

// module.exports = {
//     getAllUsers,
//     getUsersById,
//     createUsers,
//     deleteUsers,
//     updateUsers
// }