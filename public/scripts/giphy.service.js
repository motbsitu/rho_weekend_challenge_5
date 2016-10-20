angular.module('giphyApp')
  .service('giphy', giphyAPIService);


function giphyAPIService($http){
  var API = 'http://api.giphy.com/v1/gifs/';
  var key = 'api_key=dc6zaTOxFJmzC';
  var random = 'random?';
  var search = 'search?q=';

  this.getGiphy = function(){

    return $http.get(API + random + key)
        .then(function(response) {
            console.log('response', response);
            return response.data.data;

        });
  }


  this.searchGiphy = function(searched){
    this.searched = searched.replace (' ', '+')
    return $http.get(API + search + this.searched + '&' + key)
            .then(function(response) {
                return response.data.data;
                console.log('main search image', main.searchImage);


            });
  }
}
