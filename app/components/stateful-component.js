"use strict";
/*jshint esversion: 6 */
const statefulComponent = {
    template: `
    <div>
        <pre> {{$ctrl.user | json}}</pre>
        <stateless-component
        user="$ctrl.user"
        on-update="$ctrl.updateUser($event);">
        </stateless-component>
    </div>`,
    controller: function () {
        this.user = {
            name: 'Yurii L',
            location: 'Zp, UA'
        };
        this.updateUser = function (event) {
            this.user = event.user;
            console.log('here');
        };
    }
};

angular.module('myApp').component('statefulComponent', statefulComponent);
