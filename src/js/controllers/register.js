app.controller('registerController', function ($scope, $http,$location, getData, serviceURL) {

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

        getData.get(serviceURL.RegisterUrl, {
            params: {
                phone : $scope.userPhone,
                Email:$scope.userEmail,
                sex:$scope.userSex,
                password:$scope.userPwd,
                nickname:$scope.userNickname,
            }
        })
            .then(function (data) {
                if(data.state == 0){
                    /*成功添加用户*/
                    alert(data.hint);
                    $location.path('/login');
                }else{
                    alert(data.hint);
                }
            }, function (data, status, headers, config) {
                console.log('error!');
            });
    }
});
