'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const app = express();
const api = require('./routes/plaza');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',api);

module.exports = app;