var express = require('express');
var multer = require('multer');

module.exports = function(app) {
	app.use(multer({ inMemory: true }));
};
