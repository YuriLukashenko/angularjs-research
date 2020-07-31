'use strict';
/*jshint esversion: 6 */
function CounterController() {
    this.inc = function () {
        this.count++;
    };
    this.dec = function () {
        this.count--;
    };
}

angular
    .module('ctrl', [])
    .controller('CounterController', CounterController);