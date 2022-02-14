var app = angular.module('myapp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/home',
            {
                templateUrl: 'spahome.html',
                controller: 'homecntrl'
            }).when('/home/:first/:last',
                {
                    templateUrl: 'spahome.html',
                    controller: 'homecntrl'
                }).when('/about',
                    {
                        templateUrl: 'spaabout.html',
                        controller: 'aboutcntrl'
                    }).when('/appointment',
                        {
                            templateUrl: 'spaappointment.html',
                            controller: 'appointmentcntrl'
                        })
    })
app.controller('mycntrl', function () {

})
app.controller("homecntrl", function ($scope, $routeParams) {
    $scope.message = "Hey There"
    if ($routeParams.first && $routeParams.last) {
        $scope.person = {
            first: $routeParams.first,
            last: $routeParams.last
        };
    }

})
app.controller("aboutcntrl", function ($scope) {
    $scope.about = ["This is the about page for the Appointment management."];
})
app.controller("appointmentcntrl", function ($scope, $http) {
    $http.get('https://harshita-verma-2147249.github.io/lab8-program/lab8.json')
        .then(function (response) {
            $scope.r_list = response.data.patients;
        });
});