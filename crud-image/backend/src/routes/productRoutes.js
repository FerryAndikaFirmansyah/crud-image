const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const ctrl = require('../controllers/productController')

//localhost:5000/products
//create a new product
router.post('/', upload.single('image'), ctrl.createProduct)
//get all product
router.get('/', ctrl.getAllProduct);
//get a single product by Id
router.get('/:id', ctrl.getProductById);
//update product by id
router.put('/:id', upload.single('image'), ctrl.updateProduct)
//delete product by id
router.delete('/:id', ctrl.deleteProduct)

module.exports = router;