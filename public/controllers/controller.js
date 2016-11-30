var myApp = angular.module('myApp', []);
//In LA
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
  console.log("Hello World from controller");

  var edu = function(){
    $http.get('/education').success(function(response){
      console.log("I got the data I requested");
      $scope.educat = response;
    });
  };
  var skill = function(){
    $http.get('/skills').success(function(response){
      console.log("I got the data I requested");
      $scope.skil = response;
    });
  };
  var project = function(){
    $http.get('/projects').success(function(response){
      console.log("I got the data I requested");
      $scope.projs = response;
    });
  };
  edu();
  skill();
  project();

    // $scope.addContact = function(){
    //   console.log($scope.contact);
    //   $http.post('/resume', $scope.contact).success(function(response){
    //     console.log(response);
    //     refresh();
    //   });
    // };
    //
    // $scope.remove = function(id){
    //   console.log(id);
    //   $http.delete('/resume/' + id).success(function(response){
    //     refresh();
    //   });
    // };
    //
    // $scope.edit = function(id){
    //   console.log(id);
    //   $http.get('/resume/' + id).success(function(response){
    //     $scope.contact = response;
    //   });
    // };
    //
    // $scope.update = function(){
    //   console.log($scope.contact._id);
    //   $http.put('/resume/' + $scope.contact._id, $scope.contact).success(function(response){
    //     refresh();
    //   });
    // };
    //
    // $scope.deselect = function(){
    //   $scope.contact = "";
    // };

}]);
