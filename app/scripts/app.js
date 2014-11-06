'use strict';

/**
 * @ngdoc overview
 * @name yeomanAngularApp
 * @description
 * # yeomanAngularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('yeomanAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'elasticsearch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.service('client', function (esFactory) {
  return esFactory({
    host: '54.209.43.90:9200',
    // ...
  });
});
