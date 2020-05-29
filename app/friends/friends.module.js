'use strict';

const app = angular.module('friends', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {

    $routeProvider
        .when('/friends-list', {
            template: '<friends-list></friends-list>'
        })
        .when('/friends-list-grouped', {
            template: '<friends-list-grouped></friends-list-grouped>'
        })
        .otherwise('/friends-list');
}]);
