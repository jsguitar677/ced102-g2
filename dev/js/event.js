$('document').ready(function(){
    //預設
    $('section').css('display','none');
    $(`#section3`).css('display','');
    $('ul.menu >li:nth-child(3)').css('fontWeight','bolder');

    //點擊選單，切換畫面
    for(let i=1; i<=3; i++){
        $(`ul.menu >li:nth-child(${i})`).click(function(){
            $('section').css('display','none');
            $(`#section${i}`).css('display','');
            $('ul.menu >li').css('fontWeight','');
            $(this).css('fontWeight','bolder');
        })
    };

    $('#people-rank-btn').click(function(){
        $('#toggle-btn').animate({left:'50%'});
        $('#people-rank-btn').removeClass('toggle-text-effect')
        $('#money-rank-btn').addClass('toggle-text-effect')
        // $('#money-rank').animate({left:'-105%'},"100");
        // $('#people-rank').animate({left:'0%'},"100");
        $('#money-rank').css({left:'-105%'},"100");
        $('#people-rank').css({left:'0%'},"100");
    })
    $('#money-rank-btn').click(function(){
        $('#toggle-btn').animate({left:'0%'});
        $('#money-rank-btn').removeClass('toggle-text-effect')
        $('#people-rank-btn').addClass('toggle-text-effect')
        // $('#people-rank').animate({left:'100%'},"100");
        // $('#money-rank').animate({left:'0%'},"100");
        $('#people-rank').css({left:'100%'},"100");
        $('#money-rank').css({left:'0%'},"100");
    })
    
    if($(document).width()<992){
        $('.small-card').removeClass('effect');
    }

    if($(document).width()<768){
        $('ul.menu >li:nth-child(1)').text('助環境一力');
        $('ul.menu >li:nth-child(2)').text('與我們一起');
    }else{
        $('ul.menu >li:nth-child(1)').text('助環境一力 (參與活動)');
        $('ul.menu >li:nth-child(2)').text('與我們一起 (發起活動)');    
    }


    $(window).resize(function(){
        if($(document).width()<=767){
            $('ul.menu >li:nth-child(1)').text('助環境一力');
            $('ul.menu >li:nth-child(2)').text('與我們一起');
        }else{
            $('ul.menu >li:nth-child(1)').text('助環境一力 (參與活動)');
            $('ul.menu >li:nth-child(2)').text('與我們一起 (發起活動)');    
        }
        if($(document).width()<992){
            $('.small-card').removeClass('effect');
        }
    })

    var isclick = true;
    $('#btn-right').click(function(){
        if(isclick){
            isclick = false;
            let card_length = $('ul.slides').length;
            let left = parseFloat($('ul.slides').css('left'));
            let width = parseFloat($('ul.slides').width());
            if(left > -width*(card_length-1)){
                $('ul.slides').animate({left: left - width},300);
            }
        
        }
        setTimeout(function(){
            isclick = true;
        },800);
    })
    $('#btn-left').click(function(){
        if(isclick){
            isclick = false;
            let left = parseFloat($('ul.slides').css('left'));
            let width = parseFloat($('ul.slides').width());
            if(left <= -width){
                $('ul.slides').animate({left: left + width},300);
            }
        }
        setTimeout(function(){
            isclick = true;
        },800);
    })

    $('p.more').click(function(){
        $(this).text('');
        $(this).parent().children("p:first-child").removeClass('shorten2');
    })
    
})
