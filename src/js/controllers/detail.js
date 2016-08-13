/*
 * 商品详情页面
 *
 * 1.商品评价接口?  [不做]
 * 2.样式需要调整
 * 3.img轮播没显示出来
 *
 * */

// $(function () {
//     // var mySwiper = new Swiper('.swiper-container', {
//     //     autoplay: 5000,//可选选项，自动滑动
//     // })
//
//         var mySwiper = new Swiper ('.swiper-container', {
//             direction: 'vertical',//水平还是垂直方向
//             loop: true,//循环
// // 如果需要分页器
//             pagination: '.swiper-pagination',
// // 如果需要前进后退按钮
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev',
// // 如果需要滚动条
//             scrollbar: '.swiper-scrollbar',
//         })
//         // $(".swiper-container").swiper({
//         //     autoplay : 3000,
//         //     speed:300,
//         //     draggable : false,
//         // });
//
//     $(".swiper-container").swiper({
//         direction: 'vertical',//水平还是垂直方向
//         loop: true,//循环
// // 如果需要分页器
//         pagination: '.swiper-pagination',
// // 如果需要前进后退按钮
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
// // 如果需要滚动条
//         scrollbar: '.swiper-scrollbar',
//     });
// });

app.controller('DetailController', function ($scope, $location, getData, serviceURL) {

    getData.get(serviceURL.DetailUrl, {
        params: {
            id: $location.search().id
        },
    }).then(function (data) {
        $scope.detail = data.product;
        $scope.imgs = data.imageUrl;
        $scope.comment = data.comments;
        $scope.len = function () {
            return $scope.comment.length;
        }
        $(".swiper-container").swiper({
            loop: true,
            pagination: '.swiper-pagination',
        });
    }, function (data, status, headers, config) {
        console.log('error!');
    });


    $scope.AddNum = function (index) {
        $scope.detail.num++;
    }
    $scope.SubNum = function (index) {
        if ($scope.detail.num > 1) {
            $scope.detail.num--;
        }
    }


    $scope.addToCart = function () {
        console.log('add');
    }

    $scope.BuyNow = function () {
        console.log('buy now');
    }

});
