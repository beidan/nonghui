app.factory('getData', function ($http, $q) {
    /*获取后台数据服务*/
    return {
        get: function (url, opts) {
            var deferred = $q.defer();
            $http.get(url, opts)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
    }
}).factory('postData', function ($http, $q) {
    /*前台传数据给后台*/
    return {
        post: function (url, opts) {
            var deferred = $q.defer();
            $http.post(url, opts)
                .success(function (data) {
                    if (data.Result || data.Success) {
                        deferred.resolve(data);
                    } else {
                        deferred.reject(data);
                    }
                }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
}).factory('serviceURL', function () {
    /*服务器接口*/
    return serviceUrls = {
        "indexUrl": 'http://121.42.190.17:8080/Shop_war/index',
        'DetailUrl':'http://121.42.190.17:8080/Shop_war/Detail'
    }
});
