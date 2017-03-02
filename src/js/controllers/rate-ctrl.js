'use strict';

/*
 * Rate Controller
 */

angular.module('RDash')
    .controller('RateCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {

    console.log('RateCtrl - enter...');

    $scope.goNext = function (hash) {
        $location.path(hash);
    }

    $scope.refresh = function(){
        $http.get('http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/outputstream')
          .success(function(data){
               $scope.rates = data;
          });
    }

    $scope.removeRow = function(name) {
        console.log('RateCtrl - removeRow - enter...');
		var index = -1;
		var rateList = eval( $scope.rates );

		for( var i = 0; i < rateList.length; i++ ) {
			if( rateList[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "RateCtrl - removeRow: index error" );
		}

        $http({
                method: 'DELETE',
                url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/outputstream' + '/' + rateList[i].name,
        }).then(function successCallback(response) {
                console.log('RateCtrl - removeRow - $http DELETE success!');
                $scope.refresh();
        }, function errorCallback(response) {
            console.log('RateCtrl - removeRow - $http DELETE failure!');
        });
        console.log('RateCtrl - removeRow - ...exit');
	};

    $http({
        method: 'GET',
        url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/outputstream',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
        console.log('RateCtrl - $http GET success!');
        $scope.rates = response.data;
        console.log('RateCtrl - data: ', response.data);
        console.log('RateCtrl - headers: ', response.headers);
        console.log('RateCtrl - config: ', response.config);
        console.log('RateCtrl - status: ', response.status);
        console.log('RateCtrl - status: ', response.statusText);
    }, function errorCallback(response) {
            console.log('RateCtrl - $http GET failure!');
    });

    console.log('RateCtrl - ...exit');

  }]);
