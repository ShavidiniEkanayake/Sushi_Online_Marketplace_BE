import bcrypt from 'bcrypt'
import { createUser, getOneUser } from '../repository/user'


export const register = async (userDetails) => {

    const encryptedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(userDetails.password, parseInt(process.env.BCRYPT_SALT_ROUNDS), (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })

    userDetails.password = encryptedPassword;
    const newUser = await createUser(userDetails)
    return newUser
  }


  export const login = async ({ email, password }) => {
    const user = await getOneUser({ email }, true)
    if (!user) return false
    const isPasswordMatch = await new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
    if (!isPasswordMatch) return false
    delete user.password
    return user
  }