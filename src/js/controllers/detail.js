/*
 * 商品详情页面
 *
 * 1.商品评价接口?  [不做]
 * 2.样式需要调整
 * 3.img轮播没显示出来
 *
 * */

app.controller('DetailController', function ($scope, $location, getData, serviceURL,isLogin) {
    /*判断是否登录*/
    var sta = isLogin.isLogin();

    if (sta.state == 0) {
        $scope.content = 0;
    }
    else {
        $scope.content = sta.content;
    }

    getData.get(serviceURL.DetailUrl, {
        params: {
            id: $location.search().id
        },
    }).then(function (data) {
        $scope.detail = data.product;
        Silder(data.imageUrl);
        $scope.comment = data.comments;
        $scope.len = function () {
            return $scope.comment.length;
        }

    }, function (data, status, headers, config) {
        console.log('error!');
    });


    function Silder(list) {
        new Slider({
            'dom': document.getElementById('canvas'),
            'list': list
        });
    }

    $scope.count = 1;
    $scope.AddNum = function (index) {
        $scope.count++;
    }
    $scope.SubNum = function (index) {
        if ($scope.count > 1) {
            $scope.count--;
        }
    }

    var userData = JSON.parse(localStorage.getItem('user_data'));
    $scope.addToCart = function () {
        if (userData !== null) {
            getData.get(serviceURL.BuyGoodUrl, {
                params: {
                    userId: userData.id,
                    id: $location.search().id,
                    count: $scope.count,
                }
            }).then(function (data) {
                if (data.status == 0) {
                    $scope.cartCount = data.cartCount;
                    localStorage.setItem('cartCount', data.cartCount);
                    console.log('加入购物车成功!');
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
        console.log('add');
    }


});
