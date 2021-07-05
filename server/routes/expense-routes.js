import express from 'express'
import authController from '../controllers/auth-controller'
import expenseController from "../controllers/expense-controller"
const router = express.Router()


router.route('/api/expenses')
  .post(authController.requireSignin, expenseController.create)





export default router