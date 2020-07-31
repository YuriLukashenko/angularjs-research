'use strict';
/*jshint esversion: 6 */
var counter = {
    bindings: {
        count: '='
    },
    controller: function () {
        this.inc = function () {
            this.count++;
        };
        this.dec = function () {
            this.count--;
        };
    },
    template: `
            <div class="counter">
                 <h1>{{$ctrl.count}}</h1>
                 <span ng-click="$ctrl.inc()">Incr</span>
                 <span ng-click="$ctrl.dec()">Decr</span>
            </div>
        `,
};

angular.module('myApp').component('counter', counter);