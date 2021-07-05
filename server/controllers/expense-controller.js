import Expense from '../models/expense-model'
import { extend } from 'lodash'
import errorHandler from '../helpers/dbErrorHandle'
import mongoose from 'mongoose'

const create = async (req, res) => {
  try {
    req.body.recorded_by = req.auth._id
    const expense = new Expense(req.body)
    await expense.save()
    return res.status(200).json({
      message: "Expense recorded!"
    })
  } catch (error) {
    return res.status(400).json({
      error: errorhandle.getErrorMEssage(error)
    })
  }
}

export default { create }