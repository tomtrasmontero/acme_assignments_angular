angular.module('salesAngular')
	.controller('salesPeopleCtrl', function($scope,SalesPeopleFactory){
		$scope.create = function(){
			SalesPeopleFactory.create({name: $scope.name})
			.then(function(){
				$scope.name = '';
			})
			.catch(function(err){
				console.log(err);
			});
		};

		$scope.destroy = function(salesPerson){
			SalesPeopleFactory.destroy(salesPerson)
			.then(function(){
				console.log('sales person destroyed')
			})
			.catch(function(err){
				console.log(err)
			});
		};

		SalesPeopleFactory.findAll()
		.then(function(salesPeople){
			$scope.salesPeople = salesPeople;
		})
		.catch(function(err){
			console.log(err);
		});

	});