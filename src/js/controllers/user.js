app.controller('userController', function ($scope, $location, serviceURL, getData, isLogin) {
    isLogin.isLogin();
    var userData = JSON.parse(localStorage.getItem('user_data'));

    /*获取数据渲染页面*/
    if (userData) {
        $scope.imgsrc = userData.img || './src/img/user/tx.jpg';
        $scope.nickname = userData.nickname;
    }

    $scope.logout = function () {
        getData.get(serviceURL.LogoutUrl, {}).then(function (data) {
            console.log(data);
            localStorage.setItem('loginState', 0);

            console.log(localStorage.getItem('loginState'));
            alert('注销成功!');
            $location.path('/index');

        }, function () {
            console.log('error!');
        })
    }

});
