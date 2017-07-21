/**
 * Created by luzhongchang on 17/7/20.
 */


$(document).ready(function () {

    $('.loggoWrapper').click(function () {
        window.location.href='https://www.baidu.com'
    })
    $('.searchIcon').click(function () {
        window.location.href='https://www.baidu.com'
    })




        //默认第一tab
    $('.menu-list').eq(0).css({'color':'#ff00ff'});
    $('.menu-list').mouseenter(function () {
        $(this).css({'color':'#ff00ff'});
        $('.menu-list').not($(this)).css({'color': 'rgba(0, 0, 0, 0.8)'});
        index = $(this).index('.menu-list');

        if(index == 1)
        {
            // $('.subMenu-dropdown').slideDown(500);
            $('.subMenu-dropdown').fadeIn(300);

        }
        else
        {
            // $('.subMenu-dropdown').slideUp(500);
            $('.subMenu-dropdown').fadeOut(300);
        }
    })
    $('.menu-list').click(function () {
        index = $(this).index('.menu-list');
        alert(index);
        switch (index)
        {
            case NavItems.HOME:
                break;
            case NavItems.PRODUCTS:
                break;
            case NavItems.PASKNG:
                break;
            case NavItems.ABOUT:
                break;
            case NavItems.CONTACT:
                break;
            default:
                break
    }})



    $(".sub-menu li").mouseenter(function () {
        $(".sub-menu li").css({'color':'#ff00ff'});
        $(".sub-menu li").not($(this)).css({'color': 'rgba(0, 0, 0, 0.8)'});
        $(this).animate({'margin-left':'10px'},150)

        $('.sub-menu li').not($(this)).animate({'margin-left':'0px'},150);

    });




});





