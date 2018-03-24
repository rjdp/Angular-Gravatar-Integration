var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
  $scope.users = [{email:"rjdp9736@gmail.com",image:"ab.jpg"},{email:"rjdp9736@gmail.com",image:""},{email:"rjp9736@gmail.com",image:""}];
});

app.directive('gravatar', function () {
  return {
    template: '<img style="z-index=1;background-color: lightblue;" ng-src="{{url}}"></img>',
    restrict: 'E',
    replace: true,
    link: function (scope, element, attrs) {
        scope.url = typeof scope.email === 'string' ? 'https://www.gravatar.com/avatar/' + md5(scope.email.toLowerCase()) + '.jpg?&d=blank&s=160' : '';
        attrs.$observe('email', function(value) {
            this.url = typeof value === 'string' ? 'https://www.gravatar.com/avatar/' + md5(value.toLowerCase()) + '.jpg?&d=blank&s=160' : '';
        }.bind(scope));
    }
  };
});
