var express = require('express');

var app = express();
	path = require('path');
	router = express.Router();


require('./configure')(app);


app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});

module.exports = app;