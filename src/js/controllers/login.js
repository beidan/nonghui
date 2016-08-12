/*
 *
 * 登陆成功后跳转页面~
 * */

app.controller('LoginController', function ($scope, $http, $location, getData, serviceURL) {
    /*get请求*/
    $scope.submit = function () {
        getData.get(serviceURL.LoginUrl, {
            params: {
                phone: $scope.userName,
                password: $scope.userPsw,
            }
        })
            .then(function (data) {
                if (data.state === 0) {
                    localStorage.setItem('loginState', 1);
                    localStorage.setItem('user_data', JSON.stringify(data.user));
                    alert('登陆成功');
                    console.log('login');
                    $location.path('/index');
                } else {
                    console.log(data.errorMsg);
                    alert(data.errorMsg);
                    $scope.userName = '';
                    $scope.userPsw = '';
                }
            }, function (data, status, headers, config) {
                console.log('error!');
            });
    }


    // $scope.submit = function () {
    //     $http({
    //         url: serviceURL.LoginUrl,
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: {
    //             phone: $scope.userName,
    //             password: $scope.userPsw,
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


});
