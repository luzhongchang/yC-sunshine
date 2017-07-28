/**
 * Created by luzhongchang on 17/7/27.
 */
$(document).ready(function () {

    $('.packing-home-span').hover(
        function () {
            $(this).css({ 'border-bottom': '1px solid white'});
        },
        function () {
            $(this).css({'border-bottom':'0px solid white'});
        }
    );
    $('.packing-home-span').click(function () {
        window.location.href='index.html';
    });


    new  Function(selectItemMenu(2));
    new  Function(navMenuitemandDefault(2));

});