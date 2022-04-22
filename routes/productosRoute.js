const express = require('express');
const router = express.Router();
const {createProduct ,getProducts ,updateProduct, removeProduct,getproduct } = require('../controllers/productosController')
const productosValidation = require('../validations/productosValidation');

// Crear producto
router.post('/', productosValidation.createProduct ,createProduct);
router.get('/' , getProducts);
router.put('/:id', productosValidation.updateProduct, updateProduct);
router.delete('/:id', removeProduct)
router.get('/:id' ,getproduct )

module.exports = router;