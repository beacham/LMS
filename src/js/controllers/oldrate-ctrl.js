/**
 * Rate Controller
 */

angular.module('RDash')
    .controller('RateCtrl', ['$scope', RateCtrl]);

function RateCtrl($scope) {
    /**
     * Manage Rates
     */

    var sites = [
      "Shaab El Erg",
      "Abu Gotta Ramada",
      "El Arouk",
      "Small Giftun",
      "Erg Somaya"
    ];
    /*
    angular.module('diveLog', ['ngRoute'])
      .config(function($routeProvider) {
        $routeProvider.when('/list', {template: '<site-list></site-list>'});
        $routeProvider.when('/add', {template: '<site-add></site-add>'});
        $routeProvider.when('/edit/:id', {template: '<site-edit></site-edit>'});
        $routeProvider.when('/delete/:id', {template: '<site-delete></site-delete>'});
        $routeProvider.otherwise({redirectTo: '/list'});
      })
      */
    /*
      .component('siteMaintenance', {
        templateUrl: 'siteMaintenance-template.html',
        controller: function($location) {
          this.sites = sites;
          this.getSite = function(index) {
            return this.sites[index];
          }
          this.addSite = function(site) {
            this.sites.push(site);
            goToList();
          }
          this.save = function(index, site) {
            this.sites[index] = site;
            goToList();
          }
          this.delete = function(index) {
            this.sites.splice(index, 1);
            goToList();
          }

         function goToList() {
            $location.path('#/list');
          }
        }
      })
      .component('siteList', {
        templateUrl: 'siteList-template.html',
        require: {editor: '^siteMaintenance'}
      })
      .component('siteAdd', {
        templateUrl: 'siteAdd-template.html',
        require: {editor: '^siteMaintenance'},
      })
      .component('siteEdit', {
        templateUrl: 'siteEdit-template.html',
        require: {editor: '^siteMaintenance'},
        controller: function($routeParams) {
          this.id = $routeParams.id;
        }
      })
      .component('siteDelete', {
        templateUrl: 'siteDelete-template.html',
        require: {editor: '^siteMaintenance'},
        controller: function($routeParams) {
          this.id = $routeParams.id;
        }
      });
      */
}
