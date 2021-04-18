function $id(id){
	return document.getElementById(id);
}
//筆記 注意querySelectorAll and querySelector差異
// querySelector 返回第一匹配元節點的子樹內的節點。如果 找不到匹配節點，則返回null。
// querySelectorAll 如果沒有找到匹配，則返回一個節點列表包含 節點的子樹中的所有匹配元素節點，或一個空節點列表。
window.addEventListener("load", function(){
    // // ------------------------如果在非會員點選會員中心
    // IfNotMemberTransefer();
    // getProsonlDetail();
    // ------------------------如果在會員區登出 跳轉回首頁
    $id("LogConfirmY").addEventListener("click",IfMemberLogOut);
    
    //-------------------------募款與志工活動連結按鈕字樣縮減
    AttendEnSmallBtnTxt()
    
    //-------------------------寬度小於650px >> "領取環保幣"字樣縮減至"領取" // 大於650px >> 回復
    receiveCoinTextReduce();
    
    //-------------------------小於一定寬度 按鈕顯示文字縮減
    resizeBtnTextEnSmall();
    
    //-------------------------經驗值圖
    // ReceiveCoin();
    
    //-------------------------活動管理跳窗
    eventManagementModal();
    
});



// function getProsonlDetail(){
//     function show(jsonStr){
//         var ordRow = JSON.parse(jsonStr);
//         console.log(ordRow.MBRNO); 
//         // ---------------------
//         let xhr2 = new XMLHttpRequest(); 
//         xhr2.onload = function(){
//             // MBRPERID = parse (xhr2.responseText);
//             let MBRPERID = JSON.parse(xhr2.responseText);
//             alert(MBRPERID); 
//         }
//         xhr2.open("post", "php/15/memPersonal.php", true); //連結伺服端程式
//         xhr2.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
//         let data_info = `MBRNO=${ordRow.MBRNO}`;
//         xhr2.send(data_info);
//     }

//     function IfNotMemberTransefer(){
//         let xhr = new XMLHttpRequest(); 
//         xhr.onload = function(){
//             show(xhr.responseText);
//         }
//         xhr.open("get","php/15/getMemInfo.php", true);
//         xhr.send(null);
//     };
//     IfNotMemberTransefer();

// }


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



//活動管理跳窗
function eventManagementModal(){
    var a = document.getElementsByClassName('eventManagementCancelBtn');
    for(let i = 0; i < a.length ; i++){
        a[i].onclick = function(){
            $id('eventManagementCancelModalCon').style.display = 'block';
        }
    }
    $id('eventManagementCancelModalCloseBtn').onclick = function(){
        $id('eventManagementCancelModalCon').style.display = '';
    }
    $id('eventManagementCancel').onclick = function(){
        $id('eventManagementCancelModalCon').style.display = '';
    }
}



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

// -------------4/14-------------------------------

function IfMemberLogOut(){
    document.cookie = 99;
    window.location.href='./indexfront.html';
};



// 4/14 須完成 

// 經驗值兌換  ex 點擊才拉取資料
// 商城消費紀錄  ex 點擊才拉取資料

// 1 解決會員綠色圈圈問題
// 2 問題 跳轉完才能夠跳燈箱 顯示 Line:184

// 4/15 做後半段
// 參與募款與志工紀錄
// 發起活動管理

// 4/16 做後半段
// 發起活動管理
