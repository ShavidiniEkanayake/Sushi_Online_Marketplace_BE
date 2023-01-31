import { insertProduct, findProduct, deleteProduct, findAndUpdateProduct, findAllProducts } from "../repository/product"


export const createProduct = async (data, user) => {
    return await insertProduct({ ...data, provider: user._id })
  }

export const deleteSingleProduct = async (product_id, user) => {
    const product = await findProduct({ _id: product_id })
  
    if (!product) return { status: 400, message: "Product doesn't exist to remove" }
    if (product.provider.toString() !== user._id.toString()) return { status: 403, message: 'You are not authorized to delete this product' }
    return await deleteProduct({ _id: product_id })
  }

export const updateProductById = async (product_id, data, user) => {
    let product = await findProduct({ _id: product_id })
    if (!product) return { status: 400, message: "Product doesn't exist to update" }

    if (product.provider.toString() !== user._id.toString()) return { status: 403, message: 'You are not authorized to update this question' }
  
    return await findAndUpdateProduct({ _id: product_id }, data)
  }

export const retrieveAllProducts = async (query) => {
    const questions = await findAllProducts(query)
    return questions
  }