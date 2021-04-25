// --------
function $id(id){
	return document.getElementById(id);
}

// --------
let joinHref = location.href;
let actNum = joinHref.split('?')[1].split('=')[1];

// --------網頁載入
window.addEventListener("load", function(){
    getMessageDetail();
    // addMessage();
    MessageLimitHook();
    
    getActNo();
});
// --------blocktoLogon

$id('blocktoLogon').onclick = function(){
    AccountListLogBtn.onclick ();
}

function getActNo(){
    $id('getActNo').value = actNum;
    // console.log($id('getActNo').value);
}

// MessageLimitHook
// AccountListLogBtn.onclick ()
function MessageLimitHook(){
    let xhr2 = new XMLHttpRequest(); 
    xhr2.onload = function(){
        // let getmem50 = JSON.parse(xhr2.responseText);
        if(xhr2.responseText != 50){
            $id('MessageLimitHook').style.display = "none";
        }else{
            $id('MessageLimitHook').style.display = "block";
        }
    }
    xhr2.open("post", "php/8/getMemInfoFIX.php", true); //連結伺服端程式
    xhr2.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    xhr2.send(null);
}



// function addMessage(){

//     let xhrAddMessage = new XMLHttpRequest(); 
//     xhrAddMessage.onload = function(){


//     }
//     xhrAddMessage.open("post", "php/8/actAddMessage.php", true); //連結伺服端程式
//     xhrAddMessage.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
//     let actnoO = `ACTNO=${actNum}&ACTNO=${actNum}&ACTNO=${actNum}&ACTNO=${actNum}`;
//     xhrAddMessage.send(actnoO);
// }
// --------
function getMessageDetail(){
    let xhr1 = new XMLHttpRequest(); 
    xhr1.onload = function(){
        let message = JSON.parse(xhr1.responseText);  
        let messageLen = message.length
        console.log(message);
        
        for(let i=0; i<messageLen; i++){
            $('#messageHook').append(`
                <div class="chat">
                    <div class="message_box">
                        <img src="${message[i].mbrpic}">
                        <h1>${message[i].timestamp}</h1>
                        <h3>${message[i].message}</h3>
                        <h6 class="mbrname">${message[i].mbrname}<h6>
                        <div class="mbrno">留言編號${message[i].commNo}</div>
                    </div>
                </div>
             `)
        }
    }
    xhr1.open("post", "php/8/actComment.php", true); //連結伺服端程式
    xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    let actnoO = `ACTNO=${actNum}`;
    xhr1.send(actnoO);
}




function actinfo() {
    let xhrInfo = new XMLHttpRequest();
    xhrInfo.onload = function() {
        if (xhrInfo.status == 200) {
            let res = JSON.parse(xhrInfo.responseText)
            console.log(res);
            $('span.ininame').text(`${res[0].MBRNAME}`);
            $('#acttitle').text(`${res[0].ACTNAME}`);
            $('#loc').text(`${res[0].loc}`);
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