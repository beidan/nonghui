app.controller("DetailController",function(o,e,t,n){function l(o){new Slider({dom:document.getElementById("canvas"),list:o})}t.get(n.DetailUrl,{params:{id:e.search().id}}).then(function(e){o.ಠ_ಠ201=e.product,l(e.imageUrl),o.ಠ_ಠ202=e.comments,o.ಠ_ಠ203=function(){return o.ಠ_ಠ202.length}},function(o,e,t,n){console.log("error!")});var r=localStorage.getItem("loginState"),a=localStorage.getItem("ಠ_ಠ204");0==r||null==r?o.ಠ_ಠ204=0:o.ಠ_ಠ204=parseInt(a),o.ಠ_ಠ206=1,o.ಠ_ಠ194=function(e){o.ಠ_ಠ206++},o.ಠ_ಠ195=function(e){o.ಠ_ಠ206>1&&o.ಠ_ಠ206--};var c=JSON.parse(localStorage.getItem("user_data"));o.ಠ_ಠ207=function(){null!==c?t.get(n.BuyGoodUrl,{params:{userId:c.id,id:e.search().id,"ಠ_ಠ206":o.ಠ_ಠ206}}).then(function(e){0==e.status?(o.ಠ_ಠ204=e.ಠ_ಠ204,localStorage.setItem("ಠ_ಠ204",e.ಠ_ಠ204),console.log("加入购物车成功!")):(console.log("添加失败!"),alert("添加失败"))},function(o,e,t,n){console.log("error!")}):console.log("对不起,请先登录!"),console.log("add")}});