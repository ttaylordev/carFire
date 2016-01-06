angular.module('carApp', ['ui.router', 'firebase'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('Cars', {
        url: '/cars',
        templateUrl: '/js/views/cars.html',
        controller: 'carsCtrl'
      })
      .state('car', {
        url: '/cars/:carID',
        templateUrl: 'js/views/car.html',
        controller: 'carCtrl'
      });
    $urlRouterProvider.otherwise('/cars');
  });
