var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'src/tmp/index.html',
            controller: 'IndexController'
        })
        .when('/login', {
            templateUrl: 'src/tmp/login.html',
            controller: 'LoginController'
        })
        .when('/register', {templateUrl: 'src/tmp/register.html'})
        .when('/cart', {
            templateUrl: 'src/tmp/cart.html',
            controller: 'CartController'
        })
        .when('/detail', {
            templateUrl: 'src/tmp/detail.html',
            controller: 'DetailController'
        })
        .when('/userMsg', {
            templateUrl: 'src/tmp/userMsg.html',
            controller: 'LoginController'
        })
        .when('/cityPick', {
            templateUrl: 'src/tmp/citypick.html',
            controller: 'cityPickController'
        })
        .when('/search', {
            templateUrl: 'src/tmp/search.html',
            controller: 'searchController',
        })
        .when('/order', {
            templateUrl: 'src/tmp/order.html',
            controller: 'orderController'
        })
        .when('/asort', {templateUrl: 'src/tmp/asort.html'})
        .when('/confirm_order', {
            templateUrl: 'src/tmp/confirm_order.html',
            controller: 'confirmOrderController'
        })
        .when('/address', {templateUrl: 'src/tmp/address.html'})
        .when('/user', {templateUrl: 'src/tmp/user.html'})
        .otherwise({
            redirectTo: '/index'
        });
}]);