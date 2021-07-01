import express from 'express'
import userController from "../controllers/user-controller"
const router = express.Router()


router.route(`/api/users`)
  .get(userController.list)
  // This route will call the userController function create
  .post(userController.create)


router.route('/api/users/:userId')
  .get(userController.read)
  .put(userController.update)
  .delete(userController.remove)

router.param('userId', userController.userById)

export default router