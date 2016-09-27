angular.module('salesAngular')
	.factory('SalesPeopleRegionFactory', function($http,RegionsFactory){
		
		var salesPeopleRegions= [];

		return {
			findAll: function(){
				return $http.get('/regions/check')
				.then(function(result){
					angular.copy(result.data, salesPeopleRegions);
					return salesPeopleRegions;
				});
			},
			findOrDelete: function(salesRegions,salesPersonId, regionId){
				var checkThis = RegionsFactory.check(salesRegions,salesPersonId,regionId);
				if(checkThis){					
					//find id of instance
					var salesRegion = salesRegions.filter(function(obj){
						if(obj.regionId === regionId && obj.salesPersonId === salesPersonId){
							return obj.id;
						}
					});					
					
					$http.delete('regions/relation/' + salesRegion[0].id)
					.then(function(result){
						angular.copy(result.data, salesPeopleRegions);
					});
				}else{
					$http.post('regions/relation/' + salesPersonId +'/' + regionId)
					.then(function(result){
						angular.copy(result.data, salesPeopleRegions);
					});
				}
			}			

		};
	});