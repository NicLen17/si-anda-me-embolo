const { check } = require('express-validator');

exports.createMensajes = [
    check('nombreyapellido', 'El nombre y el apellido es obligatorio').not().isEmpty().isLength({max:30}),
    check('tel', 'El telefono es obligatorio').not().isEmpty().isNumeric({min:1 , max:9999999999}),
    check('email', 'El Email es obligatorio').not().isEmpty().isEmail(),
    check('mensaje', 'El mensaje es obligatoria y minimo 20 letras').not().isEmpty().isLength({ min: 20 , max:300 }),
        ];