'use strict';

angular.module('friends')
    .component('friendsList', {
        templateUrl: 'friends/friends-list/friends-list.template.html',
        controller: ['FriendsProvider',
            function FriendsListController(FriendsProvider) {
            this.friends = FriendsProvider;

            this.genders = [... new Set(this.friends.map(function (f) {
                return f.gender;
            }))];

            this.genderFilter = "";
        }]
    });
