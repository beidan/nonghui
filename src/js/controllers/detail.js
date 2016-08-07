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

        $(".swiper-container").swiper({
            loop: true,
            pagination: '.swiper-pagination',
        });
    }, function (data, status, headers, config) {
        console.log('error!');
    });



    // $scope.imgs = [
    //     {imagesrc: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg"'},
    //     {imagesrc: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg"'},
    //     {imagesrc: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg"'},
    // ];
    // $scope.detail = {
    //     title: '纯正天然健康果蔬系列之有机菠菜',
    //     price: '¥136',
    //     prePrice: '¥389',
    //     num: '5',
    //     weight: '750g',
    //     introduce: '菠菜又名波斯菜、赤根菜、鹦鹉菜等，属苋科藜亚科菠菜属，一年生草本植物。植物高可达1米，根圆锥状，带红色，较少为白色，叶戟形至卵形，鲜绿色,少数牙齿状裂片。'
    // };
    // $scope.comment = [
    //     {
    //         owner: '138****3456',
    //         content: '还不错评论文字还不错评论文字还不错评文字还不错评论文字还不错',
    //         data: '2015-09-13 14:35'
    //     }, {
    //         owner: '158****3556',
    //         content: '还不错评论文字还不错评论文字还不错评文字还不错评论文字还不错',
    //         data: '2015-08-13 12:35'
    //     }, {
    //         owner: '139****3436',
    //         content: '还不错评论文字还不错评论文字还不错评文字还不错评论文字还不错',
    //         data: '2015-09-14 16:35'
    //     }
    // ];
    $scope.len = function () {
        return $scope.comment.length;
    }
});
