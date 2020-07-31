'use strict';
/*jshint esversion: 6 */
function Counter() {
    return {
        scope: {},
        bindToController: {
            count: '='
        },
        template: `
            <div class="counter">
                 <h1>{{counter.count}}</h1>
                 <span ng-click="counter.inc()">Incr</span>
                 <span ng-click="counter.dec()">Decr</span>
            </div>
        `,
        controller: 'CounterController as counter'
    };
}

angular.module('myApp').directive('counter', Counter);