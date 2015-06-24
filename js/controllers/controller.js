'use strict';

angular.module('jasonsApp')
  .controller('mainCtrl', function ($scope, testService) {

	$scope.input1 = 'JASON';
	$scope.input2 = 'QCBLSRC';
	$scope.input3 = 'PROG_NAME';

	$scope.dataArray = [];

	$scope.addItem = function() {
		console.log('submit');
//		testService.testParms({input1: $scope.input1, input2: $scope.input2, input3: $scope.input3});
		$scope.dataArray.push({input1: $scope.input1, input2: $scope.input2, input3: $scope.input3});
	};

	$scope.removeItem = function(row) {
		$scope.dataArray = _.without($scope.dataArray, row);
	};

});
