app.controller('confirmOrderController', function ($scope, $location, getData, serviceURL, SortDatas) {

    var userData = JSON.parse(localStorage.getItem('user_data'));


    // getData.get(serviceURL.CreateOrderUrl, {
    //     params: {
    //         userId: userData.id,
    //         addressId: 1,
    //     }
    // }).then(function (data) {
    //     console.log(data);
    //     // if (data.status == 0) {
    //     //     $scope.content = $scope.content + 1;
    //     //     localStorage.setItem('cartCount', $scope.content);
    //     // } else {
    //     //     console.log('添加失败!');
    //     //     alert('添加失败');
    //     // }
    // }, function (data, status, headers, config) {
    //     console.log('error!');
    // });

    $scope.address = {
        name: 'DeathGhost',
        phone :'1830927**73',
        detailAddr :'陕西省西安市雁塔区某某大厦',
    };
    $scope.TotalPrice = 900;
})
;