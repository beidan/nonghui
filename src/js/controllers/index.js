/*
 * 首页  尚未实现功能:
 * 1.分页,一页显示几条数据?
 * 2.服务器处理时出错  返回信息
 * 3.当数据为空时,前端要显示提示信息。
 * */
app.controller('IndexController', function ($scope, $location, $http, getData, serviceURL, SortDatas, Location) {
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

    /*添加到购物车,初始化购物车数量*/
    var userData = JSON.parse(localStorage.getItem('user_data'));
    $scope.content = 0;
    $scope.addToCart = function ($event) {
        var shopId = $event.target.parentNode.getAttribute('value');

        console.log(userData.id);

        // getData.get(serviceURL.BuyGoodUrl, {
        //     params: {
        //         userId:userData.id,
        //         id: shopId,
        //         count: 1,
        //     }
        // })
        //     .then(function (data) {
        //         console.log(data);
        //     }, function (data, status, headers, config) {
        //         console.log('error!');
        //     });
        $scope.content = $scope.content + 1;
    }

    function Silder(list) {
        new Slider({
            'dom': document.getElementById('canvas'),
            'list': list
        });
    }

    /*主页轮播*/
    getData.get(serviceURL.IndexSwiperUrl, {})
        .then(function (data) {
            Silder(data.imageUrl);
        }, function (data, status, headers, config) {
            console.log('error!');
        });

    /*分类*/
    $scope.navList = SortDatas;

    /*定位功能*/
    var city = localStorage.getItem('city');
    $scope.city = city;
    Location.getLocation();

})
;
