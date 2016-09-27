angular.module('salesAngular')
	.controller('regionsCtrl', function($scope,RegionsFactory,SalesPeopleRegionFactory){
		$scope.create = function(){
			RegionsFactory.create({ zip: $scope.zipcode})
			.then(function(region){
				$scope.zipcode = '';
			})
			.catch(function(err){
				console.log(err);
			});	
		};

		$scope.destroy = function(region){
			RegionsFactory.destroy(region)
			.then(function(){
				console.log('region destroyed!!')
			})
			.catch(function(err){
				console.log(err)
			});
		};

		RegionsFactory.findAll()
		.then(function(regions){
			$scope.regions = regions;
		})
		.catch(function(err){
			console.log(err);
		});

		$scope.check = function(salesRegions,salesPersonId,regionId){
			return RegionsFactory.check(salesRegions,salesPersonId, regionId);
		};

		SalesPeopleRegionFactory.findAll()
		.then(function(result){
			$scope.salesRegions = result;
		})
		.catch(function(err){
			console.log(err);
		});
	
		$scope.findOrDelete = function(salesRegions,personId,regionId){
			SalesPeopleRegionFactory.findOrDelete(salesRegions,personId,regionId)
		};
	});