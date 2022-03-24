import BookService from "../service/BookService.js"

const books = new BookService()

const getBooks = async (req, res) => {
    return books.getAll(req, res)
}

const createBook = async (req, res) => {
    return books.createBook(req, res)
}

const findBookById = async (req, res) => {
    return books.findById(req, res)
}

const updateBook = async (req, res) => {
    return books.update(req, res)
}
const deleteBook = async (req, res) => {
    return books.delete(req, res)
}

export {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    findBookById
}