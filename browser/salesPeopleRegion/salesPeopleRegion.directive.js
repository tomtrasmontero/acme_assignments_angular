angular.module('salesAngular')
	.directive('regionStatus', function(){
		return{
			restrict: 'E',
			scope: {},
			templateUrl: '/salesPeopleRegion/salesPeopleRegionStatus.html',
			controller: function($scope,RegionsFactory,SalesPeopleFactory,$q){
				var region = RegionsFactory.findAll();
				var salesPeople = SalesPeopleFactory.findAll();

				$q.all([region,salesPeople])
				.then(function(result){
					$scope.regions = result[0];
					$scope.salesPeople = result[1];
					console.log(result);	
				})
				.catch(function(err){
					console.og(err);
				});
			},
		};
	});