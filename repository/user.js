import User from '../models/User'
import logger from '../utils/logger'


export const createUser = async (user) => {
    const userMade = (await new User(user).save()).toObject()
    delete userMade.password
    return userMade
  }


export const getOneUser = async (filters, returnPassword = false) => {
    const user = await User.findOne(filters).lean()
    if (!user) return null
  
    if (!returnPassword) delete user.password
    return user
  }

  