var express = require('express');
var server = express();
var path = require('path');

var current = __dirname;

server.configure(function() {
	// only works in connect 2.0, so i think we should inculed it in our
	// package.json
	// server.use(express.compress()); 
	

	server.use(function (req, resp, next) {
		console.log('Getting: ' + req.url);
		resp.setHeader('Access-Control-Allow-Origin', 'http://test01.lostlemon.nl:8080');
		return next();
	});

	// compress MUST be before static in order to fix res and req objects
	server.use(express.static(path.join(current, 'test')));

});

console.log('Start server on http://192.168.1.167:1337');

server.listen(1337);
