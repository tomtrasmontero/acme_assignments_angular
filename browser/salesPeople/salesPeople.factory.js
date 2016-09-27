angular.module('salesAngular')
	.factory('SalesPeopleFactory', function($http){
		
		var salesPeople = [];

		return{
			getStatus: function(){
				return salesPeople;
			},

			create: function(name){
				return $http.post('/salesPerson', name)
				.then(function(result){
					salesPeople.push(result.data)
				});
			},

			findAll: function(){
				return $http.get('/salesPerson')
				.then(function(result){
					angular.copy(result.data, salesPeople)
					return salesPeople;
				});
			},

			destroy: function(salesPerson){
				return $http.delete('salesPerson/' + salesPerson.id)
				.then(function(){
					var idx = salesPeople.indexOf(salesPerson);
					salesPeople.splice(idx,1);
				});
			},
		};
	});