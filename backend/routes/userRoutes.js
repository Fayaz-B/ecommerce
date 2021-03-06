import express from 'express'
import { admin, protect } from '../middleware/authMiddleware.js'
import {
  authUser,
  deleteUser,
  getUserbyId,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

  router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserbyId)
    .put(protect, admin, updateUser)

export default router
