import express from 'express'
import { createUser, getUser, updateUser, deleteUser, findUserById } from '../controller/people.js';


const router = express.Router()

router.get('/', getUser)
router.get('/:id/', findUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export {
    router as routeUser
}