app.controller("CartController",function(n,r,i,o){r.isLogin(),i.get(o.MyCartUrl,{}).then(function(n){console.log(n)},function(n,r,i,o){console.log("error!")}),n.ಠ_ಠ617=[{name:"新鲜小黄鱼特惠",num:1,price:199,origPrice:223,imgsrc:"src/img/index/goods008.jpg"},{name:"豆腐干2kg装",num:1,price:139,origPrice:243,imgsrc:"src/img/index/goods009.jpg"},{name:"优质牛肉特价",num:1,price:10,origPrice:23,imgsrc:"src/img/index/goods007.jpg"}],n.ಠ_ಠ618=function(r){var i=r.target.ಠ_ಠ619;"编辑"===i?(r.target.ಠ_ಠ619="完成",n.ಠ_ಠ620=!0):(r.target.ಠ_ಠ619="编辑",n.ಠ_ಠ620=!1)},n.ಠ_ಠ623=function(){var r,i=0,o=n.ಠ_ಠ617.length;for(r=0;r<o;r++)i+=n.ಠ_ಠ617[r].price*n.ಠ_ಠ617[r].num;return i},n.ಠ_ಠ624=function(r){n.ಠ_ಠ617.splice(r,1)},n.ಠ_ಠ625=function(r){n.ಠ_ಠ617[r].num++},n.ಠ_ಠ626=function(r){n.ಠ_ಠ617[r].num>1?n.ಠ_ಠ617[r].num--:1===n.ಠ_ಠ617[r].num&&n.ಠ_ಠ617.splice(r,1)}});