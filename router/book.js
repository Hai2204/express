import express from 'express'
import { getBooks, createBook, findBookById, updateBook, deleteBook,findBookByMa } from '../controller/book.js';

const router = express.Router()

router.get('/', getBooks)
router.get('/:id', findBookById)
router.get('/getMa/:ma', findBookByMa)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export {
    router as routeBook
}