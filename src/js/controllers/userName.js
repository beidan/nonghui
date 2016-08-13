/**
 * Created by peidan on 16/8/12.
 */
app.controller('userNameController', function ($scope, getData) {

    var userData = JSON.parse(localStorage.getItem('user_data'));

    /*获取数据渲染页面*/
    if (userData) {
        $scope.imgsrc = userData.img;
        $scope.nickname = userData.nickname;
        $scope.password = userData.password;
        $scope.sex = userData.sex;
        $scope.phone = userData.phone;
        $scope.email = userData.email;
        // $scope.birthday = userData.birthday || '空';
    }


    $scope.save = function () {
        console.log('ee');
    }
});
