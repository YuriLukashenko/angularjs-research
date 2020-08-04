"use strict";
/*jshint esversion: 6 */
function ContactController($rootScope, $scope) {
    const ctrl = this;
    ctrl.contacts = [];
    ctrl.logoutUser = function () {
        $rootScope.$emit('logout', ctrl.contacts);
    };
    $scope.$on('login', function (event, data) {
        ctrl.contacts.push(data);
    });
}

angular.module('myApp').controller('ContactController', ContactController);
