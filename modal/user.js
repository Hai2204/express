import mongoo from 'mongoose'

const schema = new mongoo.Schema({
    name: String,
    age: Number,
})
const User = mongoo.model("users", schema)
export default User