function $id(id){
	return document.getElementById(id);
}
//筆記 注意querySelectorAll and querySelector差異
// querySelector 返回第一匹配元節點的子樹內的節點。如果 找不到匹配節點，則返回null。
// querySelectorAll 如果沒有找到匹配，則返回一個節點列表包含 節點的子樹中的所有匹配元素節點，或一個空節點列表。
window.addEventListener("load", function(){

    // ------------------------如果在會員區登出 跳轉回首頁
    $id("LogConfirmY").addEventListener("click",IfMemberLogOut);
    
    //-------------------------募款與志工活動連結按鈕字樣縮減
    AttendEnSmallBtnTxt()
    
    //-------------------------寬度小於650px >> "領取環保幣"字樣縮減至"領取" // 大於650px >> 回復
    receiveCoinTextReduce();
    
    //-------------------------小於一定寬度 按鈕顯示文字縮減
    resizeBtnTextEnSmall();
    
    getTopDetail();

    //-------------------------經驗值圖
    // ReceiveCoin();
    
    //-------------------------活動管理跳窗
    // eventManagementModal();
    
    // $id("fileinp").addEventListener("click",preImg);

});

// editBreifIntro

$("#fileinp").change(function(){
    readURL(this);    
});
function readURL(input){

    if(input.files && input.files[0]){
  
      var reader = new FileReader();
  
      reader.onload = function (e) {
         $("#proIdImg").attr('src', e.target.result);
         $("#proHook").attr('src', e.target.result);
  
      }
  
      reader.readAsDataURL(input.files[0]);
    }
}
$('.proIdImg').change(function() {
    $('.proIdImg').attr(scr)
  });


function getTopDetail(){
    let xhr4 = new XMLHttpRequest(); 
    xhr4.onload = function(){
        // MBRPERID = parse (xhr2.responseText);
        let MBRPERID = JSON.parse(xhr4.responseText);
        // console.log(MBRPERID); 
         // 大頭貼
        $id('proIdImg').src = MBRPERID[0].MBRPIC;
        
        // 姓名
        $id('memNAME').textContent =MBRPERID[0].MBRNAME;
        //memBirth
        $id('memBirth').textContent = "生日:"+ MBRPERID[0].MBRBIRTH;
        //memBIO
        $id('memBIO').textContent = MBRPERID[0].MBRBIO;
    }
    xhr4.open("post", "php/15/memPersonal.php", true); //連結伺服端程式
    xhr4.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    xhr4.send(null);
}



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
    alert("您已登出將回到首頁");
    window.location.href='./indexfront.html';
};


