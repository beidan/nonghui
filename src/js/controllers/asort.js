app.controller('AsortController', function ($scope, $location, SortDatas, getData, serviceURL) {

    $scope.navList = SortDatas;

    getData.get(serviceURL.CateUrl, {
        params: {
            cate: $location.search().cate,
        }
    }).then(function (data) {
        $scope.list = data.items;


    }, function (data, status, headers, config) {
        console.log('error!');
    });

});
