'use strict'
const mongoose = require('mongoose');
const port = process.env.PORT || 3678;
const app = require('./app')

mongoose.connect('mongodb://robert:plaza123456@ds137283.mlab.com:37283/plazas',(err,res)=>{
	
	console.log("Base de datos iniciada!");

	if(err){
		console.log(err);
	}else{
		//web server listening
		app.listen(port,()=>{
		console.log(`API REST RUNNING ON http://localhost:${port}`);
		});
	}

})

