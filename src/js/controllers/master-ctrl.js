/*
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$rootScope', '$scope', 'configService', '$cookieStore', MasterCtrl]);

function MasterCtrl($rootScope, $scope, configService, $cookieStore) {

    /*
     * Set the rest ipaddr and port. This could also be read from a config.json file via the configService.
     */

    $rootScope.restIpAddr = "10.10.55.145";
    $rootScope.restPort = "8085";

    console.log('MasterCtrl - enter...');
    /*configService.getConfig().then(function (data) {
        $scope.cfg = data[0]; // [0] very important!!!
        console.log('MasterCtrl - getConfig - data: ', $scope.cfg.restIpAddr);
        }, function (error) {
            $scope.status = 'MasterCtrl - getConfig - Unable to load configuration data: ' + error.message;
        });*/

    console.log('MasterCtrl - restIpAddr: ', $rootScope.restIpAddr);
    console.log('MasterCtrl - restPort: ', $rootScope.restPort);

    /*
     * Sidebar Toggle & Cookie Control
     */

    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
    console.log('MasterCtrl - ...exit');
}
