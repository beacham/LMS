'use strict';

/*
 * Service Controller - Add
 */

angular.module('RDash')
    .controller('ServiceCtrlAdd', ['$scope', 'SourceService', 'profileService', '$location', '$http', function($scope, SourceService, profileService, $http) {

    console.log('ServiceCtrlAdd - enter...');

    $scope.sources = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
    $scope.selectedItem = {};
    $scope.dropboxitemselected = function (item) {
        $scope.selectedItem = item;
        console.log('ServiceCtrlAdd - dropboxitemselected - item: ', $scope.selectedItem);
        alert($scope.selectedItem);
    };

    /*
     * getSourceList is called by the html snippet
     */

    $scope.getSourceList = function() {
        console.log('ServiceCtrlAdd - getSourceList - enter ...');
        SourceService.getSources().then(function (sources) {
            $scope.sources = sources;
            console.log('ServiceCtrlAdd - getSourceList - sources: ', $scope.sources);
        }, function (error) {
            $scope.status = 'ServiceCtrlAdd - getSourceList - Unable to load source data: ' + error.message;
        });
        console.log('ServiceCtrlAdd - getSourceList - ...exit');
    };

    $scope.getProfileList = function() {
        console.log('ServiceCtrlAdd - getProfileList - enter ...');
        profileService.getProfiles().then(function (profiles) {
            $scope.profiles = profiles;
            console.log('ServiceCtrlAdd - getProfileList - sources: ', $scope.profiles);
        }, function (error) {
            $scope.status = 'ServiceCtrlAdd - getProfileList - Unable to load profile data: ' + error.message;
        });
        console.log('ServiceCtrlAdd - getProfileList - ...exit');
    };

    console.log('ServiceCtrlAdd - b4 getSources');
    $scope.getSourceList();
    console.log('ServiceCtrlAdd - after getSources');

    console.log('ServiceCtrlAdd - b4 getProfiles');
    $scope.getProfileList();
    console.log('ServiceCtrlAdd - after getProfiles');

    $scope.processForm = function(myForm) {

        console.log('ServiceCtrlAdd - processForm() - enter ...');
        console.log('ServiceCtrlAdd - processForm() - add: ', this.addButtonVal);
        console.log('ServiceCtrlAdd - processForm() - cancel: ', this.cancelButtonVal);

        var data = $scope.services;

        /*$scope.resetForm = function(myForm) {
            //Even when you use form = {} it does not work
            angular.copy({},myForm);
        };*/

        this.resetButtonValues = function() {
                this.addButtonVal = false;
                //this.cancelButtonVal = false;
         }; // end resetButtonValues() function

         $scope.resetFormValues = function() {
                /*data.name = null;
                data.width = null;
                data.height = null;
                data.bitRate = null;*/
         }; // end resetFormValues() function

         if (this.addButtonVal) {

             console.log('ServiceCtrlAdd - processForm() - rates from input form: ', data);

             var tmp = 'http://10.10.55.145:8085/lms/service/';
             var url = tmp + data.name;

             console.log('ServiceCtrlAdd - url: ', url);

            $http({
                method: 'POST',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8;'
                }
            }).then(function successCallback(response) {
                console.log('ServiceCtrlAdd - processForm() - $http success!');
                $scope.rates = response.data;
                console.log('ServiceCtrlAdd - processForm() - data: ', response.data);
                console.log('ServiceCtrlAdd - processForm() - status: ', response.status);
                console.log('ServiceCtrlAdd - processForm() - headers: ', response.headers);
                console.log('ServiceCtrlAdd - processForm() - config: ', response.config);
                $scope.resetFormValues();
                }, function errorCallback(response) {
                    console.log('ServiceCtrlAdd - processForm() - $http failure!');
            }); // end $http

            }

        this.resetButtonValues();

        console.log('ServiceCtrlAdd - processForm() - ...exit');

    }; // end processForm() function

    console.log('ServiceCtrlAdd - ...exit');

}]); // end controller()
