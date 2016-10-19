var app = angular.module('myApp', []);

app.controller('MainController', MainController);

var API = 'http://api.giphy.com/v1/gifs/';

var key = '=dc6zaTOxFJmzC';
//'http://api.giphy.com/v1/';


var random = 'random?api_key';
function MainController($http) {

    var main = this;
    main.randomImage = {};

    //console.log('MainController loaded');
    //main.giphy = [{title: 'A New Hope'}, {title: 'The Phantom Menace'}];

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

    //$http get call to API

    //path to search     /v1/gifs/search

    //public beta key       dc6zaTOxFJmzC

    //key of params in config object set to key =

} //end MainController
