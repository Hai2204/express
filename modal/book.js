import mongoo from 'mongoose'

const schema = new mongoo.Schema({
    ma: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20,
    },
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
})
const Book = mongoo.model('books', schema)

export default Book