'use strict';

/*
 * Service Controller
 */

angular.module('RDash')
    .controller('ServiceCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {

    console.log('ServiceCtrl - enter...');

        $scope.goNext = function (hash) {
        $location.path(hash);
    }

    $scope.refresh = function(){
        $http.get('http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/service')
          .success(function(data){
               $scope.services = data;
          });
    }

    $scope.removeRow = function(name) {
        console.log('ServiceCtrl - removeRow - enter...');
		var index = -1;
		var serviceList = eval( $scope.services );

		for( var i = 0; i < serviceList.length; i++ ) {
			if( serviceList[i].serviceName === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "ServiceCtrl - removeRow: index error" );
		}

        $http({
                method: 'DELETE',
                url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/service' + '/' + serviceList[i].serviceName,
        }).then(function successCallback(response) {
                console.log('ServiceCtrl - removeRow - $http DELETE success!');
                $scope.refresh();
        }, function errorCallback(response) {
            console.log('ServiceCtrl - removeRow - $http DELETE failure!');
        });
        console.log('ServiceCtrl - removeRow - ...exit');
	};

    $scope.startService = function(name) {
        console.log('ServiceCtrl - startService - enter...');
		var index = -1;
		var serviceList = eval( $scope.services );

		for( var i = 0; i < serviceList.length; i++ ) {
			if( serviceList[i].serviceName === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "ServiceCtrl - startService: index error" );
		}

        $http({
                method: 'POST',
                url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/service/start' + '/' + serviceList[i].serviceName,
        }).then(function successCallback(response) {
                console.log('ServiceCtrl - startService - $http POST success!');
                $scope.refresh();
        }, function errorCallback(response) {
            console.log('ServiceCtrl - startService - $http POST failure!');
        });
        console.log('ServiceCtrl - startService - ...exit');
	};

    $scope.stopService = function(name) {
        console.log('ServiceCtrl - stopService - enter...');
		var index = -1;
		var serviceList = eval( $scope.services );

		for( var i = 0; i < serviceList.length; i++ ) {
			if( serviceList[i].serviceName === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "ServiceCtrl - stopService: index error" );
		}

        $http({
                method: 'POST',
                url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/service/stop' + '/' + serviceList[i].serviceName,
        }).then(function successCallback(response) {
                console.log('ServiceCtrl - stopService - $http POST success!');
                $scope.refresh();
        }, function errorCallback(response) {
            console.log('ServiceCtrl - stopService - $http POST failure!');
        });
        console.log('ServiceCtrl - stopService - ...exit');
	};

    $http({
        method: 'GET',
        url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/service',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
        console.log('ServiceCtrl - $http success!');
        $scope.services = response.data;
        console.log('ServiceCtrl - data: ', response.data);
        console.log('ServiceCtrl - status: ', response.status);
        console.log('ServiceCtrl - headers: ', response.headers);
        console.log('ServiceCtrl - config: ', response.config);
    }, function errorCallback(response) {
            console.log('ServiceCtrl - $http failure!');
    });

    console.log('ServiceCtrl - ...exit');

  }]);
