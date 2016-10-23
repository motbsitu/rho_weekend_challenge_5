angular.module('giphyApp')
      .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/',{
          templateUrl: 'views/home.html',
          controller:'MainController as main'
        }).when('/favoritepage',{
          templateUrl: 'views/favoritepage.html',
          controller: 'MainController as main'
        }).when('/home',{
          templateUrl: 'views/home.html',
          controller: 'MainController as main'
        }).otherwise('/',{
          templateUrl: 'views/home.html',
          controller:'MainController as main'
        });
        $locationProvider.html5Mode(true);
      });
