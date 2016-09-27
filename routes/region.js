var router = require('express').Router();
var Region = require('../db').models.Region;
var SalesPersonRegion = require('../db').models.SalesPersonRegion;

module.exports = router;

router.get('/', function(req,res,next){
	Region.findAll()
	.then(function(regions){
		res.send(regions);
	})
	.catch(next);
});

router.post('/', function(req,res,next){
	Region.create({
		zip: req.body.zip
	})
	.then(function(result){
		console.log('region created');
		res.send(result)
	})
	.catch(next);
});

router.delete('/:id',function(req,res,next){
	Region.destroy({
		where: {id: req.params.id}
	})
	.then(function(){
		console.log('region destroyed');
		res.sendStatus(200);
	})
	.catch(next);
});

router.get('/check', function(req,res,next){
	SalesPersonRegion.findAll()
	.then(function(result){
		res.send(result);
	})
	.catch(next);
});

router.delete('/relation/:id', function(req,res,next){
	SalesPersonRegion.destroy({
		where: {id: req.params.id}
	})
	.then(function(){
		console.log('relation destroyed');
		return SalesPersonRegion.findAll()
	})	
	.then(function(result){
		res.send(result);
	})
	.catch(next);
});

router.post('/relation/:salesPersonId/:regionId', function(req,res,next){
	SalesPersonRegion.create({
		regionId: req.params.regionId,
		salesPersonId: req.params.salesPersonId
	})
	.then(function(){
		console.log('relation added');
		return SalesPersonRegion.findAll()
	})	
	.then(function(result){
		res.send(result);
	})
	.catch(next);
});