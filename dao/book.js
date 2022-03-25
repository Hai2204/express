import Book from '../modal/book.js'

export const getAllData = async () => {
    var result = await Book.find()
    return result
}
export const getByMa = async (ma) => {
    var result = await Book.find( { ma: ma } )
    return result
}