var ಠ_ಠ23=angular.module("myApp",["ngRoute"]);ಠ_ಠ23.config(["$routeProvider",function(r){r.when("/",{templateUrl:"src/tmp/index.html",controller:"IndexController"}).when("/login",{templateUrl:"src/tmp/login.html",controller:"LoginController"}).when("/register",{templateUrl:"src/tmp/register.html"}).when("/cart",{templateUrl:"src/tmp/cart.html",controller:"CartController"}).when("/detail",{templateUrl:"src/tmp/detail.html",controller:"DetailController"}).when("/search",{templateUrl:"src/tmp/search.html"}).when("/order",{templateUrl:"src/tmp/order.html"}).when("/asort",{templateUrl:"src/tmp/asort.html"}).when("/confirm_order",{templateUrl:"src/tmp/confirm_order.html"}).when("/address",{templateUrl:"src/tmp/address.html"}).when("/user",{templateUrl:"src/tmp/user.html"}).otherwise({redirectTo:"/"})}]);