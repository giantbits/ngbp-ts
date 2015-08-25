///<reference path="../reference.ts"/>

var ngbpTsAbout = angular.module('ngbpTs.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]);

ngbpTsAbout.config(function config($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutController',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data: { pageTitle: 'What is It?' }
  });
});

module Controllers {

    export interface AboutScope extends ng.IScope {
        vm: AboutController;
        dropdownDemoItems: any;
    }

    export class AboutController {

        static IID = 'AboutController';
        static $inject = ['$scope'];

        dropdownDemoItems: any;

        constructor($scope: AboutScope) {

            // Expose the view model on the scope
            $scope.vm = this;

             $scope.vm.dropdownDemoItems = [
              "The first choice!",
              "And another choice for you.",
              "but wait! A third!"
            ];
        }
    }
}

ngbpTsAbout.controller( Controllers );
