/*
*
* 登陆成功后跳转页面~
* */

app.controller('LoginController', function ($scope, $http, getData, serviceURL) {


    /*gei  请求*/
    $scope.submit = function () {
        getData.get(serviceURL.LoginUrl, {
            params: {
                phone: $scope.userName,
                password: $scope.userPsw,
            }
        })
            .then(function (data) {
                if (!data.state) {
                    localStorage.setItem('loginState', 1);
                    console.log('登陆成功!');
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
