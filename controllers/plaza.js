'use strict'
const Plaza = require('../models/plaza');
var path = require("path");

function getPlazas(req,res){
	Plaza.find({}).exec((err,plazas)=>{
		
		if(err){
			res.status(500).send({message: "Hubo en error en el server"});
		}
		if(!plazas){
			res.status(404).send({message: "No hay registros para mostrar"});
		}
		//res.status(200).send({plazas});
		res.render('index.pug',{plazas:plazas , title:'Plazas'});
	});
}

function getPlazasMobile(req,res){
	Plaza.find({}).exec((err,plazas)=>{
		
		if(err){
			res.status(500).send({message: "Hubo en error en el server"});
		}
		if(!plazas){
			res.status(404).send({message: "No hay registros para mostrar"});
		}
		res.status(200).send({plazas});
	});
}

function getPlaza(req,res){
	
	var plazaId = req.params.id;
	
	Plaza.find({"_id":plazaId}).exec((err,plaza)=>{
		
		if(err){
			res.status(500).send({message: "Hubo en error en el server"});
		}
		if(!plaza){
			res.status(404).send({message: "No hay registro para mostrar"});
		}
		res.status(200).send({plaza});
		//res.render('index.pug',{plazas:plazas , title:'Plazas'});
	});
}

function postPlaza(req,res){
	var plaza = new Plaza();
	var params = req.body;
	
	plaza.nombre = params.nombre;
	plaza.descripcion = params.descripcion;
	plaza.imagen = params.imagen;
	plaza.telefono = params.telefono;
	plaza.latitud = params.latitud;
	plaza.longitud = params.longitud;

	plaza.save((err, plazaSaved)=>{
		if(err){
			console.log(err);
			res.send({message: "No se pudo guardar el registro"});	
		}else{
			//res.send({message:plazaSaved});
			res.redirect("/api/plazas")
		}
	})
}

function deletePlaza(req,res){
	
	var plazaId = req.params.id;
	
	Plaza.findById(plazaId,function(err,plaza){
	  if (err){
	  	res.status(500).send({message:"Error al devolver la plaza"});
	  }
    if(!plaza){
    	res.status(404).send({message:"No se encontro la plaza"});
    }else{

	    plaza.remove(err => {
				if(err){
					res.status(500).send({message:"No se ha podido eliminar la plaza"});
				}else{
					//res.status(200).send({message:"Plaza eliminada correctamente"});
					res.redirect("/api/plazas")
				}
	    });
        
    }
	    
	});

}

module.exports = {
	getPlazas,
	getPlazasMobile,
	getPlaza,
	postPlaza,
	deletePlaza
}