angular.module('giphyApp')
  .service('giphy', giphyAPIService);

function giphyAPIService($http) {
  var API = 'http://api.giphy.com/v1/gifs/';
  var key = 'dc6zaTOxFJmzC';
  var search = 'search?q=';

  this.getGiphy = function() {
        return $http.get(API + '/random', {
          params:{
            api_key: key,
            rating: 'y'
          }
        }).then(function(response) {
                console.log('response', response);
                return response.data.data;
              });
            }



  this.searchGiphy = function(searched) {
        this.searched = searched.replace(' ', '+')
        return $http.get(API + search + this.searched,{
          params:{
            api_key: key,
            rating: 'y'
          }
        }).then(function(response) {
                return response.data.data;
                console.log('main search image', main.searchImage);
            });
    };
}
