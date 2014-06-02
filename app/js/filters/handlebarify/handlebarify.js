(function () {
	'use strict';

	angular.module('asheville-graffiti.filters.handlebarify', [])
		.filter('handlebarify', function () {
			return function (input) {
				return '{{ ' + input + ' }}';
			};
		});
})();