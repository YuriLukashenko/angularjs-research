"use strict";
/*jshint esversion: 6 */
function DateController() {
    this.date = new Date();
}

angular.module('myApp').controller('DateController', DateController);