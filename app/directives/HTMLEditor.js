'use strict';
/*jshint esversion: 6 */
function HTMLEditor() {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, $ctrl) {
            var ngModelCtrl = $ctrl;
            $element.on('input', function (event) {
                ngModelCtrl.$setViewValue(event.target.innerHTML);
            });
            ngModelCtrl.$render = function () {
                $element.html(ngModelCtrl.$modelValue);
            };
        }
    };
}

angular.module('myApp').directive('htmlEditor', HTMLEditor);
