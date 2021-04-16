function $id(id){
	return document.getElementById(id);
}
//筆記 注意querySelectorAll and querySelector差異
// querySelector 返回第一匹配元節點的子樹內的節點。如果 找不到匹配節點，則返回null。
// querySelectorAll 如果沒有找到匹配，則返回一個節點列表包含 節點的子樹中的所有匹配元素節點，或一個空節點列表。

//  -------------------------以下-----------fromjohn
const memInfoBoxs = document.querySelectorAll('.memInfoBox');
memInfoBoxs.forEach(function(memInfoBox){
    const infoBtn = memInfoBox.querySelector(".infoBtn");
    // console.log(infoBtn);
    infoBtn.addEventListener("click",function(){
        memInfoBoxs.forEach(function (item){
            if( item !== memInfoBox){
                // 移除
                item.classList.remove("show-text");
            }
        });
        //新增
        memInfoBox.classList.toggle("show-text");
    });
});

// 網頁切換
function openPage(evt, pageState) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active comBtn", "");
    }
    document.getElementById(pageState).style.display = "block";
    evt.currentTarget.className += " active comBtn";
    var getPages = pageState;
    switch(getPages){
        // ----11111111111111111111------------memberInfo.php----
        case 'memInfo': 
            // function show(jsonStr){
            //     // let row = JSON.parse(jsonStr);
            //     console.log(jsonsrt);
            // }
            // let xhr = new XMLHttpRequest();
            // xhr.onload = function(){
            //     if( xhr.status == 200 ){
            //         show(xhr.responseText);
            //     }else{
            //         alert( xhr.status )
            //     }
            //     // let memberText = JSON.parse(xhr.responseText);
            //     // console.log(memberText);
            // }
            // xhr.open("Get", "php/15/memberInfo.php", true); //連結伺服端程式
            // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
            // xhr.send(null);
            break;
        // ----22222222222222222222----------memberExp.php------
        case 'memExp':
            let xhr2 = new XMLHttpRequest();
            xhr2.onload = function(){
                console.log(xhr2.responseText);
            }
            xhr2.open("post", "php/15/memberExp.php", true); //連結伺服端程式
            xhr2.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
            xhr2.send(null);
            console.log('999');
            break;
        // ----33333333333333333333----------------
        case 'orderRecord':
        console.log(321);
            break;
        // ----44444444444444444444----------------
        case 'participateRecord':
        console.log(321);
            break;
        // ----55555555555555555555----------------
        case 'eventManagement':
        console.log(321);
            break;
        // ----66666666666666666666----------------
        case 'eventSave':
        console.log(321);
            break;
    }

}
document.getElementById("defaultOpen").click();


// var elem1 = document.getElementById("elemId");
// var style = window.getComputedStyle(elem1, null)



window.addEventListener("load", function(){
    // memberInfo();
})

//  -------------------------以上-----------fromjohn

//  -------------------------以下-----------from班代
var memberContentId = document.querySelectorAll('memberContent');
//點按經驗值兌換顯示背景btnDisCon2
document.getElementById('btnDisCon1').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.add('btnConMemInfo');
};
document.getElementById('btnDisCon2').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
    document.getElementById('memberContentId').classList.add('btnDisCon2Sty');
};
document.getElementById('btnDisCon3').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon4').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon5').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon6').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};

function loadBtnMem(){
    document.getElementById('memberContentId').classList.add('btnConMemInfo');
}

window.addEventListener('load',loadBtnMem);




//活動管理跳窗
function eventManagementModal(){
    var a = document.getElementsByClassName('eventManagementCancelBtn');
    for(let i = 0; i < a.length ; i++){
        a[i].onclick = function(){
            document.getElementById('eventManagementCancelModalCon').style.display = 'block';
        }
    }
    document.getElementById('eventManagementCancelModalCloseBtn').onclick = function(){
        document.getElementById('eventManagementCancelModalCon').style.display = '';
    }
    document.getElementById('eventManagementCancel').onclick = function(){
        document.getElementById('eventManagementCancelModalCon').style.display = '';
    }
}
window.addEventListener('load', eventManagementModal);

//經驗值圖
function ReceiveCoin(){
    let rBtn = document.getElementsByClassName('comBtn2');
    let receiveCoinMileStone = document.getElementsByClassName('expPart');
    for(let i = 0; i<rBtn.length; i++){
        rBtn[i].onclick = function(){
            receiveCoinMileStone[0].classList.add('expPartReceived');
            receiveCoinMileStone[0].classList.remove('expPart');
            rBtn[i].disabled = true;
        }
    }
}
window.addEventListener('load',ReceiveCoin);

new Vue({
    el:'#appMemberBriefIntro',
    data:{
        MemberBriefIntroMessage:'請輸入簡介讓大家更認識你吧...',
    },
});

//  小於一定寬度 按鈕顯示文字縮減
function resizeBtnTextEnSmall(){
    var mq = window.innerWidth;

if (mq < 1024) {
    document.getElementById('ShopSpanEnSmall').textContent = '商城消費';
    document.getElementById('VolunSpanEnSmall').innerText = '募款與志工'
    document.getElementById('ActSpanEnSmall').textContent = '活動管理';
    }else{
        document.getElementById('ShopSpanEnSmall').textContent = '商城消費紀錄';
        document.getElementById('VolunSpanEnSmall').innerText = '參與募款與志工紀錄'
        document.getElementById('ActSpanEnSmall').textContent = '活動發起管理';
    }
}
window.addEventListener('load',resizeBtnTextEnSmall);

// 寬度小於650px >> "領取環保幣"字樣縮減至"領取" // 大於650px >> 回復
function receiveCoinTextReduce(){
    var ScreenWidth = window.innerWidth;
    var textWidth = document.getElementsByClassName('comBtn2');
    if(ScreenWidth < 650){
        for(let i = 0; i < textWidth.length; i++){
            textWidth[i].innerText = '領取';
            }
        }
    else{
        for(let i = 0; i < textWidth.length; i++){
            textWidth[i].textContent = '領取50環保幣';
        }
    }
}

window.addEventListener('resize',receiveCoinTextReduce);

//募款與志工活動連結按鈕字樣縮減
function AttendEnSmallBtnTxt(){
    var ScreenWidth = window.innerWidth;
    var textWidth = document.getElementsByClassName('ActLink');
    if(ScreenWidth < 574){
        for(let i = 0; i < textWidth.length; i++){
            textWidth[i].innerText = '連結';
            }
        }
    else{
        for(let i = 0; i < textWidth.length; i++){
            textWidth[i].textContent = '活動連結';
        }
    } 
}
window.addEventListener('resize',AttendEnSmallBtnTxt);
//  -------------------------以上-----------from班代

//  -------------------------以下-----------fromjohn
// -------------4/14-------------------------------

function IfNotMemberTransefer(){
    var memberHook = document.getElementById('member_hook');
    // console.log(memberHook.href);
    let xhr = new XMLHttpRequest(); 
    xhr.onload = function(){
        let MBRMAIL = JSON.parse(xhr.responseText);
        if( MBRMAIL === 50 ){
            alert('請先登入會員帳號');
            window.location.href='./indexfront.html';
            memberHook.href="./member.html";
            // AccountListLogBtn  問題 跳轉完才能夠跳燈箱 顯示
            // setcookie("userss","100",time(3600));
            // $id('wholeScreenOverlay3').style.display = 'block';
            // document.body.style.overflow = 'hidden';
            return;
        } else{
            memberHook.innerHTML="返回首頁";
            memberHook.href="./indexfront.html";
        }
        
    }
    xhr.open("get","php/15/getMemInfo.php", true);
    xhr.send(null);
};

function IfMemberLogOut(){
    document.cookie = 99;
    window.location.href='./indexfront.html';
};
//  -------------------------以上-----------fromjohn



window.addEventListener("load", function(){
    // ------------------------如果在非會員點選會員中心
    IfNotMemberTransefer();
    // ------------------------如果在會員區登出 跳轉回首頁
    $id("LogConfirmY").addEventListener("click",IfMemberLogOut);
});



// 4/14 須完成 
// 會員資訊拉取  ex 點擊才拉取資料
// 經驗值兌換  ex 點擊才拉取資料
// 商城消費紀錄  ex 點擊才拉取資料

// 1 解決會員綠色圈圈問題
// 2 問題 跳轉完才能夠跳燈箱 顯示 Line:184

// 4/15 做後半段
// 參與募款與志工紀錄
// 發起活動管理

// 4/16 做後半段
// 發起活動管理
