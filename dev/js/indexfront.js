
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


// window.addEventListener("load",function(){
//     test2();
// });

// function test2 (){
//     if( document.cookie = 0 ){
//         $id('wholeScreenOverlay3').style.display = 'block';
//         document.body.style.overflow = 'hidden';
//         document.cookie = 99;
//         return;
//     }else{
//         $id('wholeScreenOverlay3').style.display = 'none';
//         document.body.style.overflow = 'auto';
//         return;
//     }
// }
//==============  PHP
//============== 總募款金額 / 總發起活動場次 / 總參與人數 資料抓取

function showActInfo(jsonStr){
    let actv = JSON.parse(jsonStr);
    // console.log("donationTot:",actv["donationTot"]);
    let donationTot = actv["donationTot"];
    let recruitTot = actv["recruitTot"];
    let actvTot = actv["actvTot"];
    console.log(donationTot, recruitTot, actvTot);
    spanShow = document.getElementsByClassName('tal');
    spanShow[0].setAttribute("data-end", donationTot);
}

function getActInfo(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            // console.log("xhr.reponseText",xhr.responseText);
            showActInfo(xhr.responseText);
        }else{
            alert(xhr.status);
        }
    }
    var url = "./php/2/indexfront.php";
    xhr.open("Get", url, true);
    xhr.send(null);
};

window.addEventListener('load', getActInfo);