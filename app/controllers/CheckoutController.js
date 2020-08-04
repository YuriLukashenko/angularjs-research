'use strict';
/*jshint esversion: 6 */
function CheckoutController() {
    this.details = {
        username: '',
        password: '',
        coupon: 'summer-50'
    };
    this.onSubmit = function () {
        console.log(this.details);
    };
    this.passwordErrors = [{
        type: 'minlength',
        text: 'Must be at least 8 characters!!'
    }, {
        type: 'maxlength',
        text: 'Must be 20 characters of less!!'
    }, {
        type: 'pattern',
        text: 'Password must contain at least one digit, at least one lowercase and least one uppercase!!'
    }];
}

angular.module('myApp').controller('CheckoutController', CheckoutController);
