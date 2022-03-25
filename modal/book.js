import mongoo from 'mongoose'
// import User from './user'

const schema = new mongoo.Schema({
    // customer_id: {
    //     type: mongoo.Schema.ObjectId,
    //     ref: User, // relation to User
    //     required: true,
    //     index: true,
    // },
    ma: {
        type: String,
        required: true,
        max: 20,
        min: 3,
        unique: true,
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

}, { timestamps: true })
const Book = mongoo.model('books', schema)

export default Book