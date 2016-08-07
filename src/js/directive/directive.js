
app.directive("headNav", function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<header><a href="#/cityPick" class="fl">{{::city}} <span class="fa fa-map-marker"></span></a><span class="title">生鲜</span><a href="#/search" class="fr"><i class="fa fa-search" aria-hidden="true">' +
        '</i></a></header>',
    };
});



app.directive("footNav", function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<footer><a href="#/"><p class="fa fa-home icon" aria-hidden="true"></p></i><p>首页</p></a><a href="#/asort"><p class="fa fa-bars icon" aria-hidden="true"></p><p>分类</p></a>'+
        '<a href="#/cart"><p class="fa fa-shopping-cart icon" aria-hidden="true"></p><p>购物车</p></a><a href="#/user"><p class="fa fa-user icon" aria-hidden="true"></p><p>我的</p></a></footer>'
    };
});



