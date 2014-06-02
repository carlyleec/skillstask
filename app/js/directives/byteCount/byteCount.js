(function () {
	'use strict';

	angular.module('asheville-graffiti.directives.byteCount', [])
		.directive('byteCount', function () {
			return {
				transclude: true,
				templateUrl: '/templates/byteCount/byteCount.html',
				scope: {
					byteCount: '@'
				}
			};
		});
})();