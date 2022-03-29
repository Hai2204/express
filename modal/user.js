import mongoo from 'mongoose'

const schema = new mongoo.Schema({
    name: {
        type: String,
        ref: "Book"
    },
    age: Number,
})
const User = mongoo.model("User", schema)
export default User