'use strict';
angular.module('CardMatch.service', [])
  .service('GameService', function(CardFactory) {
    var self = this;
    var firstPick = null;
    this.createCardSet = function(totalCards) {
      var cardCollection = [];
      for (var i = 0; i<totalCards; i++) {
         cardCollection.push(CardFactory[i]);
      }
      console.log(cardCollection);
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
        timeFail: 0,
        time: 7
      };
      for (var item in resetValues) {
        $scope[item] = resetValues[item];
      }
    };
    this.stopCount = function() {
      for (var i = 0; i < 9999; i++) {
        window.clearInterval(i);
      }
    };
    this.startCount = function($scope) {
      $scope.time = 7;
      setInterval(function() {
        $scope.$apply(function() {
          $scope.time -= 1;
          if ($scope.time === 0) {
            self.stopCount();
            $scope.timeFail += 1;
            toastr.error((3 - $scope.timeFail) + ' chance left', "Time's Up!");
          }
        });
      }, 1000);
    };
    this.pickCard = function($scope, card) {
      $scope.selectedCard.push(card.id);
      if (!firstPick) {
        firstPick = card.name;
        self.startCount($scope);
      } else if (firstPick === card.name && $scope.selectedCard[0] !== card.id) {
        firstPick = null;
        $scope.matchedCard.push(card.name);
        $scope.selectedCard = [];
        self.stopCount();
      } else if ($scope.selectedCard[0] !== card.id) {
        setTimeout(function() {
          $scope.selectedCard = [];
          self.stopCount();
        }, 10);
        firstPick = null;
        $scope.missScore += 1;        
      }
    };
  });
