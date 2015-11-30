'use strict';
var chalk = require('chalk');
var app = require('./app');
var PORT = process.env.QUOTAGUARDSTATIC_URL || 1337;

var server = require('http').createServer(app).listen(PORT);
