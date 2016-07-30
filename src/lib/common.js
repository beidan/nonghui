function addClass(cls, className) {
    var ele = document.getElementsByClassName(cls);
    if (ele.className = '') {
        ele.className = className;
    } else {
        ele.className += '' + className;
    }
}
//设置透明度
function setOpacity(elem,level){
    if(elem.filters){
        elem.style.filter = "alpha(opacity="+level+")";
    }else{
        elem.style.opacity = level / 100;
    }
}
//删除元素
function removeElement(ele){
    var _parentElement = ele.parentNode;
    if(_parentElement){
        _parentElement.removeChild(ele);
    }
}
//淡出处理函数
function fadeOut(elem) {
    for (var i = 0; i <= 20; i++) {  //透明度改变 20 * 5 = 100
        (function () {
            var level = 100 - i * 5;  //透明度每次变化值
            setTimeout(function () {
                setOpacity(elem, level)
            }, i * 25); //i * 25 即为每次改变透明度的时间间隔，自行设定
        })(i);          //每次循环变化一次
    }
    removeElement(elem);
}


