$(document).ready(function () {
    $('.fa-shopping-cart').click(function () {
        // $(this).parent().parent().remove();

        if ($('.item_container').length <= 0) {
            $('.space_box').style({
                display: 'block',
            });
        }
        $('.total_body').remove();
        $('.total_box').remove();
        $('.button-pay').remove();
    });
});