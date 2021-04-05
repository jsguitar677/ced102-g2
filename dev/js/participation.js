$('document').ready(function(){
    function start(){
        if($(document).width()<768){
            $('.card').css('width','100%');
            $('.card').css('height',`${100/3}%`);
            $('.card').css('top',`0`);
            $('.card').css('left',`-100%`);
            animation_start = new TimelineMax();
            animation_start.to('#v',0.5,{
                x:'100%'
            }).to('#f',0.5,{ 
                x:'100%'
            }).to('#v-f',0.5,{
                x:'100%'
            })
        }else{
            animation_start = new TimelineMax();
            animation_start.to('#v',0.5,{
                y:'100%'
            }).to('#f',0.5,{ 
                y:'100%'
            }).to('#v-f',0.5,{
                y:'100%'
            }) 
        }
    }
    start();

    $('#v').click(function(){
        $('.card').css('display','none');
        $('.join').css('display','block');
        $('#card-title').text('志工');
        TweenMax.to('.content',1,{
            display: 'flex',
            opacity: 1,
        })
    })
    $('#f').click(function(){
        $('.card').css('display','none');
        $('.donate').css('display','block');
        $('#card-title').text('捐款');
        TweenMax.to('.content',1,{
            display: 'flex',
            opacity: 1,
        })
    })
    $('#v-f').click(function(){
        $('.card').css('display','none');
        $('.join').css('display','block');
        $('.donate').css('display','block');
        $('#card-title').html('志工 + 捐款');
        TweenMax.to('.content',1,{
            display: 'flex',
            opacity: 1,
        })
    })
    $('#cancel').click(function(e){
        $('.join').css('display','none');
        $('.donate').css('display','none');
        $('.content').css('display','none');
        $('.card').css('display','block');
        TweenMax.to('.content',0,{
            opacity: 0,
        })
        e.preventDefault();
        $('#checkbox1')[0].checked = false;
        $('#checkbox2')[0].checked = false;
    })
})