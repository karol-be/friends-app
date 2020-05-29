'use strict';

angular.module('friends')
    .component('friendsListItem', {
        templateUrl: 'friends/friends-list/friends-list-item/friends-list-item.template.html',
        bindings: {
            friend: '<',
            genders: '<'
        },
        controller: function FriendListItemController() {
        }
    });
