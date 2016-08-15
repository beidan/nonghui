app.controller('registerController', function ($scope, $http, $location, getData, serviceURL) {

    // $scope.submit = function () {
    //     $http({
    //         url: serviceURL.LoginUrl,
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: {
    //             'phone': $scope.userName,
    //             'password': $scope.userPwd,
    //             'phone': $scope.userPhone,
    //         }
    //     }).success(function (data) {
    //         if (!data.state) {
    //             alert(data.errorMsg);
    //         } else {
    //             alert('success');
    //         }
    //         console.log(data);
    //     }).error(function (data) {
    //         console.log('服务器错误!');
    //     });
    // }

    $scope.submit = function () {
        /*通过验证*/
        if ($scope.RegisterForm.$valid && $scope.RegisterForm.$dirty) {
            getData.get(serviceURL.RegisterUrl, {
                params: {
                    phone: $scope.user.phone,
                    Email: $scope.user.email,
                    sex: $scope.user.sex,
                    password: $scope.user.pwd,
                    nickname: $scope.user.nickname,
                }
            }).then(function (data) {
                if (data.status == 0) {
                    alert(data.hint);
                    $location.path('/login');
                } else {
                    $scope.user = '';
                    alert(data.hint);
                }
            }, function () {
                console.log('error!');
            });
            alert("通过验证");
        } else {
            alert("未通过验证");
        }
    };


});
