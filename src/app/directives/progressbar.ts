///<reference path="../reference.ts"/>

ngbpTs.directive('progressbar', function (): ng.IDirective {
    return {
        restrict: 'EAC',
        template: progressbar.tpl.html,
        scope: {
            progress: '='
        }
    };
});
