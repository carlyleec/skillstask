(function () {
	'use strict';

	angular.module('asheville-graffiti.controllers.byteCount', [])
		.controller('ByteCountCtrl', ['$scope', function ($scope) {
			$scope.$watch('byteCount', function (val) {
				if (val) {
					// Show off a little
					$scope.byteLength = _(val.split(''))
						.map(function () { return 1; })
						.reduce(function (sum, val) {
							return sum + val;
						});
				}
			});
		}]);
})();