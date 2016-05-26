app.controller('CartController',function($scope){
    $scope.items = [
        {name: "新鲜小黄鱼特惠", num: 1, price: 199.00,origPrice: 223.00,imgsrc:'source/img/index/goods008.jpg'},
        {name: "豆腐干2kg装", num: 1, price: 139.00,origPrice: 243.00,imgsrc:'source/img/index/goods009.jpg'},
        {name: "优质牛肉特价", num: 1, price: 10.00,origPrice: 23.00,imgsrc:'source/img/index/goods007.jpg'},
    ];
   $scope.item11 = 'hello';
});