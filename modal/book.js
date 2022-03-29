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
        required: [true, "Vui lòng điền"],
        maxLength: [20, "Vượt quá độ dài tối đa!"],
        minlength: [3, "mã quá ngắn."],
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
    },
    author: { type: mongoo.Schema.ObjectId, ref: 'User', required: true },
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
const Book = mongoo.model('Book', schema)

export default Book