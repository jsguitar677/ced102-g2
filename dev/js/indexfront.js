
// ----------------------------------------------
// ----------------------------------------------
// ------排行榜按鈕切換----------------------------------------

$('#people-rank-btn').click(function(){
    $('#toggle-btn').animate({left:'50%'});
    $('#people-rank-btn').removeClass('toggle-text-effect');
    $('#money-rank-btn').addClass('toggle-text-effect');
    $('#money-rank').css({left:'-105%'},"100");
    $('#people-rank').css({left:'0%'},"100");
})
$('#money-rank-btn').click(function(){
    $('#toggle-btn').animate({left:'0%'});
    $('#money-rank-btn').removeClass('toggle-text-effect');
    $('#people-rank-btn').addClass('toggle-text-effect');
    $('#people-rank').css({left:'100%'},"100");
    $('#money-rank').css({left:'0%'},"100");
})

// ----------------------------------------------
// ----------------------------------------------
// ------切換衣服顏色----------------------------------------

$(document).ready(function() {
    $('#cusBlue').click(function() {
        $('#img_color').attr('src', './img/indexFront/shopImg/cusBag1.png');
    });
    $('#cusRed').click(function() {
        $('#img_color').attr('src', './img/indexFront/shopImg/cusBag2.png');
    });
    $('#cusGreen').click(function() {
        $('#img_color').attr('src', './img/indexFront/shopImg/cusBag3.png');
    });
    $('#cusBlack').click(function() {
        $('#img_color').attr('src', './img/indexFront/shopImg/cusBag4.png');
    });
    $('#cusYellow').click(function() {
        $('#img_color').attr('src', './img/indexFront/shopImg/cusBag5.png');
    });
});
