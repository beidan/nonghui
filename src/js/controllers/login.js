app.controller('LoginController', function ($scope, postData, serviceURL) {
    postData.post(serviceURL.LoginUrl, {
        params: {
            phone: '18814127384',
            password:'eeee',
        },
    }).then(function (data) {
        console.log(data);
    }, function (data, status, headers, config) {
        console.log('error!');
    });

    // $scope.imgs = [
    //     {imagesrc: 'src/img/detail/1.jpg'},
    //     {imagesrc: 'src/img/detail/3.jpg'},
    //     {imagesrc: 'src/img/detail/4.jpg'},
    // ];
    // $scope.len = function () {
    //     return $scope.comment.length;
    // }
});
