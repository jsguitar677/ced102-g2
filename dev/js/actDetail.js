function $id(id){
	return document.getElementById(id);
}
window.addEventListener("load", function(){
    getActHistDetail();

});

function getActHistDetail(){
    let xhr = new XMLHttpRequest(); 
    xhr.onload = function(){
        let ACTDETAIL = JSON.parse(xhr.responseText);  
        console.log(ACTDETAIL);
        actCount = ACTDETAIL.length; //活動張數

        // for(let i=0; i<actCount; i++){
        //     $('#actHook').append(`
        //     <div class="page5Card" id="page5Card${ACTDETAIL[i].actno}" style="background-image:url(${ACTDETAIL[i].locpic});">
        //         <div class="content">
        //             <h2 class="title">${ACTDETAIL[i].actname}</h2>
        //             <p class="copy">${ACTDETAIL[i].actsdate}</p>
        //             <button id="ACT${ACTDETAIL[i].actno}" value="${ACTDETAIL[i].actno}" class="btn membtn">See More</button>
        //         </div>
        //     </div>
        //     `)
            
        //     let actvLine = document.getElementById(`ACT${ACTDETAIL[i].actno}`).value;
        //     document.getElementById(`ACT${ACTDETAIL[i].actno}`).onclick = function (){
        //         sessionStorage.removeItem('ACT');
        //         localStorage.setItem('ACT', actvLine);
        //         window.location.href="./act_hist_detail.html";
        //     }
        // }
    }
    xhr.open("post", "php/8/actHist.php", true); //連結伺服端程式
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    xhr.send(null);
}


let joinHref = location.href;
let actNum = joinHref.split('?')[1].split('=')[1];

function actinfo() {
    let xhrInfo = new XMLHttpRequest();
    xhrInfo.onload = function() {
        if (xhrInfo.status == 200) {
            let res = JSON.parse(xhrInfo.responseText)
            console.log(res);
            $('span.ininame').text(`${res[0].MBRNAME}`);
            $('#acttitle').text(`${res[0].ACTNAME}`);
            $('#loc').text(`${res[0].loc}`);
            $('#donateNum').text(`${res[0].DNTGOAL}`);
            $('#joinNum').text(`${res[0].RECRGOAL}`);
            $('#actsdate').text(`${res[0].ACTSDATE}`);
            $('#vision').text(`${res[0].VISION}`);
            $('#actdline').text(`${res[0].ACTDLINE}`);
            $('#vgoal').text(`${res[0].RECRGOAL}`);
            $('#fgoal').text(`${res[0].DNTGOAL}`);
            $('#fnow').text(`${res[0].DNTNOW}`);
            $('#vnow').text(`${res[0].RECRNOW}`);
            $('#imgsrc').attr('src', `${res[0].LOCPIC}`);
            $('#actcontent').text(`${res[0].ACTCON}`);
            let day = new Date();
            let today = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
            var ACTDLINE = `${res[0].ACTDLINE}`;
            if ((Date.parse(ACTDLINE)).valueOf() <= (Date.parse(today)).valueOf()) {
                $('#join').css('display', 'none');
                $('#join1').css('display', 'none');
            }
            let donate_rate = Math.round(parseInt(res[0].DNTNOW)/parseInt(res[0].DNTGOAL)*100);
            let join_rate = Math.round(parseInt(res[0].RECRNOW)/parseInt(res[0].RECRGOAL)*100);
            $('.progress-bar').css('width',`${donate_rate}%`)
            $('.progress-bar2').css('width',`${join_rate}%`)

        } else {
            alert(xhrInfo.status);
        }
    }
    let urlInfo = `./php/7/act_detail.php?actno=${actNum}`;
    xhrInfo.open("Get", urlInfo, true);
    xhrInfo.send(null);
}
actinfo();


// 活動內頁串資料 
function openQa(evt, cityName) {
    var i, outer_board, tablinks;
    outer_board = document.getElementsByClassName("outer_board");
    for (i = 0; i < outer_board.length; i++) {
        outer_board[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



// 點擊參加活動
$('#join').click(function() {
    let xhrlogin = new XMLHttpRequest();
    xhrlogin.onload = function() {
        if (xhrlogin.status == 200) {
            let res = JSON.parse(xhrlogin.responseText)
            console.log(res);
            if(res[0] == 'nologin') {
                //請先登入
                alert("請先登入再進行報名，謝謝。")
            }else{
                //連結報名參加頁面
                location.href = `./participation.html?actno=${actNum}`;
            }
        }else {
            alert(xhrlogin.status);
        }
    }
    let urllogin = "./php/7/eventlogin.php";
    xhrlogin.open("Get", urllogin, true);
    xhrlogin.send(null);
})
$('#join1').click(function() {
    let xhrlogin = new XMLHttpRequest();
    xhrlogin.onload = function() {
        if (xhrlogin.status == 200) {
            let res = JSON.parse(xhrlogin.responseText)
            console.log(res);
            if(res[0] == 'nologin') {
                //請先登入
                alert("請先登入再進行報名，謝謝。")
            }else{
                //連結報名參加頁面
                location.href = `./participation.html?actno=${actNum}`;
            }
        } else {
            alert(xhrlogin.status);
        }
    }
    let urllogin = "./php/7/eventlogin.php";
    xhrlogin.open("Get", urllogin, true);
    xhrlogin.send(null);
})