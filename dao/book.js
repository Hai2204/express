import Book from '../modal/book.js'

export const getAllData = async (offset, pageSize, search, sort) => {
    var query;
    if (!!search) {
        const arrSearch = search.split('_')
        const value = arrSearch[1]
        query = Book.find({
            $or: [
                {'name': new RegExp(value, 'i')},
                {'title': new RegExp(value, 'i')}
            ] 
        })
    }else{
        query = Book.find()

    }
    if (!!offset && !!pageSize) {// pagination
        query.skip(offset * pageSize).limit(pageSize)
    }
    if (!!sort) {// sort
        const arrSort = sort.split('_')
        // const name = arr[0]
        const value = arrSort[1]
        query.sort({ name: value })
    }

    return query.exec()

}
export const getByMa = async (ma) => {
    var result = await Book.find({ ma: ma }).select('ma name author ')
    return result
}