app.controller("LoginController",function(o,t,e,r,n){o.ಠ_ಠ931=function(){r.get(n.LoginUrl,{params:{phone:o.ಠ_ಠ932.name,password:o.ಠ_ಠ932.psw}}).then(function(t){0===t.state?(localStorage.setItem("loginState",1),localStorage.setItem("user_data",JSON.stringify(t.ಠ_ಠ932)),localStorage.setItem("cartCount",JSON.stringify(t.cartCount)),alert("登陆成功"),console.log("login"),e.path("/index")):(console.log(t.errorMsg),alert(t.errorMsg),o.ಠ_ಠ932="")},function(o,t,e,r){console.log("error!")})}});