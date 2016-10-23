angular.module('giphyApp')
    .controller('MainController', MainController);

function MainController(giphy) {
    console.log('main controller loaded');
    var main = this;
    main.randomImage = [];
    main.searchImage = [];
    main.favorites = {};
    main.favoritesArray = [];
    main.favoriteCount = 0;

    giphy.getGiphy()
        .then(function(randomImage) {
            main.randomImage = randomImage;
        });

    main.getGiphy = function() {
        giphy.getGiphy()
            .then(function(randomImage) {
                main.randomImage = randomImage;
            });
    };

    main.searchGiphy = function() {
        giphy.searchGiphy(main.searched)
            .then(function(searchImage) {
                main.searchImage = searchImage;
            });
    };

    main.favoriteGiphy = function(comment, imagelink) {
        main.favorites = {
            comment: comment,
            imagelink: imagelink
        };
        main.favoriteCount++;
        giphy.favoriteGiphy(main.favorites)
            .then(function(response) {
                main.getFavoriteGiphy();
            });
    };

    main.getFavoriteGiphy = function() {
        giphy.getFavoriteGiphy()
            .then(function(response) {
                main.favoritesArray = response.data;
                main.favoriteCount = response.data.length;
            });
    };

    main.getFavoriteGiphy();

}
