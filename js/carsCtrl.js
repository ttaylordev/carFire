angular.module('carApp')
  .controller('carsCtrl', function($scope, carsSvc) {
    $scope.cars = carsSvc.getCars();

    $scope.createNewCar = function(newCar) {
      carsSvc.addCar(newCar);
    };
  });
