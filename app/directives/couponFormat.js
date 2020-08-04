'use strict';
/*jshint esversion: 6 */
function couponFormat() {
    return {
        require: 'ngModel',
        link: function ($scope, $elem, $attrs, $ctrl) {
            var ngModelCtrl = $ctrl;
            ngModelCtrl.$formatters.unshift(function (value) {
                // coupon: 'summer-50' -> 'SUMMER_50'
               return value.replace(/-/g, '_').toUpperCase();
            });
            ngModelCtrl.$parsers.unshift(function (value) {
                return value.replace(/_/g, '-').toLowerCase();
            });
            ngModelCtrl.$validators.coupon = function (modelValue, viewModel) {
                var COUPON_REGEX = /[A-Z]+\_\d{2}/;
                return COUPON_REGEX.test(viewModel);
            };
        }
    };
}

angular.module('myApp').directive('couponFormat', couponFormat);
