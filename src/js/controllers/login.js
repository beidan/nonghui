app.controller('LoginController', function ($scope, $http, getData, serviceURL) {
    // $scope.submit = function () {
    //
    //     getData.get(serviceURL.LoginUrl, {
    //         params: {
    //             phone: $scope.userName,
    //             password: $scope.userPsw,
    //         }
    //     }).then(function (data) {
    //             if (!data.state) {
    //                 alert(data.errorMsg);
    //             } else {
    //                 alert('success');
    //             }
    //             console.log(data);
    //         }, function (data, status, headers, config) {
    //             console.log('服务器错误!');
    //         });
    // }


    $scope.submit = function () {
        $http({
            url: serviceURL.LoginUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                phone: $scope.userName,
                password: $scope.userPsw,
            }
        }).success(function (data) {
            if (!data.state) {
                alert(data.errorMsg);
            } else {
                alert('success');
            }
            console.log(data);
        }).error(function (data) {
            console.log('服务器错误!');
        });
    }


});
