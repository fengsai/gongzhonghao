/**
 * Created by qibao on 2018/8/6.
 */

(function () {

    $(".listcom").on("touchstart",function () {
        var _$=$(this);
        window.location.href=_$.data("id")+".html";
    })

})()