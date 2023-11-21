const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

//Defino rutas y acciones de respuesta
router.route('/').get(myController.inicio);
router.route('/cPersonal').get(myController.compusPersonal); 
router.route('/cComun').get(myController.compusComun);

router.route('/alumnos').get(myController.students);

module.exports = router;
