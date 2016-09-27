var server = require('http').createServer(require('./app'));
var port = process.env.PORT || 3000;
// sync here
var db = require('./db');

if(process.env.SYNC){
	db.sync().then(function(){
		console.log('db synced');
	})
	.catch(function(err){
		console.log(err);
	});
};

server.listen(port, function(){
	console.log('listening intently on port: ' + port);
});