app.controller("registerController",function(e,r,n,o){e.ಠ_ಠ972=function(){n.get(o.RegisterUrl,{params:{phone:e.userPhone,Email:e.userEmail,sex:e.userSex,password:e.userPwd,nickname:e.userNickname}}).then(function(e){1==e.state?alert("用户已存在!"):console.log("添加用户成功")},function(e,r,n,o){console.log("error!")})}});