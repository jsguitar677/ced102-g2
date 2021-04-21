
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

//============ 文字跑動
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  
//==============  PHP
//============== 總募款金額 / 總發起活動場次 / 總參與人數 資料抓取

function showActInfo(jsonStr){
    let actv = JSON.parse(jsonStr);
    // console.log("donationTot:",actv["donationTot"]);
    let donationTot = actv["donationTot"];
    let recruitTot = actv["recruitTot"];
    let actvTot = actv["actvTot"];
    // console.log(donationTot, recruitTot, actvTot);
    spanShow = document.getElementsByClassName('tal');
    animateValue(spanShow[0], 0, donationTot, 1300);
    animateValue(spanShow[1], 0, actvTot, 1300);
    animateValue(spanShow[2], 0, recruitTot, 1300);
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





//============== 募款排行榜 資料抓取
function showContributeRank(jsonStr){
    var rank = JSON.parse(jsonStr);
    // console.log("第一個: ",rank[0]["MBRPIC"]);
    let donateRankPic = document.getElementsByClassName('donateRankPic');
    let donateName = document.getElementsByClassName('donateRankName');
    let donateMoney = document.getElementsByClassName('donateMoney');
    for(let i=0; i<3; i++){
        donateRankPic[i].setAttribute("src", rank[i]["MBRPIC"]);
        donateName[i].innerHTML = rank[i]["MBRNAME"];
        donateMoney[i].innerHTML = rank[i]["DONATE"]+"$";
    }
}
function getContributeRank(){
    var xhrC = new XMLHttpRequest();
    xhrC.onload = function(){
        if(xhrC.status == 200){
            // console.log("風雲榜: ",xhrC.responseText);
            showContributeRank(xhrC.responseText);
        }else{
            alert(xhrC.status);
        }
    }
    var urlC = "./php/2/indexfront_donation.php";
    xhrC.open("Get", urlC, true);
    xhrC.send(null);
};

window.addEventListener('load', getContributeRank);


// ====================== 志工次數排行榜
function showContributeCrewRank(jsonStr){
    var rankTimes = JSON.parse(jsonStr);
    let donateRankPic = document.getElementsByClassName('donateRankPic');
    let donateName = document.getElementsByClassName('donateRankName');
    let donateMoney = document.getElementsByClassName('donateMoney');
    for(let i=0; i<3; i++){
        donateRankPic[i].setAttribute("src", rankTimes[i]["MBRPIC"]);
        donateName[i].innerHTML = rankTimes[i]["MBRNAME"];
        donateMoney[i].innerHTML = rankTimes[i]["PARTICIPATE"];
    }
}
function getContributeCrew(){
    var xhrCC = new XMLHttpRequest();
    xhrCC.onload = function(){
        if(xhrCC.status == 200){
            // console.log("風雲榜: ",xhrC.responseText);
            showContributeCrewRank(xhrCC.responseText);
        }else{
            alert(xhrCC.status);
        }
    }
    var urlCC = "./php/2/indexfront_donationCC.php";
    xhrCC.open("Get", urlCC, true);
    xhrCC.send(null);
}
document.getElementById('people-rank-btn').addEventListener('click', getContributeCrew);

// ==================== 最新活動抓取
function showLatestActv(jsonStr){
    var latestActv = JSON.parse(jsonStr);
    let latestActvPic = document.getElementsByClassName('targetData');
    // let donateName = document.getElementsByClassName('donateRankName');
    // let donateMoney = document.getElementsByClassName('donateMoney');
    for(let i=0; i<6; i++){
        latestActvPic[i].setAttribute("src", latestActv[i]["LOCPIC"]);
        // donateName[i].innerHTML = rankTimes[i]["MBRNAME"];
        // donateMoney[i].innerHTML = rankTimes[i]["PARTICIPATE"];
    }
}
function getLatestActv(){
    var xhrLa = new XMLHttpRequest();
    xhrLa.onload = function(){
        if(xhrLa.status == 200){
            console.log("最新活動",xhrLa.responseText);
            showLatestActv(xhrLa.responseText);
        }else{
            alert(xhrLa.status);
        }
    }
    var urlLa = "./php/2/indexfront_latestAct.php";
    xhrLa.open("Get", urlLa, true);
    xhrLa.send(null);
}
window.addEventListener('load',getLatestActv);


