(function () {
	'use strict';

	angular.module('asheville-graffiti.directives.header', [])
		.directive('header', function () {
			return {
				templateUrl: '/templates/header/header.html'
			};
		});
})();