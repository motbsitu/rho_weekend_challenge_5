angular.module('giphyApp')
      .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/',{
          templateUrl: 'views/home.html',
          controller:'MainController as main'
        }).when('/favorites',{
          templateUrl: 'views/favorites.html',
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
