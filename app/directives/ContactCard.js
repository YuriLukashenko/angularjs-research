"use strict";
/*jshint esversion: 6 */
function ContactCard() {
    return {
        transclude: {
            name: 'h1',
            desc: '?p'
        },
        template: `
        <div>
            <span ng-transclude="name"></span> 
            <div ng-transclude="desc">No description</div>
        </div>`,
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {
            var div = $element.find('div');
            var h4 = $element.find('span');
            var cloned = $transclude(function (elements) {
                elements[1].textContent = elements[1].textContent.toUpperCase()
            });
            h4.append(cloned[1]);
            div.append(cloned[3]);
        }
    };
}

angular.module('myApp')
    .directive('contactCard', ContactCard);