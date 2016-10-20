var app = angular.module('myApp', []);

app.controller('MainController', MainController);

var API = 'http://api.giphy.com/v1/gifs/';
var key = 'api_key=dc6zaTOxFJmzC';
var random = 'random?';
var search = 'search?q='



function MainController($http) {
    var main = this;
    main.randomImage = {};
    main.searchImage = [];
    //console.log('MainController loaded');

    //$http get calls
    main.getGiphy = function() {
        //console.log('inside getGiphy function');
        $http.get(API + random + key)
            .then(function(response) {
                console.log('response', response);
                main.randomImage = response.data.data;
                console.log('main random image', main.randomImage);
            });
    }; //end of getGiphy


    main.searchGiphy = function() {
        $http.get(API + search + main.searched + '&' + key)
            .then(function(response) {
                // console.log('search response', response);
                main.searchImage = response.data.data;
                console.log('main search image', main.searchImage);
              

            });
    }; //end of searchGiphy


} //end MainController
