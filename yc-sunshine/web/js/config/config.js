/**
 * Created by luzhongchang on 17/7/20.
 */
if(typeof NavItems =='undefined')
{
    var NavItems={};
    NavItems.HOME     = 0;
    NavItems.PRODUCTS = 1;
    NavItems.PASKNG   = 2;
    NavItems.ABOUT    = 3;
    NavItems.CONTACT  = 4;
}

function selectItemMenu(index)
{

    $('.float_menu-list').eq(index).css({'color':'#ff00ff'});
    $('.float_menu-list').not($('.float_menu-list').eq(index)).css({'color':'rgba(0, 0, 0, 0.8)'});
    $('.menu-list').eq(index).css({'color':'#ff00ff'});
    $('.menu-list').not($('.menu-list').eq(index)).css({'color':'rgba(0, 0, 0, 0.8)'});
}
