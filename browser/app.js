angular.module('salesAngular', ['ui.router']);

angular.module('salesAngular')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/home.html',
				resolve: {
					all: function(SalesPeopleFactory,RegionsFactory,$q){
						return $q.all([SalesPeopleFactory.findAll(), RegionsFactory.findAll()]);				
					}			
				}				
			})
			.state('regions', {
				url: '/regions',
				templateUrl: '/regions/regions.html',
				resolve: {
					all: function(SalesPeopleFactory,RegionsFactory,$q){
						return $q.all([SalesPeopleFactory.findAll(), RegionsFactory.findAll()]);				
					}				
				}					
			})
			.state('salesPeople', {
				url: '/salesPeople',
				templateUrl: '/salesPeople/salesPeople.html',
				resolve: {
					all: function(SalesPeopleFactory,RegionsFactory,$q){
						return $q.all([SalesPeopleFactory.findAll(), RegionsFactory.findAll()]);				
					}				
				}				
			})
			$urlRouterProvider.otherwise('/');
	});

