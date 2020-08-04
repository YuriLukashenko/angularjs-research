"use strict";
/*jshint esversion: 6 */
var userManager = {
    bindings: {},
    controller: function ($rootScope, $scope) {
        const ctrl = this;
        ctrl.user = {
            name: '',
            email: ''
        };
        ctrl.loginUser = function () {
            $scope.$emit('login', ctrl.user);
        };
        const unbind = $rootScope.$on('logout', function (event, data) {
            console.log('root', data);
        });
        $scope.$on('logout', function (event, data) {
            console.log('not root', data);
        });
        $scope.$on('$destroy', unbind);
    },
    template: `
        <form ng-submit="$ctrl.loginUser();" class="child">
            <div>
                Name: <input type="text" ng-model="$ctrl.user.name">
            </div>
            <div> 
                E-mail: <input type="text" ng-model="$ctrl.user.email" 
            </div>
            <div>
              <button type="submit">
                Log in
                </button>
            </div>
        </form>
    `
};

angular.module('myApp').component('userManager', userManager);
