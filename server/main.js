'use strict';
var chalk = require('chalk');
var app = require('./app');
var PORT = process.env.PORT || 1337;

var server = require('http').createServer(app).listen(PORT);
