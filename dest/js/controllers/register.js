app.controller("registerController",function(e,r,t,n,o){e.ಠ_ಠ1011=function(){e.RegisterForm.$valid&&e.RegisterForm.$dirty?(n.get(o.RegisterUrl,{params:{phone:e.ಠ_ಠ1012.phone,Email:e.ಠ_ಠ1012.email,sex:e.ಠ_ಠ1012.sex,password:e.ಠ_ಠ1012.pwd,nickname:e.ಠ_ಠ1012.nickname}}).then(function(r){0==r.status?(alert(r.hint),t.path("/login")):(e.ಠ_ಠ1012="",alert(r.hint))},function(){console.log("error!")}),alert("通过验证")):alert("未通过验证")}});