import UserService from "../service/UserService.js"

const user = new UserService()

const getUser = async (req, res) => {
    return user.getAll(req, res)
}

const createUser = async (req, res) => {
    return user.create(req, res)
}

const findUserById = async (req, res) => {
    return user.findById(req, res)
}

const updateUser = async (req, res) => {
    return user.update(req, res)
}
const deleteUser = async (req, res) => {
    return user.delete(req, res)
}

export {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    findUserById
}