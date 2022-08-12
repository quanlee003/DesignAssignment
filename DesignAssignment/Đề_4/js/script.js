$(document).ready(function () {
    $('.bars').click(function (e) { 
        e.preventDefault();
        $('.subnav').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.subnav').removeClass('active');
        $('.cover').removeClass('active');
    });
    $('.tab-bar-item').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.top-seller').click(function (e) { 
        e.preventDefault();
        $('.product-item.top-seller').addClass('active');
        $('.product-item.product-featured').removeClass('active');
        $('.product-item.most-review').removeClass('active');
    });
    $('.product-featured').click(function (e) { 
        e.preventDefault();
        $('.product-item.product-featured').addClass('active');
        $('.product-item.top-seller').removeClass('active');
        $('.product-item.most-review').removeClass('active');
    });
    $('.most-review').click(function (e) { 
        e.preventDefault();
        $('.product-item.most-review').addClass('active');
        $('.product-item.top-seller').removeClass('active');
        $('.product-item.product-featured').removeClass('active');
    });
    $('.feedback-btn').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});