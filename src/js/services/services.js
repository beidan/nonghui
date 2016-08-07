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
                {languageColumn: 'name_eu'},
                {'Content-Type': 'application/x-www-form-urlencoded'},
                options).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
}).factory('Location', function () {

    function showPosition(position) {
        var latlon = position.coords.latitude + ',' + position.coords.longitude;
        var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=" + latlon + "&output=json&pois=0";

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: url,
            beforeSend: function () {
                console.log('正在定位……');
            },
            success: function (json) {
                if (json.status == 0) {
                    console.log(json.result.formatted_address);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('地址位置获取失败!');
            }
        });
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("定位失败,位置信息是不可用");
                break;
            case error.TIMEOUT:
                alert("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                alert("定位失败,定位系统失效");
                break;
        }
    }

    return {
        getLocation: function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            }
            else {
                console.log("该浏览器不支持获取地理位置。");
            }
        }
    }


}).factory('serviceURL', function () {
    var service = 'http://121.42.190.17:8080/Shop_war/',
        local = 'http://172.16.31.19:8080/Shop/';

    /*服务器接口*/
    return serviceUrls = {
        "indexUrl": service + 'index',
        'DetailUrl': service + 'Detail',
        'LoginUrl': service + 'login',
    }
    /*本地接口*/
    // return localUrls = {
    //     "indexUrl": local + 'index',
    //     'DetailUrl': local + 'Detail',
    //     'LoginUrl': local + 'login',
    //     'RegisterUrl': local + 'register',
    //
    // }

}).factory('SortDatas', function () {

    return SortDatas = [
        {name: '蔬菜水果', imgsrc: "src/img/index/menu_bg_01.png"},
        {name: '禽蛋肉类', imgsrc: "src/img/index/menu_bg_06.png"},
        {name: '水产火锅', imgsrc: "src/img/index/menu_bg_10.png"},
        {name: '熟食豆制', imgsrc: "src/img/index/menu_bg_14.png"},
        {name: '米面粮油', imgsrc: "src/img/index/menu_bg_03.png"},
        {name: '调料干货', imgsrc: "src/img/index/menu_bg_07.png"},
        {name: '餐厨用品', imgsrc: "src/img/index/menu_bg_11.png"},
        {name: '常购品', imgsrc: "src/img/index/menu_bg_15.png"},
    ]
});
