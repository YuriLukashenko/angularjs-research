"use strict";
/*jshint esversion: 6 */
function PikadayService() {
    return function (options) {
         return new Pikaday(options);
    };
}

angular.module('myApp').factory('PikadayService', PikadayService);