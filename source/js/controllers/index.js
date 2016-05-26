$(document).ready(function(){
    var mySwiper = new Swiper('#slide',{
        autoplay:5000,
        visibilityFullFit : true,
        loop:true,
        pagination : '.pagination',
    });

    $(".tab_proList dd").eq(0).show().siblings(".tab_proList dd").hide();
    $(".tab_proList dt a").eq(0).addClass("currStyle");
    $(".tab_proList dt a").click(function(){
        var liindex = $(".tab_proList dt a").index(this);
        $(this).addClass("currStyle").siblings().removeClass("currStyle");
        $(".tab_proList dd").eq(liindex).fadeIn(150).siblings(".tab_proList dd").hide();
    });

    $(".addToCart").click(function(){
        $(".hoverCart a").html(parseInt($(".hoverCart a").html())+1);/*悬浮购物车+1*/
        var shopOffset = $(".hoverCart").offset();
        var cloneDiv = $(this).parent().siblings(".goodsPic").clone();
        var proOffset = $(this).parent().siblings(".goodsPic").offset();
        cloneDiv.css({ "position": "absolute", "top": proOffset.top, "left": proOffset.left });
        $(this).parent().siblings(".goodsPic").parent().append(cloneDiv);
        cloneDiv.animate({
            width:0,
            height:0,
            left: shopOffset.left,
            top: shopOffset.top,
            opacity:1
        },"slow");
    });
});
