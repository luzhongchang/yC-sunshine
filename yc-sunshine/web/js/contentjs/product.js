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

})

