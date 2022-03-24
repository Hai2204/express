import { error, success, successMessage } from "../common/response.js"
import Book from "../modal/book.js"

export default class BookService {

    getAll = async (req, res) => {
        try {
            const books = await Book.find()
            success(req, res, books)
        } catch (error) {
            error(req, res, "Lấy danh sách thất bại!")
        }
    }
    createBook = async (req, res) => {
        try {
            const { ma, name } = req.body
            if (!name && !ma) {
                res.status(400).json({ status: false, message: "Vui lòng nhập đầy đủ thông tin!" })
            }
            // c1
            //const book = await book.create({ name: name, age: age})
            // c2
            const book = new Book(req.body)
            await book.save();
            success(req, res, book)
        } catch (err) {
            error(req, res, "Có lỗi xảy tạo sách")
        }
    }
    findById = async (req, res) => {
        try {
            const book = await Book.findById(req.params.id)
            if (!!book) {
                success(req, res, book)
            } else {
                error(req, res, 'Book not found', 404)
            }
        } catch (err) {
            error(req, res, "Có lỗi xảy tạo sách")
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params
            const book = await Book.findById(id)
            if (!!book) {
                Object.assign(book, req.body)
                await book.save()
                success(req, res, book)
            } else {
                error(req, res, "Lỗi khi tạo mới!", 404)
            }
        } catch (err) {
            console.log(err);
            error(req, res, "Có lỗi xảy ra khi tạo sách")
        }
    }
    delete = async (req, res) => {
        const { id } = req.params
        try {
              // const book = await Book.findByIdAndRemove(id)
            const book = await Book.findByIdAndRemove(id)
            successMessage(req, res)
        } catch (err) {
            error(req, res, "Có lỗi xảy ra khi xóa sách")
        }
    }
}