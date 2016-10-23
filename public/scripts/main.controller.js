angular.module('giphyApp')
    .controller('MainController', MainController);

function MainController(giphy) {
  console.log('main controller loaded');
    var main = this;
    main.randomImage = [];
    main.searchImage = [];
    main.favorites = {};
    main.favoritesArray=[];
    main.favoritesCount = 0;


    //$http get calls


    main.getGiphy = function() {
        giphy.getGiphy()
            .then(function(randomImage) {
                main.randomImage = randomImage;
                console.log('this', randomImage);
            });
    };

    main.searchGiphy = function() {
        giphy.searchGiphy(main.searched)
            .then(function(searchImage) {
                main.searchImage = searchImage;
            });
    };

    main.favoriteGiphy = function(comment, imagelink){
      main.favorites = {comment: comment, imagelink: imagelink};
      console.log('main favorites', main.favorites);
        main.favoritesCount ++;
        giphy.favoriteGiphy(main.favorites)
            .then(function(response){
            console.log('response from main cont', response);
            main.favorites = favorites;
          });
    };

    main.getFavoriteGiphy = function(){
        giphy.getFavoriteGiphy()
              .then(function(response){
                main.favoritesArray = response;
            console.log(main.favoritesArray);
            
        });

    };

    main.getFavoriteGiphy();

}
