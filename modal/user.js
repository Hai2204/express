import mongoo from 'mongoose'

const schema = new mongoo.Schema({
    name: String,
    age: Number,
})
const Book = mongoo.model("User", schema)
export default Book