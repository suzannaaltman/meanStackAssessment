var app = angular.module('heroApp', []);

app.controller('HeroController', ['$http', '$scope', function($http, $scope){
  console.log('controller called');
  $scope.data = {};
  $scope.heroes = [];
  console.log('$scope.data:', $scope.data);

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
    $http.post('/hero', $scope.data).then(function(response){
      console.log('sendData response:', response);
      $scope.data = {};
      $scope.getHeroes();
    })
  }

  $scope.getHeroes();

}])
