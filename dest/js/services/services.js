app.factory("getData",function(e,n){return{"ಠ_ಠ1046":function(o,r){var t=n.defer();return e.ಠ_ಠ1046(o,r).ಠ_ಠ1049(function(e){t.resolve(e)}).ಠ_ಠ1050(function(e){t.reject(e)}),t.promise}}}).factory("postData",function(e,n){return{"ಠ_ಠ1047":function(o,r){var t=n.defer();return e.ಠ_ಠ1047(o,{languageColumn:"name_eu"},{"Content-Type":"application/x-www-form-urlencoded"},r).ಠ_ಠ1049(function(e){t.resolve(e)}).ಠ_ಠ1050(function(e){t.reject(e)}),t.promise}}}).factory("Location",function(){function e(e){var n=e.coords.latitude+","+e.coords.longitude,o="http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+n+"&output=json&pois=0";$.ajax({type:"GET",dataType:"jsonp",url:o,"ಠ_ಠ1048":function(){console.log("正在定位……")},"ಠ_ಠ1049":function(e){0==e.status&&console.log(e.result.formatted_address)},"ಠ_ಠ1050":function(e,n,o){console.log("地址位置获取失败!")}})}function n(e){switch(e.code){case e.PERMISSION_DENIED:alert("定位失败,用户拒绝请求地理定位");break;case e.POSITION_UNAVAILABLE:alert("定位失败,位置信息是不可用");break;case e.TIMEOUT:alert("定位失败,请求获取用户位置超时");break;case e.UNKNOWN_ERROR:alert("定位失败,定位系统失效")}}return{"ಠ_ಠ1051":function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e,n):console.log("该浏览器不支持获取地理位置。")}}}).factory("ಠ_ಠ1052",function(e){return{"ಠ_ಠ1052":function(){var n=localStorage.getItem("loginState");0==n&&(console.log("not login"),e.path("/login"))}}}).factory("serviceURL",function(){var e="http://121.42.190.17:8080/Shop_war/";return serviceUrls={indexUrl:e+"index",DetailUrl:e+"Detail",LoginUrl:e+"login",RegisterUrl:e+"register",LogoutUrl:e+"logOut",BuyGoodUrl:e+"buyGood",MyCartUrl:e+"myCart",IndexSwiperUrl:e+"getImage",RemoveGoodUrl:e+"removeGood",AddCountUrl:e+"addCount",SubCountUrl:e+"subCount"}}).factory("SortDatas",function(){return SortDatas=[{name:"蔬菜水果",imgsrc:"src/img/index/menu_bg_01.png"},{name:"禽蛋肉类",imgsrc:"src/img/index/menu_bg_06.png"},{name:"水产火锅",imgsrc:"src/img/index/menu_bg_10.png"},{name:"熟食豆制",imgsrc:"src/img/index/menu_bg_14.png"},{name:"米面粮油",imgsrc:"src/img/index/menu_bg_03.png"},{name:"调料干货",imgsrc:"src/img/index/menu_bg_07.png"},{name:"餐厨用品",imgsrc:"src/img/index/menu_bg_11.png"},{name:"常购品",imgsrc:"src/img/index/menu_bg_15.png"}]});