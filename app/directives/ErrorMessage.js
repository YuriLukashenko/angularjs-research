'use strict';
function ErrorMessage() {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            $element.addClass('error');
            $element.addClass('error--' + $attrs.type);
        }
    };
}

angular.module('myApp')
.directive('errorMessage', ErrorMessage);