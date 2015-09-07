'use strict';
angular.module('MemoryCard.service', [])
  .service('GameService', function(CardFactory) {
    var firstPick = null;
    this.createCardSet = function(totalCards) {
      var cardCollection = CardFactory;
      var randomCollection = [];
      while (randomCollection.length < totalCards) {
        var randomNumber = Math.floor(Math.random() * cardCollection.length);
        var card = cardCollection.splice(randomNumber, 1);
        randomCollection.push(card);
      }
      return randomCollection;
    };
    this.resetValues = function(randomCollection, $scope) {
      var resetValues = {
        missScore: 0,
        matchedCard: [],
        selectedCard: [],
        cards: randomCollection,
      };
      for (var item in resetValues) {
        $scope[item] = resetValues[item];
      }
    };
    this.pickCard = function($scope, card) {
      if ($scope.selectedCard.indexOf(card.id) < 0) {
        $scope.selectedCard.push(card.id);
      }
      if (!firstPick) {
        firstPick = card.name;
      } else if (firstPick === card.name && $scope.selectedCard[0] !== card.id) {
        firstPick = null;
        $scope.matchedCard.push(card.name);
        $scope.selectedCard = [];
      } else if ($scope.selectedCard[0] !== card.id) {
        setTimeout(function() {
          $scope.selectedCard = [];
        }, 100);
        firstPick = null;
        $scope.missScore += 1;
      }
    };
  });
