var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('DatePickController', function($scope){

  $scope.dt='2014-10-02';

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

});