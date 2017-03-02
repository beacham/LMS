 'use strict';

/*
 * Profile Controller
 */

angular.module('RDash')
    .controller('ProfileCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {

    console.log('ProfileCtrl - enter...');

    $scope.goNext = function (hash) {
        $location.path(hash);
    };

    $scope.refresh = function() {
        $http.get('http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/profile')
          .success(function(data){
               $scope.profiles = data;
          });
    };

    console.log('ProfileCtrl - b4 selectProfile');
    $scope.selectProfile = function(profile) {
       $scope.selectedProfile = profile;
       console.log('ProfileCtrl - selectProfile() - profile: ', profile)
   };
   console.log('ProfileCtrl - after selectProfile');

    $scope.removeRow = function(name) {
        console.log('ProfileCtrl - removeRow - enter...');
		var index = -1;
		var profileList = eval( $scope.profiles );

		for( var i = 0; i < profileList.length; i++ ) {
			if( profileList[i].profileName === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "ProfileCtrl - removeRow: index error" );
		}

        $http({
                method: 'DELETE',
                url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/profile' + '/' + profileList[i].profileName,
        }).then(function successCallback(response) {
                console.log('ProfileCtrl - removeRow - $http DELETE success!');
                $scope.refresh();
        }, function errorCallback(response) {
            console.log('ProfileCtrl - removeRow - $http DELETE failure!');
        });
        console.log('ProfileCtrl - removeRow - ...exit');
	};

    $http({
        method: 'GET',
        url: 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/profile',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
        console.log('ProfileCtrl - $http success!');
        $scope.profiles = response.data;
        console.log('ProfileCtrl - data: ', response.data);
        console.log('ProfileCtrl - status: ', response.status);
        console.log('ProfileCtrl - headers: ', response.headers);
        console.log('ProfileCtrl - config: ', response.config);
    }, function errorCallback(response) {
            console.log('ProfileCtrl - $http failure!');
    });

    console.log('ProfileCtrl - ...exit');

  }]);
