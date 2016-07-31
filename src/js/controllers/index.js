/*
 * 首页  尚未实现功能:
 * 1.分页,一页显示几条数据?
 * 2.服务器处理时出错  返回信息
 * 3.当数据为空时,前端要显示提示信息。
 * */

app.controller('IndexController', function ($scope, getData, serviceURL) {
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
        })
            .then(function (data) {
                $scope.cateData = data.items;
            }, function (data, status, headers, config) {
                console.log('error!');
            });
    }

    $scope.model = {};
    $scope.model.content = 1;


    var cartNum;
    /*添加到购物车功能    暂未实现*/
    $scope.addToCart = function () {
        $scope.model.content = $scope.model.content + 1;
        console.log($scope.model.content);

    }


    $scope.swiperImg = [
        {imgsrc: 'src/img/index/slide001.jpg'},
        {imgsrc: 'src/img/index/slide002.jpg'},
    ];
    $scope.navList = [
        {name: '蔬菜水果', imgsrc: "src/img/index/menu_bg_01.png"},
        {name: '禽蛋肉类', imgsrc: "src/img/index/menu_bg_06.png"},
        {name: '水产火锅', imgsrc: "src/img/index/menu_bg_10.png"},
        {name: '熟食豆制', imgsrc: "src/img/index/menu_bg_14.png"},
        {name: '米面粮油', imgsrc: "src/img/index/menu_bg_03.png"},
        {name: '调料干货', imgsrc: "src/img/index/menu_bg_07.png"},
        {name: '餐厨用品', imgsrc: "src/img/index/menu_bg_11.png"},
        {name: '常购品', imgsrc: "src/img/index/menu_bg_15.png"},
    ];
    // $scope.sale = [
    //     {title: "新鲜生菜两斤装特惠", price: 3.90, origPrice: 5.90, imgsrc: 'src/img/index/goods001.jpg'},
    //     {title: "红萝卜3斤装", price: 8.90, origPrice: 12.90, imgsrc: 'src/img/index/goods002.jpg'},
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods003.jpg'},
    // ];
    // $scope.hot = [
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods004.jpg'},
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods005.jpg'},
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods006.jpg'},
    // ];
    // $scope.new = [
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods007.jpg'},
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods008.jpg'},
    //     {title: "西红柿5斤装", price: 6.90, origPrice: 9.90, imgsrc: 'src/img/index/goods009.jpg'},
    // ];

})
;
