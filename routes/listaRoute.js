// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const usuarioValidation = require('../validations/usuarioValidation');

// api/usuarios
// Trae usuario de la lista
router.get('/', usuarioController.getUser);
router.put('/', authMiddleware, usuarioController.updateUser);

module.exports = router;
