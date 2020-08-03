"use strict";
/*jshint esversion: 6 */
const userManager = {
    bindings: {},
    controller: function () {
        const ctrl = this;
        ctrl.user = {
            name: '',
            email: ''
        };
    }
};
