'use strict';
angular.module('app', [])
  .controller('mainController', ['$scope', function($scope) {
    function cards() {
      return [{
        id: 'card1',
        name: 'stairs',
        url: 'http://www.mobiletoones.com/downloads/wallpapers/abstract_wallpapers/preview/92/71645-graffiti-illusion.jpeg'
      }, {
        id: 'card2',
        name: 'stairs',
        url: 'http://www.mobiletoones.com/downloads/wallpapers/abstract_wallpapers/preview/92/71645-graffiti-illusion.jpeg'
      }, {
        id: 'card3',
        name: 'dice',
        url: ('http://wallpoper.com/images/00/00/07/20/illusion_00000720.jpg')
      }, {
        id: 'card4',
        name: 'dice',
        url: ('http://wallpoper.com/images/00/00/07/20/illusion_00000720.jpg')
      }, {
        id: 'card5',
        name: 'bikeSidewalk',
        url: ('http://fonepics.net/uploads/pictures/big_images/illusion_street_ride.jpg')
      }, {
        id: 'card6',
        name: 'bikeSidewalk',
        url: ('http://fonepics.net/uploads/pictures/big_images/illusion_street_ride.jpg')
      }, {
        id: 'card7',
        name: 'windmillSoldier',
        url: ('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHlDhQDCgOjwssbe4VLNNcWCK-IuZ0xmGATJzK-mTjhIURO0iW')
      }, {
        id: 'card8',
        name: 'windmillSoldier',
        url: ('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHlDhQDCgOjwssbe4VLNNcWCK-IuZ0xmGATJzK-mTjhIURO0iW')
      }, {
        id: 'card9',
        name: 'spinningWheels',
        url: ('http://sherly.mobile9.com/download/media/210/opticalill_1aql7aqe.jpg')
      }, {
        id: 'card10',
        name: 'spinningWheels',
        url: ('http://sherly.mobile9.com/download/media/210/opticalill_1aql7aqe.jpg')
      }, {
        id: 'card11',
        name: 'faceLand',
        url: ('http://mobiwallpapers.net/uploads/pictures/big_images/17576-optical-illusion.jpg')
      }, {
        id: 'card12',
        name: 'faceLand',
        url: ('http://mobiwallpapers.net/uploads/pictures/big_images/17576-optical-illusion.jpg')
      }, {
        id: 'card13',
        name: 'nunStream',
        url: ('http://wordsculptures.com/page/wp-content/uploads/2010/04/illusion.jpg')
      }, {
        id: 'card14',
        name: 'nunStream',
        url: ('http://wordsculptures.com/page/wp-content/uploads/2010/04/illusion.jpg')
      }, {
        id: 'card15',
        name: 'dots',
        url: ('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTN1pjd8AiutbTQ56-rADG7Vo5z3mK9bbqh2kkJ6gMZKJoI-9ED')
      }, {
        id: 'card16',
        name: 'dots',
        url: ('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTN1pjd8AiutbTQ56-rADG7Vo5z3mK9bbqh2kkJ6gMZKJoI-9ED')
      }, {
        id: 'card17',
        name: 'birdFish',
        url: ('http://www.mobileapples.com/Assets/Content/Wallpapers/illusion.jpg')
      }, {
        id: 'card18',
        name: 'birdFish',
        url: ('http://www.mobileapples.com/Assets/Content/Wallpapers/illusion.jpg')
      }, {
        id: 'card19',
        name: 'eggBird',
        url: ('http://fonepics.net/uploads/pictures/big_images/illusion_egg_bird.jpg')
      }, {
        id: 'card20',
        name: 'eggBird',
        url: ('http://fonepics.net/uploads/pictures/big_images/illusion_egg_bird.jpg')
      }]
    }

    $scope.frontImage = 'http://wallpoper.com/images/00/00/79/85/awesome-illusion_00007985.jpg'

    $scope.initializeGame = function() {
      $scope.gameOngoing = false
      console.log($scope.totalCards)



      var theCardCollection = cards()
      var cardCollection = []
      for (var i = 0; i < $scope.totalCards; i++) {
        cardCollection.push(theCardCollection[i])
      }


      console.log(cardCollection.length)
      var randomCollection = []
      var randomized = function() {
        while (randomCollection.length < $scope.totalCards) {
          var randomNumber = Math.floor(Math.random() * cardCollection.length);
          var card = cardCollection.splice(randomNumber, 1);
          randomCollection.push(card);
        }
      };


      randomized();
      $scope.missScore = 0
      $scope.matchedCard = []
      $scope.selectedCard = []
      $scope.gameOngoing = true
      $scope.cards = randomCollection;

    }

    $scope.totalCards = 12
    $scope.initializeGame()

    $scope.pairChange = function(totalCards) {
      $scope.totalCards = totalCards
      $scope.initializeGame()
    }




    var firstPick = ''

    $scope.pick = function(id, currentCard) {
      if ($scope.selectedCard.indexOf(id) < 0) {
        $scope.selectedCard.push(id)
      }
      if (!firstPick) {
        firstPick = currentCard
      } else if (firstPick === currentCard && $scope.selectedCard[0] !== id) {
        firstPick = ''
        $scope.matchedCard.push(currentCard)
        $scope.selectedCard = []
      } else if ($scope.selectedCard[0] !== id) {
        setTimeout(function() {
          $scope.selectedCard = []
        }, 100);
        firstPick = ''
        $scope.missScore += 1
      }
    }



  }]);
