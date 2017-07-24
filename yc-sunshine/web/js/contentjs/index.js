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

    var animtionTime = 300;
    var menuanimateTime =150;


        //默认第一tab
    $('.menu-list').eq(0).css({'color':'#ff00ff'});
    $('.menu-list').mouseenter(function () {
        $(this).css({'color':'#ff00ff'});
        $('.menu-list').not($(this)).css({'color': 'rgba(0, 0, 0, 0.8)'});
        index = $(this).index('.menu-list');

        if(index == 1)
        {
            // $('.subMenu-dropdown').slideDown(500);
            $('.subMenu-dropdown').fadeIn(animtionTime);

        }
        else
        {
            $('.subMenu-dropdown').fadeOut(animtionTime);
        }
    })
    $('.subMenu-dropdown').mouseleave(function () {
         $('.subMenu-dropdown').fadeOut(animtionTime);
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





    //big nav

         //默认第一tab
    $('.float_menu-list').eq(0).css({'color':'#ff00ff'});
    $('.float_menu-list').mouseenter(function () {
        $(this).css({'color':'#ff00ff'});
        $('.float_menu-list').not($(this)).css({'color': 'rgba(0, 0, 0, 0.8)'});
        index = $(this).index('.float_menu-list');

        if(index == 1)
        {
            // $('.subMenu-dropdown').slideDown(500);
            $('.float_subMenu-dropdown').fadeIn(animtionTime);

        }
        else
        {
            // $('.subMenu-dropdown').slideUp(500);
            $('.float_subMenu-dropdown').fadeOut(animtionTime);
        }
    });
     $('.float_subMenu-dropdown').mouseleave(function () {
         $('.float_subMenu-dropdown').fadeOut(animtionTime);
    })


    // $('.menu-list').click(function () {
    //     index = $(this).index('.menu-list');
    //     alert(index);
    //     switch (index)
    //     {
    //         case NavItems.HOME:
    //             break;
    //         case NavItems.PRODUCTS:
    //             break;
    //         case NavItems.PASKNG:
    //             break;
    //         case NavItems.ABOUT:
    //             break;
    //         case NavItems.CONTACT:
    //             break;
    //         default:
    //             break
    // }})

    //end bignav



    $(".sub-menu li").mouseenter(function () {
        $(".sub-menu li").css({'color':'#ff00ff'});
        $(".sub-menu li").not($(this)).css({'color': 'rgba(0, 0, 0, 0.8)'});
        $(this).animate({'margin-left':'10px'},menuanimateTime)

        $('.sub-menu li').not($(this)).animate({'margin-left':'0px'},menuanimateTime);

    });

    //黄灯片
        $('.testSlider3').slider({
		width:1286,
		height:415,
        durantion:2000,
		originPosition:'center',
	});


    $('.productimg img').mouseenter(function () {

        $(this).animate({width:'265px',
                        height:'265px',
                        left: '50%',
                        top:'50%',
                        'margin-left': '-132.5px',
                        'margin-top' :'-132.5px',
        },animtionTime,'swing')

    })
    $('.productimg img').mouseout(function () {

        $(this).animate({'width':'243px',
                        'height':'243px',
                        'left': '50%',
                        'top':'50%',
                        'margin-left': '-121.5px',
                        'margin-top' :'-121.5px',

        },animtionTime,'swing')

    })

    $('.description_product_a').hover(
        function () {
            $(this).css({'text-decoration': 'underline'});
        },
        function () {
            $(this).css({'text-decoration':'none'});
        }
    )


    $('.footersep ul li').hover(
         function () {
            $(this).css({'text-decoration': 'underline',
                         'color':'white'});
        },
        function () {
            $(this).css({'text-decoration':'none','color':'#7a7a7a'});
        }
    )

       //显示navi
    $(".overfloatTopwrapper").hide()
    var testSlider3_height = $('.testSlider3').offset().top;
    $(window).bind('scroll',function () {
         var this_scrollowTop =$(this).scrollTop();
        if(this_scrollowTop>testSlider3_height) {
            $(".overfloatTopwrapper").show();
        }
        else
        {
             $(".overfloatTopwrapper").hide();
        }
    })
});





