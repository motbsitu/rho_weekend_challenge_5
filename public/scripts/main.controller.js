angular.module('giphyApp')
  .controller('MainController', MainController);

function MainController(giphy) {
    var main = this;
    main.randomImage = {};
    main.searchImage = [];


    //$http get calls
    main.getGiphy = function(){
    giphy.getGiphy()
      .then(function(randomImage){
        main.randomImage = randomImage;
  });
};

    main.searchGiphy = function(){
    giphy.searchGiphy(main.searched)
      .then(function(searchImage){

        main.searchImage = searchImage;
      });
    };
  // main.searchGiphy = function() {
  //     $http.get(API + search + main.searched + '&' + key)
  //         .then(function(response) {
  //             // console.log('search response', response);
  //             main.searchImage = response.data.data;
  //             console.log('main search image', main.searchImage);
  //
  //
  //         });
  // }; //end of searchGiphy

}
