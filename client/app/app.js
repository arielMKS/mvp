angular.module('app', [])
  .controller('controller', function($scope, myFactory) {

    $scope.teams = [];
    $scope.players = [];
    $scope.code;
    $scope.index;
    $scope.temp;

    $scope.getPlayers = function (data) {
      //$scope.code = ????;
      myFactory.getPlayers(data.team._links.players.href).then(function(data){
      $scope.players = data.data.players;
      console.log("data", data);
      console.log("scope is", $scope.players);
      })
    }

    myFactory.getData().then(function(data) {
      //console.log('=======data', data);
      $scope.teams = data;
      console.log("data",data[1].code);
      // $scope.code = data
    })
  })
  .factory('myFactory', function ($http) {

    var getData = function () {
      return $http ({
        method: 'GET',
        // url: 'api/links',
        url: 'http://api.football-data.org/v1/competitions/394/teams',
        headers: {
          'X-Auth-Token': "6dbf7da93556476fa7ef33c83a6bbc74"
        }
      })
      .then(function(resp) {
        // var temp = resp.data.teams.forEach(function(item) {
        //   // console.log(item);
        // })
        console.log("resp========",resp.data.teams)
        // $scope.temp
        return resp.data.teams
      })
    }

    var getPlayers = function (linkToPlayers) {
      return $http ({
        method: 'GET',
        url: linkToPlayers,
        headers: {
          'X-Auth-Token': "6dbf7da93556476fa7ef33c83a6bbc74"
        }
      })
      .then(function(resp) {
         // console.log("The response",resp)
         return resp;
       })
    }

    return {
      getData: getData,
      getPlayers: getPlayers
    }


  })

