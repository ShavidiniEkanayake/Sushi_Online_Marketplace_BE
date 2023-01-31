import asyncHandler from '../middleware/async'
import { register, login } from '../services/user'
import { makeResponse } from '../utils/response'
import { sendTokenResponse } from '../utils/jwt'

export const registerUser = asyncHandler(async (req, res) => {

    if (req.user) return makeResponse({ res, status: 400, message: "You've already registered for an account." })
    const result = await register(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Registration failed.' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({
      res,
      message: 'Registration Successfull. '
    })
  })

  export const loginUser = asyncHandler(async (req, res) => {
    const user = await login(req.body)
    if (!user) return makeResponse({ res, status: 401, message: 'Invalid email or password' })
    // if (!user.is_verified)
    //   return makeResponse({
    //     res,
    //     status: 401,
    //     message: 'Account not verified. Please check your email'
    //   })
    // if (!user.is_active)
    //   return makeResponse({
    //     res,
    //     status: 401,
    //     message: 'Your account has been deactivated. Please contact a bashaway administrator to resolve it'
    //   })
    return sendTokenResponse(res, user, 'User logged in successfully')
  })