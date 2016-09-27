angular.module('salesAngular', ['ui.router']);

angular.module('salesAngular')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/home.html'
			})
			.state('regions', {
				url: '/regions',
				templateUrl: '/regions/regions.html'
			})
			.state('salesPeople', {
				url: '/salesPeople',
				templateUrl: '/salesPeople/salesPeople.html'
			})

			$urlRouterProvider.otherwise('/');

	});

