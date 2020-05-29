'use strict';

angular.module('friends')
    .component('friends', {
        templateUrl: 'friends/friends.template.html',
        controller: function FriendsController() {
            this.tabs = [
                { link : '#!/friends-list', label : 'Friends list' },
                { link : '#!/friends-list-grouped', label : 'Friends list grouped' },
            ];

            this.selectedTab = this.tabs[0];

            this.tabClass = function(tab) {
                return tab === this.selectedTab ? "active" : "";
            };
        }
    });
