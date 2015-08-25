///<reference path="../reference.ts"/>

module Controllers {

    export interface AppControllerScope extends ng.IScope {
        vm: AppController;
        pageTitle: string;
    }

    export class AppController {

        static IID = 'AppController';
        static $inject = ['$scope'];

        pageTitle: string = '';

        constructor($scope: AppControllerScope) {

            // Expose the view model on the scope
            $scope.vm = this;

            $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                if ( angular.isDefined( toState.data.pageTitle ) ) {
                  $scope.vm.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
                }
            });
        }
    }
}
