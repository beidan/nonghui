app.controller("userController",function(o,t,e,l,n){n.isLogin();var r=JSON.parse(localStorage.getItem("user_data"));r&&(o.ಠ_ಠ486=r.img||"./src/img/user/tx.jpg",o.ಠ_ಠ487=r.ಠ_ಠ487),o.ಠ_ಠ488=function(){l.get(e.LogoutUrl,{}).then(function(o){console.log(o),localStorage.setItem("loginState",0),console.log(localStorage.getItem("loginState")),alert("注销成功!"),t.path("/index")},function(){console.log("error!")})}});