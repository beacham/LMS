'use strict';

/*
 * Source Controller
 */

angular.module('RDash')
    .controller('SourceCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {

    console.log('SourceCtrl - enter...');

    $scope.goNext = function (hash) {
        $location.path(hash);
    }

    $scope.refresh = function(){
        $http.get('http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/source')
          .success(function(data){
               $scope.sources = data;
          });
    }

    $scope.removeRow = function(name) {
        console.log('SourceCtrl - removeRow - enter...');
		var index = -1;
		var sourceList = eval( $scope.sources );

		for( var i = 0; i < sourceList.length; i++ ) {
			if( sourceList[i].sourceName === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "SourceCtrl - removeRow: index error" );
		}

        $http({
                method: 'DELETE',
                url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/source' + '/' + sourceList[i].sourceName,
        }).then(function successCallback(response) {
                console.log('SourceCtrl - removeRow - $http DELETE success!');
                $scope.refresh();
        }, function errorCallback(response) {
            console.log('SourceCtrl - removeRow - $http DELETE failure!');
        });
        console.log('SourceCtrl - removeRow - ...exit');
	};

    $http({
        method: 'GET',
        url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/source',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
        console.log('SourceCtrl - $http success!');
        $scope.sources = response.data;
        console.log('SourceCtrl - data: ', response.data);
        console.log('SourceCtrl - headers: ', response.headers);
        console.log('SourceCtrl - config: ', response.config);
        console.log('SourceCtrl - status: ', response.status);
        console.log('SourceCtrl - status: ', response.statusText);
    }, function errorCallback(response) {
            console.log('SourceCtrl - $http failure!');
    });

    console.log('SourceCtrl - ...exit');

  }]);

