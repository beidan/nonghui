app.controller("searchController",function(o,n,e,l){o.ಠ_ಠ483=function(){e.get(l.FindProductUrl,{params:{name:o.search}}).then(function(n){0===n.items.length?(console.log("对不起,找不到商品信息!"),alert("对不起,找不到商品信息!"),o.ಠ_ಠ484={}):(console.log(n),o.ಠ_ಠ484=n.items),console.log(n)},function(o,n,e,l){console.log("error!")})}});