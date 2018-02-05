/* global angular */
// $scope is an object and you can assign properties to it.

angular.module('template', [])
.controller('MainCtrl', function($scope){


$scope.getAllTweets = function (){
  nodered($scope, 'https://uondemored.eu-gb.mybluemix.net/all-tweets', 'get', null, function(result){
    $scope.tweets = result.response;
    drawgraph($scope.tweets);
  });

  
 };
  
});

function drawgraph(tweets){
  $('#graph').highcharts({
    title: {
      text: 'Tweet Sentiment Analysis'
    },
    xAxis: {
       categories: tweets.map(function(t, i){return i;})
    },
    series: [
     {
       data: tweets.map(function(t){return t.SCORE;})
     }
    ]
  });
}


//   $scope.x = 3;
//   $scope.nums = [3, 5, 7, 9];
//   $scope.addnum = function(){
//     $scope.nums.push($scope.a * 1);
//   };
  
// });
