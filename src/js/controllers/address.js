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