app.controller("IndexController",function(t,e,o,n,r,l,a){function c(e){n.get(r.indexUrl,{params:{cate:e}}).then(function(e){t.ಠ_ಠ211=e.items},function(t,e,o,n){console.log("error!")})}function i(t){new Slider({dom:document.getElementById("canvas"),list:t})}var g=e.absUrl();localStorage.setItem("indexUrl",g),c("hot"),t.ಠ_ಠ209=r.DetailUrl,t.ಠ_ಠ210=function(t){c("热销"===t.target.innerHTML?"hot":"新品"===t.target.innerHTML?"new":"sale")};var u=localStorage.getItem("loginState"),s=localStorage.getItem("cartCount");0==u||null==u?t.ಠ_ಠ212=0:t.ಠ_ಠ212=parseInt(s);var d=JSON.parse(localStorage.getItem("user_data"));t.ಠ_ಠ207=function(e){var o=e.target.parentNode.getAttribute("value");null!==d?n.get(r.BuyGoodUrl,{params:{userId:d.id,id:o,count:1}}).then(function(e){0==e.status?(t.ಠ_ಠ212=t.ಠ_ಠ212+1,localStorage.setItem("cartCount",t.ಠ_ಠ212)):(console.log("添加失败!"),alert("添加失败"))},function(t,e,o,n){console.log("error!")}):console.log("对不起,请先登录!")},n.get(r.IndexSwiperUrl,{}).then(function(t){i(t.imageUrl)},function(){console.log("error!")}),t.ಠ_ಠ184=l});