var app = angular.module("redditApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/dogs', {
    templateUrl: 'partials/main.html',
    controller: 'BleeperController'
  });
  $routeProvider
    .otherwise({
      templateUrl: 'partials/RedditController.html',
      controller: 'RedditController'
    });
})

