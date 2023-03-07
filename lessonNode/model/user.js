import fs from "fs"
import info from `./fullInfo.json`

const createUsers = () => {}
const updateUsers = () => {}
const deleteUsers = () => {}
const getUsersById = () => {}
export const getAllUsers = () => {
    fs.promises.readFile(info, 'utf8')
    .then((data) => {
        const jsonData = JSON.parse(data)
        return jsonData
    })
    .catch((error) => console.log(error))
}

// module.exports = {
//     createUsers,
//     updateUsers,
//     deleteUsers,
//     getUsersById,
//     getAllUsers
// }