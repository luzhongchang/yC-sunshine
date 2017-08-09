// /**
//  * Created by luzhongchang on 17/7/20.
//  */
// if(typeof NavItems =='undefined')
// {
//     var NavItems={};
//     NavItems.HOME     = 0;
//     NavItems.PRODUCTS = 1;
//     NavItems.PASKNG   = 2;
//     NavItems.ABOUT    = 3;
//     NavItems.CONTACT  = 4;
// }
//
// function selectItemMenu(index)
// {
//
//     $('.float_menu-list').eq(index).css({'color':'#ff00ff'});
//     $('.float_menu-list').not($('.float_menu-list').eq(index)).css({'color':'rgba(0, 0, 0, 0.8)'});
//     $('.menu-list').eq(index).css({'color':'#ff00ff'});
//     $('.menu-list').not($('.menu-list').eq(index)).css({'color':'rgba(0, 0, 0, 0.8)'});
// }
//
// var animtionTime = 300;
// var menuanimateTime =150;
//
// function navMenuitemandDefault(index) {
//
//        $('.menu-list').mouseenter(function () {
//         $(this).css({'color':'#ff00ff'});
//         var mindex = $(this).index('.menu-list');
//         if(mindex == 1)
//         {
//             $('.subMenu-dropdown').fadeIn(animtionTime);
//         }
//         else
//         {
//             $('.subMenu-dropdown').fadeOut(animtionTime);
//         }
//     });
//
//        $('.menu-list').mouseleave(function () {
//             var mindex = $(this).index('.menu-list');
//              if(mindex == index)
//             {
//                 $(this).css({'color':'#ff00ff'});
//             }
//             else
//                 $(this).css({'color': 'rgba(0, 0, 0, 0.8)'});
//        })
//
//
//     $('.float_menu-list').mouseenter(function () {
//         $(this).css({'color':'#ff00ff'});
//         var mindex = $(this).index('.float_menu-list');
//         if(mindex == 1)
//         {
//             $('.float_subMenu-dropdown').fadeIn(animtionTime);
//         }
//         else
//         {
//             // $('.subMenu-dropdown').slideUp(500);
//             $('.float_subMenu-dropdown').fadeOut(animtionTime);
//         }
//     });
//
//      $('.float_menu-list').mouseleave(function () {
//             var mindex = $(this).index('.float_menu-list');
//              if(mindex == index)
//             {
//                 $(this).css({'color':'#ff00ff'});
//             }
//             else
//              {
//                  $(this).css({'color': 'rgba(0, 0, 0, 0.8)'});
//              }
//        })
//
//
//      $('.float_subMenu-dropdown').mouseleave(function () {
//          $('.float_subMenu-dropdown').fadeOut(animtionTime);
//
//     })
//
// }