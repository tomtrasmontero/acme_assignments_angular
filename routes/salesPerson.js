var router = require('express').Router();
var SalesPerson = require('../db').models.SalesPerson;
var SalesPersonRegion = require('../db').models.SalesPersonRegion;

module.exports = router;

router.get('/', function(req,res,next){
	SalesPerson.findAll()
	.then(function(salesPeople){
		res.send(salesPeople);
	})
	.catch(next);
});

router.post('/', function(req,res,next){
	SalesPerson.create({
		name: req.body.name
	})
	.then(function(result){
		console.log('sales person created');
		res.send(result)
	})
	.catch(next);
});

router.delete('/:id', function(req,res,next){
	SalesPerson.destroy({
		where: {id: req.params.id}
	})
	.then(function(){
		SalesPersonRegion.destroy({
			where: {salesPersonId: null}
		})
	})
	.then(function(result){
		console.log('sales person destroyed');
		res.sendStatus(200);
	})
	.catch(next);
});


