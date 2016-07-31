app.controller('registerController', function ($scope, $http, postData, serviceURL) {

    $scope.submit = function () {
        $http({
            url: serviceURL.LoginUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                'phone': $scope.userName,
                'password': $scope.userPwd,
                'phone': $scope.userPhone,
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
