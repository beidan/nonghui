app.factory("getData",function(n,e){return{"ಠ_ಠ976":function(r,o){var t=e.defer();return n.ಠ_ಠ976(r,o).ಠ_ಠ979(function(n){t.resolve(n)}).ಠ_ಠ980(function(n){t.reject(n)}),t.promise}}}).factory("postData",function(n,e){return{"ಠ_ಠ977":function(r,o){var t=e.defer();return n.ಠ_ಠ977(r,{languageColumn:"name_eu"},{"Content-Type":"application/x-www-form-urlencoded"},o).ಠ_ಠ979(function(n){t.resolve(n)}).ಠ_ಠ980(function(n){t.reject(n)}),t.promise}}}).factory("Location",function(){function n(n){var e=n.coords.latitude+","+n.coords.longitude,r="http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+e+"&output=json&pois=0";$.ajax({type:"GET",dataType:"jsonp",url:r,"ಠ_ಠ978":function(){console.log("正在定位……")},"ಠ_ಠ979":function(n){0==n.status&&console.log(n.result.formatted_address)},"ಠ_ಠ980":function(n,e,r){console.log("地址位置获取失败!")}})}function e(n){switch(n.code){case n.PERMISSION_DENIED:alert("定位失败,用户拒绝请求地理定位");break;case n.POSITION_UNAVAILABLE:alert("定位失败,位置信息是不可用");break;case n.TIMEOUT:alert("定位失败,请求获取用户位置超时");break;case n.UNKNOWN_ERROR:alert("定位失败,定位系统失效")}}return{"ಠ_ಠ981":function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n,e):console.log("该浏览器不支持获取地理位置。")}}}).factory("serviceURL",function(){var n="http://121.42.190.17:8080/Shop_war/";return serviceUrls={indexUrl:n+"index",DetailUrl:n+"Detail",LoginUrl:n+"login"}}).factory("SortDatas",function(){return SortDatas=[{name:"蔬菜水果",imgsrc:"src/img/index/menu_bg_01.png"},{name:"禽蛋肉类",imgsrc:"src/img/index/menu_bg_06.png"},{name:"水产火锅",imgsrc:"src/img/index/menu_bg_10.png"},{name:"熟食豆制",imgsrc:"src/img/index/menu_bg_14.png"},{name:"米面粮油",imgsrc:"src/img/index/menu_bg_03.png"},{name:"调料干货",imgsrc:"src/img/index/menu_bg_07.png"},{name:"餐厨用品",imgsrc:"src/img/index/menu_bg_11.png"},{name:"常购品",imgsrc:"src/img/index/menu_bg_15.png"}]});