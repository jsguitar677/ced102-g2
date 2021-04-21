// const { FALSE } = require("node-sass");

function $id(id){
	return document.getElementById(id);
}

window.addEventListener("load", function(){
  
    ReceiveCoin();
})


//經驗值圖
function ReceiveCoin(){
    var receiveCoinMileStone = document.getElementsByClassName('expPart');
    // console.log(rBtnLength);
   
    let xhr = new XMLHttpRequest(); 
    xhr.onload = function(){
        var MBRDETAIL = JSON.parse(xhr.responseText);  //MBRCOINLV: "1"   MBREXP: "100"
        console.log(MBRDETAIL);
        let coinLV= parseInt(MBRDETAIL.MBRCOINLV);
        var coinExp= parseInt(MBRDETAIL.MBREXP);
        console.log(typeof coinLV);
            
        for(let i=1; i<=(coinExp/100);i++){
            $('#expBlockHook').append(`
             <div class="expPart expRight">
                 <p>已累積${i}00經驗值</p>
                 <button id="btnExp${i}" class="comBtn2">領取50環保幣</button>
             </div>
             `)
        };
        if(coinExp - coinLV*100 >= 100){
            $(`btnExp${coinLV+1}`).removeAttr('disabled');
        }
        $('.comBtn2').click(function(){
            $(this).attr('disabled');
            let xhr1 = new XMLHttpRequest(); 
            xhr1.onload = function(){
                let NewCoinLv = JSON.parse(xhr1.responseText);  //MBRCOINLV: "1"   MBREXP: "100"
                console.log(NewCoinLv);
                let NewCoinLvV = parseInt(NewCoinLv.MBRCOINLV);
                console.log(NewCoinLvV);

                if((500 - NewCoinLvV*100) < 100){
                    console.log("qqq");

                    $(this).attr('disabled');
                }else if((900 - NewCoinLvV*100) >= 100){
                    console.log("aaa");

                    $(this).attr('disabled');
                    $(`btnExp${coinLV+1}`).removeAttr('disabled');
                }
            }
            xhr1.open("post", "php/15/memberUpdataLV.php", true); //連結伺服端程式
            xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
            xhr1.send(null);
            
        })
    }
    xhr.open("post", "php/15/memberExp.php", true); //連結伺服端程式
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
    xhr.send(null);



}

