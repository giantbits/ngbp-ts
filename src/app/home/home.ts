///<reference path="../reference.ts"/>

var ngbpTsHome = angular.module('ngbpTs.home', [
  'ui.router'
]);

ngbpTsHome.config(function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeController',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: { pageTitle: 'Home' }
  });
});

module Controllers {

    export interface HomeScope extends ng.IScope {
        vm: HomeController;
    }

    export class HomeController {

        static IID = 'HomeController';
        static $inject = ['$scope'];

        constructor($scope: HomeScope) {
            // Expose the view model on the scope
            $scope.vm = this;
        }
    }
}

ngbpTsHome.controller( Controllers );
