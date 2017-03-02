'use strict';

/*
 * Source Controller - Add
 */

angular.module('RDash')
    .controller('SourceCtrlAdd', ['$scope', '$http', function($scope, $http) {

    console.log('SourceCtrlAdd - enter...');

    $scope.processForm = function(myForm) {

        console.log('SourceCtrlAdd - processForm() - enter ...');
        console.log('SourceCtrlAdd - processForm() - add: ', this.addButtonVal);

        var data = $scope.sources;

        this.resetButtonValues = function() {
                this.addButtonVal = false;
         }; // end resetButtonValues() function

         $scope.resetFormValues = function() {
                data.sourceName = null;
                data.sourceUri = null;
                data.sourceDescription = null;
         }; // end resetFormValues() function

         if (this.addButtonVal) {

             console.log('SourceCtrlAdd - processForm() - sources from input form: ', data);

             var tmp = 'http://10.10.55.145:8085/lms/source/';
             var url = tmp + data.sourceName;

             console.log('SourceCtrlAdd - url: ', url);

            $http({
                method: 'POST',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8;'
                }
            }).then(function successCallback(response) {
                console.log('SourceCtrlAdd - processForm() - $http success!');
                $scope.sources = response.data;
                console.log('SourceCtrlAdd - processForm() - data: ', response.data);
                console.log('SourceCtrlAdd - processForm() - status: ', response.status);
                console.log('SourceCtrlAdd - processForm() - headers: ', response.headers);
                console.log('SourceCtrlAdd - processForm() - config: ', response.config);
                $scope.resetFormValues();
                }, function errorCallback(response) {
                    console.log('SourceCtrlAdd - processForm() - $http failure!');
            }); // end $http

        }

        this.resetButtonValues();

        console.log('SourceCtrlAdd - processForm() - ...exit');

    }; // end processForm() function

    console.log('SourceCtrlAdd - ...exit');

}]); // end controller()
