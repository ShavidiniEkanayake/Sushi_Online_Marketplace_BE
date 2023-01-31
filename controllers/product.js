import asyncHandler from '../middleware/async'
import { createProduct, deleteSingleProduct, retrieveAllProducts, updateProductById } from "../services/product"
import { makeResponse } from '../utils/response'


export const insertNewProduct = asyncHandler(async (req, res) => {
    const result = await createProduct(req.body, req.user)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to add question' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Product added successfully' })
  })
  
  export const deleteProduct = asyncHandler(async (req, res) => {
    console.log(req.params.product_id);
    const result = await deleteSingleProduct(req.params.product_id, req.user)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete product' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Product deleted successfully' })
  })

  export const updateProduct = asyncHandler(async (req, res) => {
    const result = await updateProductById(req.params.product_id, req.body, req.user)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to update product' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Product updated successfully' })
  })

  export const getAllProducts = asyncHandler(async (req, res) => {
    const data = await retrieveAllProducts(req.query)
    return makeResponse({ res, data, message: 'Products retrieved successfully' })
  })
  