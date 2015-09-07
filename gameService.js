'use strict';
angular.module('MemoryCard.service', [])
  .service('GameService', function(CardFactory) {
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
  });
