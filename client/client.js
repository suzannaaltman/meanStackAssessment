var app = angular.module('heroApp', []);

app.controller('HeroController', ['$http', '$scope', function($http, $scope){
  console.log('controller called');
  $scope.hero = {};
  $scope.heroes = [];
  console.log('$scope.hero:', $scope.hero);

  $scope.options = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

  $scope.getHeroes = function(){
    console.log('getHeroes called');
    $http.get('hero').then(function(response){
      console.log('getHeroes response:', response);
      $scope.heroes = response.data;
    })
  }

  $scope.sendData = function(){
    console.log('sendData called');
    $http.post('/hero', $scope.hero).then(function(response){
      console.log('sendData response:', response);
      $scope.hero = {};
      $scope.getHeroes();
    })
  }

  $scope.removeHero = function(hero) {
    console.log('Hero is', hero);
    id = hero._id;
    console.log('/hero/remove/' +id);
    $http.delete('/hero/remove/' +id).then(function(response){
      console.log('deleted', hero);
      $scope.getHeroes();
    })
  }

  $scope.getHeroes();

}])
