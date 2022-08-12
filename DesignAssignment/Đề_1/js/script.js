$(document).ready(function () {
    $(".nav-icon").click(function (e) { 
        e.preventDefault();
        $(".subnav").addClass("active");
        $(".cover").addClass("active");
    });
    $(".cover").click(function (e) { 
        e.preventDefault();
        $(".subnav").removeClass("active");
        $(".cover").removeClass("active");
    });
    $(".slide-btn > i").click(function (e) { 
        e.preventDefault();
        $(this).addClass("active");
        var num = $(this).attr("value");
        var idSlide = num/10;
        var idSlideString = "#"+idSlide.toString();
        $(idSlideString).addClass("active");
        $(idSlideString).siblings().removeClass("active");
        $(this).siblings().removeClass("active");
    });
});