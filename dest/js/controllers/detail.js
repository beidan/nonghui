app.controller("DetailController",function(o,e,t,n){function l(o){new Slider({dom:document.getElementById("canvas"),list:o})}t.get(n.DetailUrl,{params:{id:e.search().id}}).then(function(e){o.ಠ_ಠ372=e.product,l(e.imageUrl),o.ಠ_ಠ373=e.comments,o.ಠ_ಠ374=function(){return o.ಠ_ಠ373.length}},function(o,e,t,n){console.log("error!")});var r=localStorage.getItem("loginState"),a=localStorage.getItem("ಠ_ಠ375");0==r?o.ಠ_ಠ375=0:o.ಠ_ಠ375=parseInt(a),o.ಠ_ಠ377=1,o.ಠ_ಠ365=function(e){o.ಠ_ಠ377++},o.ಠ_ಠ366=function(e){o.ಠ_ಠ377>1&&o.ಠ_ಠ377--};var c=JSON.parse(localStorage.getItem("user_data"));o.ಠ_ಠ378=function(){t.get(n.BuyGoodUrl,{params:{userId:c.id,id:e.search().id,"ಠ_ಠ377":o.ಠ_ಠ377}}).then(function(e){0==e.status?(o.ಠ_ಠ375=e.ಠ_ಠ375,localStorage.setItem("ಠ_ಠ375",e.ಠ_ಠ375),console.log("加入购物车成功!")):(console.log("添加失败!"),alert("添加失败"))},function(o,e,t,n){console.log("error!")}),console.log("add")}});