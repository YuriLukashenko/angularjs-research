'use strict';
/*jshint esversion: 6 */

function HTMLController() {
    this.content = 'Some1';
    this.reset = function () {
        this.content = '';
    };
}

angular.module('myApp').controller('HTMLController', HTMLController);
