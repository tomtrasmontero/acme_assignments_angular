var Sequelize = require('sequelize');

var db = new Sequelize(process.env.DATABASE_URL);

//Test the connection by trying to authenticate Aliases.  returns a promise object
//code belows read as if there is a connection, console log connection
db.authenticate().then(function(result){
	console.log('db connection is a go!!');
});

var Region = db.define('region', {
	zip: {
		type: Sequelize.INTEGER
	}
});

var SalesPerson = db.define('salesPerson', {
	name: {
		type: Sequelize.STRING
	}
});

var SalesPersonRegion = db.define('salesPersonRegion', {});

//define relationships
Region.hasMany(SalesPersonRegion);
SalesPerson.hasMany(SalesPersonRegion);

//sync func to pass to server.js
var sync = function(){
	return db.sync({force: true});
};

module.exports = {
	models:{
		Region: Region,
		SalesPerson: SalesPerson,
		SalesPersonRegion: SalesPersonRegion
	},
	sync: sync
};