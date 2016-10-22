angular.module('giphyApp')
      .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/favorites',{
          templateUrl: 'views/favorites.html',
          controller: 'FavController as fav'
        });
        $locationProvider.html5Mode(true);
      });
