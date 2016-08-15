app.controller('orderController', function ($scope, $http, $location, getData, serviceURL) {
    var userData = JSON.parse(localStorage.getItem('user_data'));
    /*订单列表*/
    getData.get(serviceURL.ListOrdersUrl, {
        params: {
            userId: userData.id,
        }
    }).then(function (data) {
        $scope.OrderData = data.orderses;
    }, function () {
        console.log('error!');
    });

    /*修改订单*/
    // $scope.createOrder = function () {
    //     getData.get(serviceURL.UpdateStatusUrl, {
    //         params: {
    //             userId: userData.id,
    //             orderId: '222',
    //             status: '1'
    //         }
    //     }).then(function (data) {
    //
    //     }, function (data, status, headers, config) {
    //         console.log('error!');
    //     });
    // }
    /*删除订单*/
    $scope.deleteOrder = function (id) {
        getData.get(serviceURL.DeleteOrdersUrl, {
            params: {
                userId: userData.id,
                ordersId: id
            }
        }).then(function (data) {

            console.log(data);

        }, function () {
            console.log('error!');
        });
    }

    $scope.formatStatus = function (status) {
        switch (status) {
            case 0:
                return '待付款';
                break;
            case 1:
                return '待发货';
                break;
            case 2:
                return '待收货';
                break;
            case 3:
                return '已完成';
                break;
            case 4:
                return '已取消';
                break;
            default:
                break;
        }
    }
    $scope.isPayShow = function (status) {
        if (status == 0) {
            return false;
        } else {
            return true;
        }
    }
    $scope.isDelShow = function (status) {

        return false;
    }
})
;

