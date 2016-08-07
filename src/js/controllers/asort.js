app.controller('AsortController',function($scope,SortDatas){

    $scope.navList = SortDatas;


    $scope.list1 = [
        {imgsrc: "src/img/index/slide001.jpg"},
        {imgsrc: "src/img/index/slide001.jpg"},
        {imgsrc: "src/img/index/slide001.jpg"},
        {imgsrc: "src/img/index/slide001.jpg"},
    ];
    $scope.list2 = [
        {imgsrc: "src/img/index/slide002.jpg"},
        {imgsrc: "src/img/index/slide002.jpg"},
        {imgsrc: "src/img/index/slide002.jpg"},
        {imgsrc: "src/img/index/slide002.jpg"},
    ];

});
