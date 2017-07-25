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
            $(this).find('.product_categories_li_div').animate({'width':'100%'},300,'swing');
        },
        function () {
            $(this).find('.product_categories_li_div').css({'background':'##ff00ff'})
            $(this).find('.product_categories_li_div').animate({'width':'0%'},300,'swing')
        }

    );

})

