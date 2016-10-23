angular.module('giphyApp')
      .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/favorites',{
          templateUrl: 'views/favorites.html',
          controller: 'MainController as main'
        }).when('/home',{
          templateUrl: 'views/home.html',
          controller: 'MainController as main'
        }).otherwise({
          redirectTo: '/',
          templateUrl: 'views/home.html'
        });
        $locationProvider.html5Mode(true);
      });
