'use strict';
angular.module('MemoryCard', ['MemoryCard.factory', 'MemoryCard.service'])
  .controller('mainController', ['$scope', 'CardFactory', 'GameService', function($scope, CardFactory, GameService) {

    $scope.frontImage = 'http://wallpoper.com/images/00/00/79/85/awesome-illusion_00007985.jpg';
    $scope.totalCards = 12;

    function initializeGame(totalCards) {
      var randomCollection = GameService.createCardSet(totalCards);
      GameService.resetValues(randomCollection, $scope);
    }
    initializeGame($scope.totalCards);

    $scope.pairChange = function(totalCards) {
      initializeGame(totalCards);
    };

    var firstPick = '';

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
