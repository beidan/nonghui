app.controller('CartController', function ($scope, isLogin, getData, serviceURL) {

    isLogin.isLogin();

    var userData = JSON.parse(localStorage.getItem('user_data'));

    /*获取购物车数据*/
    getData.get(serviceURL.MyCartUrl, {
        params: {
            userId: userData.id,
        }
    }).then(function (data) {
        $scope.items = data.orderProducts;
        //计算总价格
        $scope.totalPrice = function () {
            var total = 0, i,
                len = $scope.items.length;
            for (i = 0; i < len; i++) {
                total += $scope.items[i].productPrices * $scope.items[i].count;
            }
            return total;
        };
    }, function () {
        console.log('error!');
    });

    $scope.toggle = function ($event) {
        var sign = $event.target.innerHTML;
        if (sign === '编辑') {
            $event.target.innerHTML = '完成';
            $scope.editShow = true;
        } else {
            $event.target.innerHTML = '编辑';
            $scope.editShow = false;
        }
    }

    $scope.remove = function (index) {
        getData.get(serviceURL.RemoveGoodUrl, {
            params: {
                id: $scope.items[index].id,
            }
        }).then(function (data) {
            $scope.items.splice(index, 1);
            localStorage.setItem('cartCount', data.cartCount);
        }, function () {
            console.log('error!');
        });
    }

    $scope.AddNum = function (index) {
        getData.get(serviceURL.AddCountUrl, {
            params: {
                id: $scope.items[index].id,
            }
        }).then(function (data) {
            if (data.status == 0) {
                $scope.items[index].count++;
                localStorage.setItem('cartCount', data.cartCount);
            } else {
                console.log('添加数量失败!');
                alert('添加数量失败');
            }
        }, function () {
            console.log('error!');
        });

    }
    $scope.SubNum = function (index) {
        if ($scope.items[index].count > 1) {
            getData.get(serviceURL.SubCountUrl, {
                params: {
                    id: $scope.items[index].id,
                }
            }).then(function (data) {
                $scope.items[index].count--;
                localStorage.setItem('cartCount', data.cartCount);
            }, function () {
                console.log('error!');
            });
        } else if ($scope.items[index].count === 1) {
            alert('数量不能为0');
            console.log('数量不能为0');
        }

    }
});
