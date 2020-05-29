'use strict';

angular.module('friends')
    .component('friendsListGrouped', {
        templateUrl: 'friends/friends-list-grouped/friends-list-grouped.template.html',
        controller: ['FriendsProvider', function FriendsListGroupedController(FriendsProvider) {
            this.friends = FriendsProvider;
            this.$onInit = function () {
                this.friendsGenderGrouped = this.friends.reduce((group, friend) => {
                    group[friend.gender] = [...group[friend.gender] || [], friend];
                    return group;
                }, {});
                this.genders = Object.keys(this.friendsGenderGrouped);
            };
        }]
    });
