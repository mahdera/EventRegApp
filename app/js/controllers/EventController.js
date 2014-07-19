'use strict';

eventsApp.controller('EventController',function EventController($scope){
        $scope.boolValue = false;
        $scope.sortOrder = 'name';

        $scope.event = {
            name : 'Angualr Boot Camp',
            date : '1359781015626',
            time : '10:30 am',
            location : {
                address : 'Google Headquarters',
                city : 'Mountain View',
                province : 'CA'
            },
            imageUrl : 'img/angualrjs_logo.jpeg',
            sessions : [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Mahder Neway',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes. Learn what they do in your project and I am sure you will love them!',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName:'Zelalem Assefa',
                    duration: 4,
                    level:' Intermediate',
                    abstract:'Controllers are the beginning of everything in AngualrJS. They are used to create scope objects which in turn are used to contain the data/model!',
                    upVoteCount: 0
                }
            ]
        }

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