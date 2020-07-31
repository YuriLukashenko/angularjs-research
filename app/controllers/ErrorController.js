'use strict';
function ErrorController() {
    this.list = [{
        message: 'Oh no, an err',
        type: 'error'
    }, {
        message: 'Make sure you fill in all the fields',
        type: 'warning'
    }, {
        message: 'This is invalid',
        type: 'invalid'
    }];
}

angular.module('myApp')
    .controller('ErrorController', ErrorController);