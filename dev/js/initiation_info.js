$(function(){
    if($(document).width()<560){
        $('#sign').html('<span class="red">*</span>活動報名截止日期');
    }
    $(window).resize(function(){
        if($(document).width()<560){
            $('#sign').html('<span class="red">*</span>活動報名截止日期');
        }else{
            $('#sign').html('<span class="red">*</span>活動報名<br> 截止日期');
        }
    })

    $('#agree-btn').click(function(e){
        if($('#agreement').prop("checked") == false){
            $('div.part > div.description > div.checkbox-block > label').css('color','red');
            e.preventDefault();
            return;
        }
        // if($('textarea').length == 0){
        //     e.preventDefault();
        //     return;
        // }
    })
})