'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularApp
 */
angular.module('yeomanAngularApp')
  .controller('MainCtrl',function ($scope,esFactory,client) {
    $scope.term;



//Ping cluster
client.ping({
  requestTimeout: 1000,
  // undocumented params are appended to the query string
  hello: "elasticsearch!"
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
//    alert('All is well');
  }
});
$scope.search = function(term){
client.search({
  index: 'userss',
  type: 'users',
  body: {
    query: {
        match: {
        firstName: term
    }
     /*  bool: {
            must: {
                match: {
                    firstName.autocomplete: term
                }
            },
            should: {
                match: {
                    firstName: term
                }
            }
        }*/

    }
  }
}).then(function (resp) {
    $scope.results = resp.hits.hits;

}, function (err) {
    console.trace(err.message);
});
};



    $scope.print = function(term){
        alert(term);
        $scope.searched=term;

        alert('dd');
        window.alert(this.term)
        return this.term;

    }

  })
