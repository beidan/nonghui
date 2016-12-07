var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'src/tmp/index.html',
            controller: 'IndexController'
        })
        .when('/login', {
            templateUrl: 'src/tmp/login.html',
            controller: 'LoginController'
        })
        .when('/register', {templateUrl: 'src/tmp/register.html'})
        .when('/cart', {
            templateUrl: 'src/tmp/cart.html',
            controller: 'CartController'
        })
        .when('/detail', {
            templateUrl: 'src/tmp/detail.html',
            controller: 'DetailController'
        })
        .when('/userMsg', {
            templateUrl: 'src/tmp/userMsg.html',
            controller: 'LoginController'
        })
        .when('/cityPick', {
            templateUrl: 'src/tmp/citypick.html',
            controller: 'cityPickController'
        })
        .when('/search', {
            templateUrl: 'src/tmp/search.html',
            controller: 'searchController',
        })
        .when('/order', {
            templateUrl: 'src/tmp/order.html',
            controller: 'orderController'
        })
        .when('/asort', {templateUrl: 'src/tmp/asort.html'})
        .when('/confirm_order', {
            templateUrl: 'src/tmp/confirm_order.html',
            controller: 'confirmOrderController'
        })
        .when('/address', {templateUrl: 'src/tmp/address.html'})
        .when('/user', {templateUrl: 'src/tmp/user.html'})
        .otherwise({
            redirectTo: '/index'
        });
}]);
app.controller('addressController', function ($scope, $location, getData, serviceURL, SortDatas) {
    var userData = JSON.parse(localStorage.getItem('user_data'));

    getData.get(serviceURL.GetAddressUrl, {
        params: {
            userId: userData.id
        }
    }).then(function (data) {
        if(data.address == null){
            document.getElementById('edit').setAttribute("value", '新增地址');
        }else{
            document.getElementById('edit').setAttribute("value", '修改地址');
        }
        console.log(data);
        $scope.adr = data.address;

    }, function (data, status, headers, config) {
        console.log('error!');
    });



    $scope.save = function ($event) {
        var isEdit = $event.target.getAttribute('value');

        if (isEdit === '修改地址' || isEdit === '新增地址') {
            $event.target.setAttribute("value", '保存');
            unEdit(0);
        } else if (isEdit === '保存') {
            $event.target.setAttribute("value", '修改地址');

            getData.get(serviceURL.UpdateAddressUrl, {
                params: {
                    username: $scope.adr.username,
                    userphone: $scope.adr.userphone,
                    details: $scope.adr.details,
                    code: $scope.adr.code,
                    area: $scope.adr.area || '花都区梯面镇',
                    userId: userData.id,
                    flag :1
                }
            }).then(function (data) {
                if (data.status == 0) {
                    alert(data.hint);
                    unEdit(1);
                } else {
                    alert(data.hint);
                    unEdit(0);
                }
            }, function (data, status, headers, config) {
                console.log('error!');
            });

        }

        function unEdit(type) {
            var target = document.getElementById('address').getElementsByTagName('input');
            var textarea = document.getElementById('detailaddr');

            if (type == 0) {
                for (var i = 0; i < target.length; i++) {
                    target[i].removeAttribute('readonly');
                }
                textarea.removeAttribute('readonly');
            } else {
                for (var i = 0; i < target.length; i++) {
                    target[i].setAttribute('readonly', 'true');
                }
                textarea.setAttribute('readonly', 'true');
            }
        }
    }
})
;
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

app.controller('CartController', function ($scope, $location,isLogin, getData, serviceURL) {
    /*判断是否登录*/
    var sta = isLogin.isLogin();
    if (sta.state == 0) {
        $location.path('/login');
    }

    // /*获取购物车数据*/
    if(sta.state == 1){
        getData.get(serviceURL.MyCartUrl, {
            params: {
                userId: sta.userId,
            }
        }).then(function (data) {
            $scope.items = data.orderProducts;
            //计算总价格
            $scope.totalPrice = function () {
                var total = 0, i,
                    len = $scope.items.length;
                for (i = 0; i < len; i++) {
                    total += $scope.items[i].productPrices * $scope.items[i].count;
                }
                return total;
            };
        }, function () {
            console.log('error!');
        });
    }

    $scope.toggle = function ($event) {
        var sign = $event.target.innerHTML;
        if (sign === '编辑') {
            $event.target.innerHTML = '完成';
            $scope.editShow = true;
        } else {
            $event.target.innerHTML = '编辑';
            $scope.editShow = false;
        }
    }

    $scope.remove = function (index) {
        getData.get(serviceURL.RemoveGoodUrl, {
            params: {
                id: $scope.items[index].id,
            }
        }).then(function (data) {
            $scope.items.splice(index, 1);
            localStorage.setItem('cartCount', data.cartCount);
        }, function () {
            console.log('error!');
        });
    }

    $scope.AddNum = function (index) {
        getData.get(serviceURL.AddCountUrl, {
            params: {
                id: $scope.items[index].id,
            }
        }).then(function (data) {
            if (data.status == 0) {
                $scope.items[index].count++;
                localStorage.setItem('cartCount', data.cartCount);
            } else {
                console.log('添加数量失败!');
                alert('添加数量失败');
            }
        }, function () {
            console.log('error!');
        });

    }
    $scope.SubNum = function (index) {
        if ($scope.items[index].count > 1) {
            getData.get(serviceURL.SubCountUrl, {
                params: {
                    id: $scope.items[index].id,
                }
            }).then(function (data) {
                $scope.items[index].count--;
                localStorage.setItem('cartCount', data.cartCount);
            }, function () {
                console.log('error!');
            });
        } else if ($scope.items[index].count === 1) {
            alert('数量不能为0');
            console.log('数量不能为0');
        }

    }
});

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
app.controller('confirmOrderController', function ($scope, $location, getData, serviceURL, SortDatas) {

    var userData = JSON.parse(localStorage.getItem('user_data'));

    getData.get(serviceURL.GetAddressUrl, {
        params: {
            userId: userData.id
        }
    }).then(function (data) {
        $scope.id = data.address.id;
        $scope.address = data.address;

    }, function (data, status, headers, config) {
        console.log('error!');
    });

    getData.get(serviceURL.MyCartUrl, {
        params: {
            userId: userData.id,
        }
    }).then(function (data) {
        $scope.items = data.orderProducts;
        //计算总价格
        $scope.totalPrice = function () {
            var total = 0, i,
                len = $scope.items.length;
            for (i = 0; i < len; i++) {
                total += $scope.items[i].productPrices * $scope.items[i].count;
            }
            return total;
        };
    }, function () {
        console.log('error!');
    });

    /*创建订单*/
    $scope.createOrder = function () {

        getData.get(serviceURL.CreateOrderUrl, {
            params: {
                userId: userData.id,
                addressId: $scope.id
            }
        }).then(function (data) {
            if (data.status == 0) {
                localStorage.setItem('OrderMsg', JSON.stringify(data));
                alert('订单提交成功!');
                $location.path('/order');
            } else {
                console.log('添加失败!');
            }
        }, function (data, status, headers, config) {
            console.log('error!');
        });
    }


})
;
/*
 * 商品详情页面
 *
 * 1.商品评价接口?  [不做]
 * 2.样式需要调整
 * 3.img轮播没显示出来
 *
 * */

app.controller('DetailController', function ($scope, $location, getData, serviceURL,isLogin) {
    /*判断是否登录*/
    var sta = isLogin.isLogin();

    if (sta.state == 0) {
        $scope.content = 0;
    }
    else {
        $scope.content = sta.content;
    }

    getData.get(serviceURL.DetailUrl, {
        params: {
            id: $location.search().id
        },
    }).then(function (data) {
        $scope.detail = data.product;
        Silder(data.imageUrl);
        $scope.comment = data.comments;
        $scope.len = function () {
            return $scope.comment.length;
        }

    }, function (data, status, headers, config) {
        console.log('error!');
    });


    function Silder(list) {
        new Slider({
            'dom': document.getElementById('canvas'),
            'list': list
        });
    }

    $scope.count = 1;
    $scope.AddNum = function (index) {
        $scope.count++;
    }
    $scope.SubNum = function (index) {
        if ($scope.count > 1) {
            $scope.count--;
        }
    }

    var userData = JSON.parse(localStorage.getItem('user_data'));
    $scope.addToCart = function () {
        if (userData !== null) {
            getData.get(serviceURL.BuyGoodUrl, {
                params: {
                    userId: userData.id,
                    id: $location.search().id,
                    count: $scope.count,
                }
            }).then(function (data) {
                if (data.status == 0) {
                    $scope.cartCount = data.cartCount;
                    localStorage.setItem('cartCount', data.cartCount);
                    console.log('加入购物车成功!');
                } else {
                    console.log('添加失败!');
                    alert('添加失败');
                }
            }, function (data, status, headers, config) {
                console.log('error!');
            });
        } else {
            console.log('对不起,请先登录!');
        }
        console.log('add');
    }


});

/*
 * 首页  尚未实现功能:
 * 1.分页,一页显示几条数据?
 *
 * 3.当数据为空时,前端要显示提示信息。
 * */
app.controller('IndexController', function ($scope, $location, $http, getData, serviceURL, SortDatas, isLogin) {
    /*判断是否登录*/
    var sta = isLogin.isLogin();

    if (sta.state == 0) {
        $scope.content = 0;
    }
    else {
        $scope.content = sta.content;
    }

    /*添加到购物车,初始化购物车数量*/
    $scope.addToCart = function ($event) {
        var shopId = $event.target.parentNode.getAttribute('value');
        if (sta.state == 1) {
            getData.get(serviceURL.BuyGoodUrl, {
                params: {
                    userId: sta.userId,
                    id: shopId,
                    count: 1,
                }
            }).then(function (data) {
                if (data.status == 0) {
                    $scope.content = $scope.content + 1;
                    localStorage.setItem('cartCount', $scope.content);
                } else {
                    console.log('添加失败!');
                    alert('添加失败');
                }
            }, function (data, status, headers, config) {
                console.log('error!');
            });
        } else {
            console.log('对不起,请先登录!');
        }
    }

    /*初始化页面加载热销*/
    change('hot');
    /*商品详情的基础url*/
    $scope.baseUrl = serviceURL.DetailUrl;

    /*根据不同内容获取数据*/
    $scope.toggleList = function ($event) {
        if ($event.target.innerHTML === '热销') {
            change('hot');
        } else if ($event.target.innerHTML === '新品') {
            change('new');
        } else {
            change('sale');
        }
    }

    function change(cate) {
        getData.get(serviceURL.indexUrl, {
            params: {
                cate: cate,
            }
        }).then(function (data) {
            $scope.cateData = data.items;
        }, function (data, status, headers, config) {
            console.log('error!');
        });
    }

    function Silder(list) {
        new Slider({
            'dom': document.getElementById('canvas'),
            'list': list
        });
    }

    /*主页轮播*/
    getData.get(serviceURL.IndexSwiperUrl, {})
        .then(function (data) {
            Silder(data.imageUrl);
        }, function () {
            console.log('error!');
        });

    /*分类*/
    $scope.navList = SortDatas;

    /*定位功能*/
    // var city = localStorage.getItem('city');
    // $scope.city = city;
    // Location.getLocation();

})
;

/*
 *
 * 登陆成功后跳转页面~
 * */

app.controller('LoginController', function ($scope, $http, $location, getData, serviceURL) {
    /*get请求*/
    $scope.submit = function () {
        getData.get(serviceURL.LoginUrl, {
            params: {
                phone: $scope.user.name,
                password: $scope.user.psw
            }
        }).then(function (data) {
            if (data.state === 0) {
                localStorage.setItem('loginState', 1);
                localStorage.setItem('user_data', JSON.stringify(data.user));
                localStorage.setItem('cartCount', JSON.stringify(data.cartCount));
                alert('登陆成功');
                console.log('login');
                $location.path('/index');
            } else {
                console.log(data.errorMsg);
                alert(data.errorMsg);
                $scope.user = '';
            }
        }, function (data, status, headers, config) {
            console.log('error!');
        });
    }


    // $scope.submit = function () {
    //     $http({
    //         url: serviceURL.LoginUrl,
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: {
    //             phone: $scope.userName,
    //             password: $scope.userPsw,
    //         }
    //     }).success(function (data) {
    //         if (!data.state) {
    //             alert(data.errorMsg);
    //         } else {
    //             alert('success');
    //         }
    //         console.log(data);
    //     }).error(function (data) {
    //         console.log('服务器错误!');
    //     });
    // }


});

app.controller('orderController', function ($scope, $http, $location, getData, serviceURL) {
    var userData = JSON.parse(localStorage.getItem('user_data'));
    /*订单列表*/
    getData.get(serviceURL.ListOrdersUrl, {
        params: {
            userId: userData.id,
        }
    }).then(function (data) {
        $scope.OrderData = data.orderses;
    }, function () {
        console.log('error!');
    });

    /*修改订单*/
    // $scope.createOrder = function () {
    //     getData.get(serviceURL.UpdateStatusUrl, {
    //         params: {
    //             userId: userData.id,
    //             orderId: '222',
    //             status: '1'
    //         }
    //     }).then(function (data) {
    //
    //     }, function (data, status, headers, config) {
    //         console.log('error!');
    //     });
    // }
    /*删除订单*/
    $scope.deleteOrder = function (id) {
        getData.get(serviceURL.DeleteOrdersUrl, {
            params: {
                userId: userData.id,
                ordersId: id
            }
        }).then(function (data) {

            console.log(data);

        }, function () {
            console.log('error!');
        });
    }

    $scope.formatStatus = function (status) {
        switch (status) {
            case 0:
                return '待付款';
                break;
            case 1:
                return '待发货';
                break;
            case 2:
                return '待收货';
                break;
            case 3:
                return '已完成';
                break;
            case 4:
                return '已取消';
                break;
            default:
                break;
        }
    }
    $scope.isPayShow = function (status) {
        if (status == 0) {
            return false;
        } else {
            return true;
        }
    }
    $scope.isDelShow = function (status) {

        return false;
    }
})
;


app.controller('registerController', function ($scope, $http, $location, getData, serviceURL) {

    // $scope.submit = function () {
    //     $http({
    //         url: serviceURL.LoginUrl,
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: {
    //             'phone': $scope.userName,
    //             'password': $scope.userPwd,
    //             'phone': $scope.userPhone,
    //         }
    //     }).success(function (data) {
    //         if (!data.state) {
    //             alert(data.errorMsg);
    //         } else {
    //             alert('success');
    //         }
    //         console.log(data);
    //     }).error(function (data) {
    //         console.log('服务器错误!');
    //     });
    // }

    $scope.submit = function () {
        /*通过验证*/
        if ($scope.RegisterForm.$valid && $scope.RegisterForm.$dirty) {
            getData.get(serviceURL.RegisterUrl, {
                params: {
                    phone: $scope.user.phone,
                    Email: $scope.user.email,
                    sex: $scope.user.sex,
                    password: $scope.user.pwd,
                    nickname: $scope.user.nickname,
                }
            }).then(function (data) {
                if (data.status == 0) {
                    alert(data.hint);
                    $location.path('/login');
                } else {
                    $scope.user = '';
                    alert(data.hint);
                }
            }, function () {
                console.log('error!');
            });
            alert("通过验证");
        } else {
            alert("未通过验证");
        }
    };


});

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

app.controller('userController', function ($scope, $location, serviceURL, getData, isLogin) {
    /*判断是否登录*/
    var sta = isLogin.isLogin();

    if (sta.state == 0) {
        $location.path('/login');
    }

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


app.directive("headNav", function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<header><a href="#/cityPick" class="fl ellipsis" style="width: 50px;">{{::city}} <span class="fa fa-map-marker"></span></a><span class="title">生鲜</span><a href="#/search" class="fr"><i class="fa fa-search" aria-hidden="true">' +
        '</i></a></header>',
    };
});



app.directive("footNav", function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<footer><a href="#/"><p class="fa fa-home icon" aria-hidden="true"></p></i><p>首页</p></a><a href="#/asort?cate=fruits"><p class="fa fa-bars icon" aria-hidden="true"></p><p>分类</p></a>'+
        '<a href="#/cart"><p class="fa fa-shopping-cart icon" aria-hidden="true"></p><p>购物车</p></a><a href="#/user"><p class="fa fa-user icon" aria-hidden="true"></p><p>我的</p></a></footer>'
    };
});




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
            error: function () {
                console.log('地址位置获取失败!');
            }
        });
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("定位失败,位置信息是不可用");
                break;
            case error.TIMEOUT:
                console.log("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                console.log("定位失败,定位系统失效");
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


}).factory('isLogin', function ($location) {
    /*判断是否登录,
    * 已登录--  处理购物车数量   state=1
    * 未登录--  跳转页面  state=0
    * */
    return {
        isLogin: function () {
            var cartCount = localStorage.getItem('cartCount');
            var isLogin = localStorage.getItem('loginState') || 0;
            var userData = JSON.parse(localStorage.getItem('user_data'));

            /*未登录*/
            if (isLogin == 0 && userData == null) {
                return {
                    state: '0',
                    content: 0,
                };
            }
            else {
                return {
                    state: '1',
                    content: parseInt(cartCount),
                    userId: userData.id
                };
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
        'RegisterUrl': service + 'register',
        'LogoutUrl': service + 'logOut',
        'BuyGoodUrl': service + 'buyGood',
        'MyCartUrl': service + 'myCart',
        'IndexSwiperUrl': service + 'getImage',
        'RemoveGoodUrl': service + 'removeGood',
        'AddCountUrl': service + 'addCount',
        'SubCountUrl': service + 'subCount',
        'CateUrl': service + 'Cate',
        'FindProductUrl': service + 'findProduct',
        'GetAddressUrl': service + 'getAddress',
        'AddAddressUrl': service + 'addAddress',
        'UpdateAddressUrl': service + 'updateAddress',
        'CreateOrderUrl': service + 'CreateOrders',
        'ListOrdersUrl': service + 'listOrders',
        'UpdateStatusUrl': service + 'updateStatus',
        'DeleteOrdersUrl': service + 'deleteOrders'
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
        {name: '水果', imgsrc: "src/img/index/menu_bg_01.png", value: 'fruits'},
        {name: '种子', imgsrc: "src/img/index/menu_bg_14.png", value: 'seed'},
        {name: '肥料', imgsrc: "src/img/index/menu_bg_07.png", value: 'fertilizer'},
        {name: '蔬菜', imgsrc: "src/img/index/menu_bg_15.png", value: 'vegetables'},
    ]
});
// {name: '餐厨用品', imgsrc: "src/img/index/menu_bg_11.png"},
// {name: '米面粮油', imgsrc: "src/img/index/menu_bg_03.png"},
// {name: '水产火锅', imgsrc: "src/img/index/menu_bg_10.png"},
// {name: '禽蛋肉类', imgsrc: "src/img/index/menu_bg_06.png"},
