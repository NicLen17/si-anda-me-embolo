const express = require('express');
const router = express.Router();
const {getMensajes, createMensajes , deleteMensajes} = require('../controllers/mensajesController')
const mensajesValidation = require('../validations/mensajesValidation');

// Crear mensaje
router.post('/', mensajesValidation.createMensajes ,createMensajes);
router.get('/', getMensajes)
router.delete('/:id',deleteMensajes)


module.exports = router;