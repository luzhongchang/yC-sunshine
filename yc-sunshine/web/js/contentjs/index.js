/**
 * Created by luzhongchang on 17/7/20.
 */




$(document).ready(function () {
    $('.loggoWrapper').click(function () {
        window.location.href='https://www.baidu.com'
    })


   var  statusfloat = 0;
     $('.floatsearchIcon').click(function () {

         statusfloat = statusfloat==0?1:0

         switch (statusfloat) {
             case 0:
             {
                 closeMaskView();
             }
                 break;
             case 1:
             {
                openMaskview('float');
             }
                 break;
             default:
                 break
         }

     });




    var  status = 0;
     $('.searchIcon').click(function () {

         status = status==0?1:0

         switch (status) {
             case 0:
             {
                 closeMaskView();
             }
                 break;
             case 1:
             {
                openMaskview('');
             }
                 break;
             default:
                 break
         }

     });


     function openMaskview(from) {
         $('.scrollowbutton').css({'opacity':''});
         var height = from=='float'?75:179
          $('.search_maskview').animate({'top': height + 'px'}, 300, 'swing');
          $('.downmaskview_close_font').animate({'height':'20%'}, 300, 'swing');

          $('body').addClass("html-body-overflow");
     }
     function  closeMaskView() {

         $('.scrollowbutton').css({'opacity':'1.0'});
         var height =$('.search_maskview').height();
         $('.search_maskview').animate({'top':height+'px'},300,'swing');
          $('.downmaskview_close_font').animate({'height':'0%'},300, 'swing');
         $('body').removeClass("html-body-overflow");
     }









        //默认第一ta
    $('.subMenu-dropdown').mouseleave(function () {
         $('.subMenu-dropdown').fadeOut(animtionTime);
    })
    $('.menu-list').click(function () {
        index = $(this).index('.menu-list');
        closeMaskView();
        windowsHref(index)

    });


     function windowsHref(index) {
          switch (index)
        {
            case NavItems.HOME:
                window.location.href='index.html';
                break;
            case NavItems.PRODUCTS:
                window.location.href='product.html';
                break;
            case NavItems.PASKNG:
                window.location.href='packing.html';
                break;
            case NavItems.ABOUT:
                window.location.href='about.html';
                break;
            case NavItems.CONTACT:
                window.location.href='contact.html';
                break;
            default:
                break
    }}





    //关闭searchmarskview

    $('.topwrapper').click(function () {
        closeMaskView();
    });
    $('.widgetarea-head') .click(function () {
        closeMaskView();
    });
    $('.navigation-wrap').click(function () {
        closeMaskView();
    })
    $('.downmaskview').click(function () {
        closeMaskView();
    });


    $('.float_menu-list').click(function () {
        index = $(this).index('.float_menu-list');
        windowsHref(index);
    });

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
    $(".overfloatTopwrapper").hide();
    $('.scrollowbutton').hide();
    var testSlider3_height = $(window).height();
    $(window).bind('scroll',function () {
         var this_scrollowTop =$(this).scrollTop();
        if(this_scrollowTop>testSlider3_height) {
            $(".overfloatTopwrapper").show();
            $('.scrollowbutton').show();
        }
        else
        {
             $(".overfloatTopwrapper").hide();
             $('.scrollowbutton').hide();
        }
    });

    $('.scrollowbutton').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    $('.scrollowbutton').hover(
        function () {
             $(this).css({'background-color': '#ff00ff','border': '1px solid rgba(0,0,0,0)'})
        },
        function () {
            $('.scrollowbutton').css({'background-color': '#ffffff','border': '1px solid rgba(0,0,0,1)'})

        }

    );


    new  Function(selectItemMenu(0));
    new  Function(navMenuitemandDefault(0));





});



