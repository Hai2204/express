export const success = (request, response, datas, status = 200) => {
    response.status(status).json({ status: true, data: datas })
}
export const successMessage = (request, response,  message = "Xóa thành công!", status = 200) => {
    response.status(status).json({ status: true, message: message })
}
export const error = (request, response, message = "Lỗi ngoài mong đợi!", status = 200) => {
    response.status(status).json({ status: false, message})
}
