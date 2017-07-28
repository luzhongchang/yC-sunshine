/**
 * Created by luzhongchang on 17/7/25.
 */
$(document).ready(function () {



     $('.product_categories_li').click(function () {

         alert('231')
     })

    $('.product_categories_li').hover(

        function () {
            $(this).find('.product_categories_li_div').css({'width':'0%','background':'white'})
            $(this).find('.product_categories_li_div').animate({'width':'100%'},100,'swing');
        },
        function () {
            $(this).find('.product_categories_li_div').css({'background':'##ff00ff'})
            $(this).find('.product_categories_li_div').animate({'width':'0%'},100,'swing')
        }

    );

/*
* hover 箭头 展示子类或者收起子类
*
*/

    $('.product_showArea_categories_ul_li_arrow').parent().next('div').slideUp(0);




    var clicktimes =0;
    $('.product_showArea_categories_ul_li_arrow'). click(
        function () {

            if(clicktimes==0)
            {
                $(this).children('img').css({'transform': 'rotate('+180+'deg)'});
                $(this).parent().next('div').slideDown('normal')

            }
            else
            {
                $(this).children('img').css({'transform': 'rotate('+0+'deg)'});
              $(this).parent().next('div').slideUp('normal');
            }
             clicktimes==0 ? clicktimes=1 : clicktimes=0;

        }
    );
    
    
    $('.product_list_hover').mouseenter(function () {
         $(this).children('.product_showArea_categories_ul_li_span') .css({'color':'#ff00ff'});
         // $('.product_list_hover').not($(this)).css({'color': 'rgba(0, 0, 0, 0.8)'});
        
    });
    $('.product_list_hover').mouseleave(function () {
        $(this).children('.product_showArea_categories_ul_li_span') .css({'color':'rgba(0, 0, 0, 0.8)'});
    });

    $('.product_list_hover').click(function () {

    });



    $('.product_showArea_categories_ul_li_subli').mouseenter(function () {
         $(this).css({'color':'#ff00ff'});

    });

    $('.product_showArea_categories_ul_li_subli').mouseleave(function () {
        $(this) .css({'color':'rgba(0, 0, 0, 0.8)'});
    });
    $('.product_showArea_categories_ul_li_subli').click(function () {

    });



    $('.product_list_hovertags').mouseenter(function () {
         $(this).css({'color':'#ff00ff'});

    });
    $('.product_list_hovertags').mouseleave(function () {
        $(this).css({'color':'rgba(0, 0, 0, 0.8)'});
    });

     $('.product_list_hovertags').click(function () {

         window.location.href=$(this).data('name');
    });

     $('.product_showArea_search').focusin(function () {

         $(this).css({'border': '1px solid rgba(0,0,0,0.8)'})

     });
    $('.product_showArea_search').focusout(function () {
         $(this).css({'border': '1px solid #ccc'})
    });



    $('.product_intrduce_name').mouseenter(function () {

        $(this).children('span').css({'border-bottom': '1px solid rgba(0, 0, 0, 0.8)'});
    });
     $('.product_intrduce_name').mouseleave(function () {
        $(this).children('span').css({'border-bottom': '1px solid rgba(0, 0, 0, 0.1)'});
    });

    //  margin-right: 15px;
    // margin-top: 15px ;


    $('.product_intrduce').mouseenter(function () {

         $(this).children('.product_intrduce_detialbutton').children('img').animate({'width':'30px','height':'30px','margin-left':'0px','margin-top':'0px'},300,'swing');
    });
    $('.product_intrduce').mouseleave(function () {
         $(this).children('.product_intrduce_detialbutton').children('img').animate({'width':'0px','height':'0px','margin-left':'15px','margin-top':'15px'},300,'swing');
    });
     $(this).children('.product_intrduce_detialbutton').children('img').click(function () {

     });

     $('.product_page_cluom').mouseenter(function () {

         $(this).css({'border':'1px solid #B1B1B1'});
     });
     $('.product_page_cluom').mouseleave(function () {
         $(this).css({'border':'0px solid #B1B1B1'});
         $(this).css({'border-bottom': '1px solid #B1B1B1' });
     });

     $('.product_page_cluom').click(function () {
         $(this).css({'background':'black','color':'white'})
         $('.product_page_cluom').not($(this)).css({'background':'rgba(0,0,0,0)','color':'black'});
     });


    new  Function(selectItemMenu(1));
    new  Function(navMenuitemandDefault(1));


});

