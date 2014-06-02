(function () {
	'use strict';

	angular.module('asheville-graffiti.controllers.readme', [])
		.controller('ReadMeCtrl', ['$scope', 'readme', '$sce', function ($scope, readme, $sce) {
			readme.get(function (data) {
				$scope.readme = $sce.trustAsHtml(data);
			});
		}]);
})();