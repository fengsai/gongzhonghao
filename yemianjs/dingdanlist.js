(function ($) {
    //
    $(".btn_tuik").on("touchstart",function () {
        window.location.href="shenqingtk.html";
    })

    $(".btn_fap").on("touchstart",function () {
        window.location.href="shenqingfp.html";
    })

    $(".listall").on("touchstart",function (e) {
        if(!($(e.target).hasClass("btn_tuik")||$(e.target).hasClass("btn_fap")||$(e.target).hasClass("bottombtn")))
        {
           // window.location.href="dingdanDetail.html";
            if(!$(e.target).parent().hasClass("bottombtn"))
            {
                window.location.href="dingdanDetail.html";
            }
        }
    })

})($)