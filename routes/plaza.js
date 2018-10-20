'use strict'

const express = require('express');
const PlazaController = require('../controllers/plaza'); 
const api = express.Router();

api.get('/plazas',PlazaController.getPlazas);
api.get('/plazasMobile',PlazaController.getPlazasMobile);
api.get('/plaza/:id',PlazaController.getPlaza);
api.post('/plaza',PlazaController.postPlaza);
api.get('/deletePlaza/:id',PlazaController.deletePlaza);

/*
api.get('/saludar/:name/:lastname',FavoritoController.saludar); //obtener
api.get('/favorito/:id',FavoritoController.getFavorito); //obtener
api.post('/favorito',FavoritoController.saveFavorito); //guardar
api.put('/favorito/:id',FavoritoController.updateFavorito); //actualizar
api.get('/deleteFavorito/:id',FavoritoController.deleteFavorito); //eliminar
api.get('/web',FavoritoController.getwebpage);

api.get('/favoritos',FavoritoController.getFavoritos); //obtener
api.get('/newFavorito',FavoritoController.newFavorito);

api.get('/favoritosMobile',FavoritoController.getListFavoritosMobile);
*/

module.exports = api;