angular.module('salesAngular')
	.directive('regionStatus', function(){
		return{
			restrict: 'E',
			scope: {},
			templateUrl: '/salesPeopleRegion/salesPeopleRegionStatus.html',
			controller: function($scope,RegionsFactory,SalesPeopleFactory){
				$scope.regions = RegionsFactory.getStatus();
				$scope.salesPeople = SalesPeopleFactory.getStatus();
			}
		};
	});