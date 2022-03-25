import { error, success, successMessage } from "../common/response.js"
import { getAllData, getByMa } from "../dao/book.js"
import Book from "../modal/book.js"

export default class BookService {
    getAll = async (req, res) => {
        try {
            const bookDao = await getAllData()
            success(req, res, bookDao)
        } catch (err) {
            console.log(err);
            error(req, res, "Lấy danh sách thất bại!")
        }
    }
    createBook = async (req, res) => {
        try {
            const { ma, name } = req.body
            if (!name && !ma) {
                error(req, res, "Vui lòng nhập đầy đủ thông tin!", 400)
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
            error(req, res, "Không tìm thấy sách bạn cần!!")
        }
    }
    findByMa = async (req, res) => {
        try {
            const book = await getByMa(req.params.ma)
            if (!!book) {
                success(req, res, book)
            } else {
                error(req, res, 'Book not found', 404)
            }
        } catch (err) {
            error(req, res, "Không tìm thấy sách bạn cần!!")
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