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
        // console.log(MBRDETAIL);
        let coinLV= parseInt(MBRDETAIL.MBRCOINLV);
        var coinExp= parseInt(MBRDETAIL.MBREXP);
        // console.log(typeof coinLV);
            
        for(let i=1; i<=(coinExp/100);i++){
            $('#expBlockHook').append(`
             <div class="expPart expRight">
                 <p>已累積${i}00經驗值</p>
                 <button disabled id="btnExp${i}" class="comBtn2">領取50環保幣</button>
             </div>
             `)
        };
        $('.comBtn2').css('background-color','red');
        if(coinExp - coinLV*100 >= 100){
            $(`#btnExp${coinLV+1}`).removeAttr('disabled');
            $(`#btnExp${coinLV+1}`).css('backgroundColor','blue');
        }
        $('.comBtn2').click(function(){
            $(this).attr('disabled');
            let xhr1 = new XMLHttpRequest(); 
            xhr1.onload = function(){
                let NewCoinLv = JSON.parse(xhr1.responseText);  //MBRCOINLV: "1"   MBREXP: "100"
                console.log(NewCoinLv);
                let NewCoinLvV = parseInt(NewCoinLv.MBRCOINLV);
                console.log(NewCoinLvV);

                if((coinExp - NewCoinLvV*100) < 100){
                    console.log("qqq");
                    $('.comBtn2').attr('disabled');
                    $('.comBtn2').css('background-color','red');
                }else if((coinExp - NewCoinLvV*100) >= 100){
                    console.log("aaa");
                    $('.comBtn2').attr('disabled');
                    $('.comBtn2').css('backgroundColor','red');
                    $(`#btnExp${NewCoinLvV+1}`).removeAttr('disabled');
                    $(`#btnExp${NewCoinLvV+1}`).css('backgroundColor','blue');
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

