'use strict';

angular.module('jasonsApp')
  .controller('mainCtrl', function ($scope, testService) {

	$scope.input1 = 'JASON';
	$scope.input2 = 'QCBLSRC';
	$scope.input3 = 'PROG_NAME';

	$scope.submit = function() {
		console.log('submit');
		testService.testParms({input1: $scope.input1, input2: $scope.input2, input3: $scope.input3});
	};


});
