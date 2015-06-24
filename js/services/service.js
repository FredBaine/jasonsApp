angular.module('jasonsApp').factory('testService', function($http) {


	return {
		testParms: testParms
	};

	function testParms(parms) {
		var req = {
			url: 'api.cfc?method=testParms',
		    method: 'POST',
		    data: parms,
//		    transformResponse: transformResponse
		};

		return $http(req).then(sendResponseData)
						 .catch(sendError);
	};

	function sendResponseData(resp) {
		return resp.data;
	};

	function sendError(resp) {
		return $q.reject('Error getting Orders: ' + resp.status);
	};

	function transformResponse(data, headersGetter) {
		var transformed = angular.fromJson(data);
		transformed.forEach(function(currentValue, index, array) {
			currentValue.selected = false;
		});
		return transformed;
	};

});
