///<reference path="../reference.ts"/>


/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
ngbpTs.directive('todoBlur', function ($parse) {
    return function (scope, elem, attrs) {
        elem.bind('blur', function () {
            scope.$apply(() => {
                $parse(attrs.todoBlur, scope)
            });
        });
    };
});
