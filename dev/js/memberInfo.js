function $id(id){
	return document.getElementById(id);
}

function show(){
    let xhr1 = new XMLHttpRequest(); 
    xhr1.onload = function(){
        let MBRDETAIL = JSON.parse(xhr1.responseText);
        // console.log(MBRDETAIL); 
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
        
    }
    xhr1.open("post", "php/15/memberInfo.php", true); //連結伺服端程式
    xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
    xhr1.send();
}


window.addEventListener("load", function(){
    show();
})
