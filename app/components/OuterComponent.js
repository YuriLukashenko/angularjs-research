"use strict";
/*jshint esversion: 6 */
const outerComponent = {
    bindings: {},
    controller: function ($rootScope, $scope) {
        var unbind = $rootScope.$on('logout', function (event, data) {
            console.log(data);
        });
        $scope.$on('destroy', unbind);
    },
    template: `
    <div class="outer">
        Outer itemscope here!
    </div>`
};

angular.module('myApp').component('outerComponent', outerComponent);
