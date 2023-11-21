const OneModel = require('../models/myModel');
const moment = require('moment');

//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
    res.status(200).render('index');
};
exports.compusComun = (req, res) => {
    res.status(200).render('computersComun');
};
exports.compusPersonal = (req, res) => {
    res.status(200).render('computersPersonal');
};
exports.students = (req, res) => {
    res.status(200).render('students');
};
    
    