app.controller('searchController', function ($scope, $location, getData, serviceURL) {

    $scope.searchsth = function(){
        getData.get(serviceURL.FindProductUrl, {
            params: {
                name: $scope.search,
            }
        }).then(function (data) {
            if(data.items.length === 0){
                console.log('对不起,找不到商品信息!');
                alert('对不起,找不到商品信息!');
                $scope.shopMsg = {};

            }else{
                console.log(data);
                $scope.shopMsg = data.items;
            }
            console.log(data);

        }, function (data, status, headers, config) {
            console.log('error!');
        });
    }

});
