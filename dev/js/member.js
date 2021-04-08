//筆記 注意querySelectorAll and querySelector差異

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
}

document.getElementById("defaultOpen").click();


 
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

//取消收藏
// function cancelCollection(){
//     let cancelCollectBtn = document.getElementsByClassName('memberCollectionCancel');
//     let carouselItem = document.getElementsByClassName('item');
//     // for(let i = 0; i < cancelCollectBtn.length; i++){
//     //     cancelCollectBtn[i].onclick = function(){
//     //         carouselItem[i].remove();
//     //     }
//     // }
//         cancelCollectBtn[0].onclick = function(){
//             // carouselItem[0].remove();
//             carouselItem[0].classList.add('see');

//         }
// }

// window.addEventListener('load',cancelCollection)

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
window.addEventListener('resize',resizeBtnTextEnSmall);
