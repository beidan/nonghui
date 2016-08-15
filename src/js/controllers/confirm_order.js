app.controller('confirmOrderController', function ($scope, $location, getData, serviceURL, SortDatas) {

    var userData = JSON.parse(localStorage.getItem('user_data'));

    getData.get(serviceURL.GetAddressUrl, {
        params: {
            userId: userData.id
        }
    }).then(function (data) {
        $scope.id = data.address.id;
        $scope.address = data.address;

    }, function (data, status, headers, config) {
        console.log('error!');
    });

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

    /*创建订单*/
    $scope.createOrder = function () {

        getData.get(serviceURL.CreateOrderUrl, {
            params: {
                userId: userData.id,
                addressId: $scope.id
            }
        }).then(function (data) {
            if (data.status == 0) {
                localStorage.setItem('OrderMsg', JSON.stringify(data));
                alert('订单提交成功!');
                $location.path('/order');
            } else {
                console.log('添加失败!');
            }
        }, function (data, status, headers, config) {
            console.log('error!');
        });
    }


})
;