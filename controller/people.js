import User from "../modal/user.js"

const getUser = async (req, res) => {
    const users = await User.find()
    res.status(200).json({ status: true, data: users })
}

const createUser = async (req, res) => {
    const { name, age } = req.body
    if (!name && !age) {
        res.status(400).json({ status: false, message: "Vui lòng nhập đầy đủ thông tin!" })
    }
    // c1
    //const user = await User.create({ name: name, age: age})
    // c2
    const user = new User({ name, age })
    await user.save();
    res.status(200).json({ status: true, data: user })
}

const findUserById = async (req, res, next, value) => {
    console.log(123);
    if (!!req?.params?.id) { // call by api
        const user = await User.findById(req.params.id)
        if (!!user) res.status(200).json({ status: true, data: user })
        res.status(404).json({ status: false, message: 'User not found' })
    } else {
        const user = await User.findById(req)
        if (!!user) {
            return { status: true, data: user }
        }
        return { status: false, message: 'User not found' }

    }
}

const updateUser = async (req, res) => {
    const { name, age } = req.body
    const { id } = req.params
    const user = await findUserById(id)

    if (user.status) {
        Object.assign(user.data, { name, age })
        await user.data.save()
        res.status(200).json({ status: true, data: user.data })
    }else{
        res.status(200).json(user)
    }

}
const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await findUserById(id)

    if (user.status) {
        await user.data.remove()
        res.status(200).json({ status: true, message: "Xóa thành công user id " +  id})
    }else{
        res.status(200).json(user)
    }

}

export {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    findUserById
}