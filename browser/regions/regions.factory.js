angular.module('salesAngular')
	.factory('RegionsFactory', function($http){

		var regions = [];

		return{
			getStatus: function(){
				return regions;
			},

			create: function(zip){
				return $http.post('/regions', zip)
				.then(function(result){
					regions.push(result.data);
				});
			},

			findAll: function(){
				return $http.get('/regions')
				.then(function(result){
					angular.copy(result.data, regions)
					return regions;
				});
			},

			destroy: function(region){
				return $http.delete('regions/' + region.id)
				.then(function(){
					var idx = regions.indexOf(region);
					regions.splice(idx,1);
				});
			},

			check: function(salesRegions,salesPersonId, regionId){
				var check = false;
				salesRegions.filter(function(obj){
					if(obj.regionId === regionId && obj.salesPersonId === salesPersonId){
						check = true;
					}
				});
				return check;		
			}

		};
	});