'use strict';
/*jshint esversion: 6 */
function MainController() {
    this.firstCount = 0;
    this.secondCount = 5;
    this.thirdCount = 10;
    this.count = 0;
}

angular
    .module('myApp')
    .controller('MainController', MainController);