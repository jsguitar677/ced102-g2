function $id(id){
	return document.getElementById(id);
}

function getDetail(){
    function show(jsonStr){
        var ordRow = JSON.parse(jsonStr);
        // console.log(ordRow.MBRNO);  //4
        // ---------------------
        let xhr1 = new XMLHttpRequest(); 
        xhr1.onload = function(){
            let MBRDETAIL = JSON.parse(xhr1.responseText);
            console.log(MBRDETAIL); 
            // 一般會員
            if(MBRDETAIL[0].MBREXP > 100){
                $id('memLevel').textContent = "資深會員";
            }else{
                $id('memLevel').textContent = "一般會員";
            };
            // 累計環保幣
            $id('mbrToken').textContent = "$" + MBRDETAIL[0].MBRCOIN  ;
            // 累計經驗值
            $id('memInfoExp').textContent = MBRDETAIL[0].MBRCOIN + "EXP";
            // 贊助累計金額
            $id('sponsorTotalMoney').textContent =  "$" + MBRDETAIL[0].MBREXP;
            // 贊助次數
            $id('sponsorTotalTime').textContent = MBRDETAIL[0].MBREXP + "次";
            // 參與活動次數
            $id('actTime').textContent = MBRDETAIL[0].MBREXP + "次";
            // 活動發起次數
            $id('hostActTime').textContent = MBRDETAIL[0].MBREXP + "次";
            
            // --------------------------------------------------------------
            // 大頭貼
            $id('proIdImg').src =MBRDETAIL[0].MBRPIC;
            // 姓名
            $id('memNAME').textContent =MBRDETAIL[0].MBRNAME;
            //memBirth
            $id('memBirth').textContent = "生日:"+ MBRDETAIL[0].MBRBIRTH;
            //memBIO
            $id('memBIO').textContent = MBRDETAIL[0].MBRBIO;
        }
        xhr1.open("post", "php/15/memberInfo.php", true); //連結伺服端程式
        xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
        let data_info = `MBRNO=${ordRow.MBRNO}`;
        xhr1.send(data_info);
    }

    function editBreifIntro (jsonStr2){ 
        console.log(jsonStr2);

    };
    
    function IfNotMemberTransefer(){
        var memberHook = document.getElementById('member_hook');
        let xhr = new XMLHttpRequest(); 
        xhr.onload = function(){
            show(xhr.responseText);
            editBreifIntro(xhr.responseText);
            
            let MBRDETAIL = JSON.parse(xhr.responseText);
            if( MBRDETAIL === 50 ){
                alert('請先登入會員帳號');
                window.location.href='./indexfront.html';
                memberHook.href="./member.html";
                return;
            } else{
                memberHook.innerHTML="返回首頁";
                memberHook.href="./indexfront.html";
                // let memid = MBRDETAIL.MBRNO
                // document.cookie = `memId=${memid}`; 
                return;
            }
        }
        xhr.open("get","php/15/getMemInfo.php", true);
        xhr.send(null);
    };
    IfNotMemberTransefer();

}

window.addEventListener("load", function(){
    getDetail();
})
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
