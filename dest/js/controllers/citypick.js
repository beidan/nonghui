app.controller("cityPickController",function(t,o,i){$("body").on("click",".city-list p",function(){var o=$(this).html();$(this).attr("data-id");localStorage.setItem("city",o),t.ಠ_ಠ627()}),$("body").on("click",".letter a",function(){var t=$(this).html();$(window).scrollTop($("#"+t+"1").offset().top)}),t.ಠ_ಠ627=function(){history.back(-1)}});