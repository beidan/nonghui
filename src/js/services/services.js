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

    return {
        post: function (url, options) {
            var deferred = $q.defer();
            $http.post(url,
                {languageColumn:'name_eu'},
                {'Content-Type':'application/x-www-form-urlencoded'},
                options).success(function (data) {
               deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
}).factory('serviceURL', function () {
    /*服务器地址  121.42.190.17
     *本地地址   172.16.31.19
     * */

    /*服务器接口*/
    return serviceUrls = {
        "indexUrl": 'http://121.42.190.17:8080/Shop_war/index',
        'DetailUrl': 'http://121.42.190.17:8080/Shop_war/Detail',
        'LoginUrl': 'http://172.16.31.19:8080/Shop/login',
    }
    // return localServices={
    //     'loginUrl':'http://172.16.31.19:8080/Shop/login',
    //
    // }
});
