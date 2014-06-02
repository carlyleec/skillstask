(function () {
	'use strict';

	angular.module('asheville-graffiti', [
			'ngResource',
			'asheville-graffiti.controllers',
			'asheville-graffiti.directives',
			'asheville-graffiti.filters',
			'asheville-graffiti.services',
			
			'ui.router'
			
		])
		.config([
		
			'$stateProvider',
			'$urlRouterProvider',
			'$locationProvider',
			function ($stateProvider, $urlRouterProvider, $locationProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: '/templates/home/home.html'
					})
					.state('readme', {
						url: '/readme',
						templateUrl: '/templates/readme/readme.html'
					});

				$locationProvider.html5Mode(true).hashPrefix('!');
			}
		
		]);
})();