app.controller('cityPickController', function ($scope, $location, $rootScope) {
    //选择城市
    $('body').on('click', '.city-list p', function () {
        var cityValue = $(this).html(),
            dataId = $(this).attr('data-id');

        localStorage.setItem('city', cityValue);
        $scope.goPath();
    });

    /*滚动到相应位置*/
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        $(window).scrollTop($('#' + s + '1').offset().top);
    });
    /*返回上一页*/
    $scope.goPath = function () {
        history.back(-1);
    }
})
;