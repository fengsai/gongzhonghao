

(function () {

    $(".listcom").on("touchstart",function () {
        var _$=$(this);
        window.location.href=_$.data("id")+".html";
    })

})()