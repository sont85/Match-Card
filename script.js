'use strict';
angular.module('MemoryCard', ['MemoryCard.factory', 'MemoryCard.service'])
  .controller('mainController', ['$scope', 'CardFactory', 'GameService', function($scope, CardFactory, GameService) {
    function initializeGame(totalCards) {
      var randomCollection = GameService.createCardSet(totalCards);
      GameService.resetValues(randomCollection, $scope);
    }
    $scope.frontImage = 'http://wallpoper.com/images/00/00/79/85/awesome-illusion_00007985.jpg';
    $scope.totalCards = 12;
    initializeGame($scope.totalCards);

    $scope.pairChange = function(totalCards) {
      initializeGame(totalCards);
    };
    $scope.pick = function(card) {
      if ($scope.timeFail < 3) {
        GameService.pickCard($scope, card);
      }
    };
  }]);
