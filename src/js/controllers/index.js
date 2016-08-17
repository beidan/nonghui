/*
 * 首页  尚未实现功能:
 * 1.分页,一页显示几条数据?
 *
 * 3.当数据为空时,前端要显示提示信息。
 * */
app.controller('IndexController', function ($scope, $location, $http, getData, serviceURL, SortDatas, isLogin) {
    /*判断是否登录*/
    var sta = isLogin.isLogin();

    if (sta.state == 0) {
        $scope.content = 0;
    }
    else {
        $scope.content = sta.content;
    }

    /*添加到购物车,初始化购物车数量*/
    $scope.addToCart = function ($event) {
        var shopId = $event.target.parentNode.getAttribute('value');
        if (sta.state == 1) {
            getData.get(serviceURL.BuyGoodUrl, {
                params: {
                    userId: sta.userId,
                    id: shopId,
                    count: 1,
                }
            }).then(function (data) {
                if (data.status == 0) {
                    $scope.content = $scope.content + 1;
                    localStorage.setItem('cartCount', $scope.content);
                } else {
                    console.log('添加失败!');
                    alert('添加失败');
                }
            }, function (data, status, headers, config) {
                console.log('error!');
            });
        } else {
            console.log('对不起,请先登录!');
        }
    }

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
        }).then(function (data) {
            $scope.cateData = data.items;
        }, function (data, status, headers, config) {
            console.log('error!');
        });
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
        }, function () {
            console.log('error!');
        });

    /*分类*/
    $scope.navList = SortDatas;

    /*定位功能*/
    // var city = localStorage.getItem('city');
    // $scope.city = city;
    // Location.getLocation();

})
;
