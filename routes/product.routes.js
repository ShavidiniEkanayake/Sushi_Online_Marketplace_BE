import express from 'express'
const router = express.Router();
import { insertNewProduct, deleteProduct, updateProduct, getAllProducts } from '../controllers/product'

import { protect, vendorProtect } from '../middleware/auth'


router.get('/', getAllProducts)
router.post('/',protect, vendorProtect, insertNewProduct)
router.delete('/:product_id', protect, vendorProtect, deleteProduct)
router.put('/:product_id', protect, vendorProtect, updateProduct)

export default router