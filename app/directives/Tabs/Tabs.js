"use strict";
/*jshint esversion: 6 */
function tabs() {
    return {
        transclude: true,
        template: `
        <div class="tabs">
            <ul class="tabs__list">
                <li>
                    <a href=""></a>
                </li>
            </ul>
            <div class="tabs__content" ng-transclude></div>
        </div>`,
        controller: function () {
            var ctrl = this;
            ctrl.list = [];
            ctrl.addTab = function(tab) {
                if(!ctrl.list.length) {
                    tab.selected = true;
                }
                ctrl.list.push(tab);
            };
            ctrl.selectedTab = function (index) {
                ctrl.list.forEach(function (tab) {
                    this.selected = false;
                });
                ctrl.list[index].selected = true;
            };
        },
        controllerAs: 'tabs'
    };
}

angular.module('myApp').directive('tabs', tabs);