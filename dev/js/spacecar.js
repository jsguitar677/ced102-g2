

$(document).ready(function(){
    $('.space_box').css('display','none');
    if ($('.item_container').length == 0) {
            $('.space_box').css('display','block');
            $('.total_body').remove();
            $('.total_box').remove();
            $('.button-pay').remove();
    }
    console.log(11)
})

        

