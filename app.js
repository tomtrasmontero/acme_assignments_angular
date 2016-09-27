var express = require('express');
var app = express();
var swig = require('swig');
swig.setDefaults({ cache: false});
var path = require('path');

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

module.exports = app;

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.use(require('body-parser').json());

app.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/regions', require('./routes/region'));
app.use('/salesPerson', require('./routes/salesPerson'));

app.use(function(err,req,res,next){
	console.log('oh noes!!!!!');
	console.log(err, err.stack);
});