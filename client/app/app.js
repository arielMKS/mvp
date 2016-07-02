angular.module('app', [])
  .controller('controller', function($scope, myFactory) {
    //console.log(myFactory.footBallData)
    // connect button here

    $scope.teams = [];


    myFactory.getData().then(function(data) {
      console.log('=======data', data);
      $scope.teams = data;
    })

    // myFactory.getPlayers() {
    //   // $scope.teams = ???
    // }



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
        // console.log('I am inside getData=====', resp)
        var temp = resp.data.teams.forEach(function(item) {
          // console.log(item);
        })

        return resp.data.teams
      })
    }



    return {
      getData: getData
      //getPlayers: getPlayers
    }






  })


//cors header figure out with api




//localhose
