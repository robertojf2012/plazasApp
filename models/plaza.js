'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlazaSchema = Schema({
	nombre: String,
	descripcion: String,
	imagen: String,
	telefono: String,
	latitud: String,
	longitud: String
})

module.exports = mongoose.model('ColPlaza',PlazaSchema);
