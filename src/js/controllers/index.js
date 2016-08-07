/*
 * 首页  尚未实现功能:
 * 1.分页,一页显示几条数据?
 * 2.服务器处理时出错  返回信息
 * 3.当数据为空时,前端要显示提示信息。
 * */
app.controller('IndexController', function ($scope, $location, getData, serviceURL, SortDatas, Location) {
    /*主页地址*/
    var indexurl = $location.absUrl();
    localStorage.setItem('indexUrl', indexurl);
    /*初始化页面加载热销*/
    change('hot');
    /*商品详情的基础url*/
    $scope.baseUrl = serviceURL.DetailUrl;

    /*根据不同内容获取数据*/
    $scope.toggleList = function ($event) {
        if ($event.target.innerHTML === '热销') {
            change('hot');
        } else if ($event.target.innerHTML === '新品') {
            change('new');
        } else {
            change('sale');
        }
    }

    function change(cate) {
        getData.get(serviceURL.indexUrl, {
            params: {
                cate: cate,
            }
        })
            .then(function (data) {
                $scope.cateData = data.items;
            }, function (data, status, headers, config) {
                console.log('error!');
            });
    }

    /*轮播*/
    $(".swiper-container").swiper({
        loop: true,
        pagination: '.swiper-pagination',
    });


    $scope.content = 1;
    /*添加到购物车功能    暂未实现*/
    $scope.addToCart = function (content) {
        $scope.content = 1;
        $scope.content = $scope.content + 1;
        console.log($scope.content);
    }

    $scope.content = 1;

    var city = localStorage.getItem('city');
    $scope.city = city;

    /*分类及轮播*/
    $scope.navList = SortDatas;
    $scope.swiperImg = [
        {imgsrc: 'src/img/index/slide001.jpg'},
        {imgsrc: 'src/img/index/slide002.jpg'},
    ];

    /*定位功能*/
    Location.getLocation();


})
;
