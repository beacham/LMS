/*
 * Test Controller
 */

angular.module('RDash')
    .controller('TestRateCtrl', ['$rootScope', '$scope', '$http', 'rateService', function($rootScope, $scope, $http, rateService) {

  console.log('TestRateCtrl - enter ...');

        /*TestRateCtrl.resolve = {
            rates: function (rateService) {
            return rateService.getRates();
            }
        }*/

        rateService.getRates().then(function (rates) {
            $scope.bag = rates;
            console.log('TestRateCtrl - getRates: ', $scope.bag);
        }, function (error) {
            $scope.status = 'TestRateCtrl - getRates - Unable to load rate data: ' + error.message;
        });

        //alert('Bello');

      $scope.getAllSelectedRows = function() {
         console.log('this.selectedItems: ', this.selectedItems);
       }

    this.changed = function(item) {
    // Do something with item, its selected status has changed!
        console.log('TestRateCtrl - item changed: ', item)
    }

    $scope.selectedItems = []; // read only array that is populated by 'selectionModel' library with the list of selected items

    console.log('TestRateCtrl - selectedItem: ', this.selectedItems)
    console.log('TestRateCtrl - ...exit');

}]);
