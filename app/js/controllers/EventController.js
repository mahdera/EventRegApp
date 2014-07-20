'use strict';

eventsApp.controller('EventController',function EventController($scope, eventData){
        $scope.boolValue = false;
        $scope.sortOrder = 'name';

        $scope.event = eventData.event;

        //define the voting functions here under...
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            if(session.upVoteCount >= 0)
                session.upVoteCount--;
            else
                session.upVoteCount = 0;
        }
    }
);