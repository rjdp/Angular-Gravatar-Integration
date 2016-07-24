var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
  $scope.users = [{email:"rjdp9736@gmail.com",image:"ab.jpg"},{email:"rjdp9736@gmail.com",image:""},{email:"rjp9736@gmail.com",image:""}];
});

app.directive('gravatar', function () {
  return {
    template: '<img style="z-index=1;background-color: lightblue;" ng-src="{{url}}"></img>',
    restrict: 'E',
    scope: {
      email: '='
    },
    link: function (scope) {
    scope.url = 'http://www.gravatar.com/avatar/' + md5(scope.email) + ".jpg?&d=blank";
    }
  };
});