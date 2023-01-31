
import Product from "../models/Product"


export const findAllProducts = async (query = {}) => {
    if (!query.filter) {
      query.filter = {}
    }
    let filter

    filter = {
      $and: [query.filter]
    }
  
    const options = {
      sort: query.sort || { created_at: -1 }
    }
  
    if (query.page) {
      options.page = query.page
    }
  
    if (query.limit) {
      options.limit = query.limit
    }
  
    return !query.page ? Product.find(filter).sort(options.sort).lean() : Product.paginate(filter, options)
  }

export const insertProduct = async (data) => {
    return await new Product(data).save()
  }

export const findProduct = async (filters) => {
    return await Product.findOne(filters)
  }

export const deleteProduct = async (filters) => {
    return await Product.deleteOne(filters)
  }

export const findAndUpdateProduct = async (filters, data) => {
    return await Product.findOneAndUpdate(filters, data, { new: true })
  }