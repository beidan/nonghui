var app = angular.module('myApp',['ngRoute']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'index.html',
            })
            .when('/login',{
                templateUrl:'login.html'
            })
            .when('/register',{templateUrl:'register.html'})
            .when('/cart',{
                templateUrl:'cart.html',
                controller:'CartController'
            })
            .when('/detail',{templateUrl:'detail.html'})
            .when('/search',{templateUrl:'search.html'})
            .when('/order',{templateUrl:'order.html'})
            .when('/confirm_order',{templateUrl:'confirm_order.html'})
            .when('/address',{templateUrl:'address.html'})
            .when('/user',{templateUrl:'user.html'})
            .otherwise({redirectTo:'/'});
    }]);