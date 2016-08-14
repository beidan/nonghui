app.controller('addressController', function ($scope, $location, getData, serviceURL, SortDatas) {
    $scope.city = 'ee';

    $scope.Zipcode = 5152777;
    $scope.phone = '18814127382';
    $scope.nickname = '伟杰';
    $scope.Detailaddr = '汕头市朝阳区' ;

    $scope.save = function ($event) {
        var isEdit = $event.target.getAttribute('value');

        if (isEdit === '修改地址') {
            $event.target.setAttribute("value", '保存');
            unEdit(0);
        } else if (isEdit === '保存') {
            $event.target.setAttribute("value", '修改地址');
            unEdit(1);
        }

        function unEdit(type) {
            var target = document.getElementById('address').getElementsByTagName('input');
                // console.log(JSON.stringify(target).pop());

            if (type == 0) {
                for (var i = 0; i < target.length; i++) {
                    target[i].removeAttribute('readonly');
                }
            } else {
                for (var i = 0; i < target.length; i++) {
                    target[i].setAttribute('readonly', 'true');
                }
            }
        }
    }
})
;