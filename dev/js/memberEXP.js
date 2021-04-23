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
        var MBRDETAIL = JSON.parse(xhr.responseText);  
        let coinLV= parseInt(MBRDETAIL.MBRCOINLV);
        var coinExp= MBRDETAIL.MBREXP; // parseInt(MBRDETAIL.MBREXP);
            
        for(let i=1; i<=(coinExp/100);i++){
            $('#expBlockHook').append(`
             <div class="expPart expRight">
                 <p>已累積${i}00經驗值</p>
                 <button disabled id="btnExp${i}" class="comBtn2">領取50環保幣</button>
             </div>
             `)
        };
        $('.comBtn2').css('background-color','gray');
        if(coinExp - coinLV*100 >= 100){
            $(`#btnExp${coinLV+1}`).removeAttr('disabled');
            $(`#btnExp${coinLV+1}`).css('backgroundColor','#07082E');
            $(`#btnExp${coinLV+1}`).css('color','#FFFFFF');
        }
        $('.comBtn2').click(function(e){
            
            $(this).attr('disabled');
            let xhr1 = new XMLHttpRequest(); 
            xhr1.onload = function(){
                let NewCoinLv = JSON.parse(xhr1.responseText);  //MBRCOINLV: "1"   MBREXP: "100"
                console.log(NewCoinLv);
                let NewCoinLvV = parseInt(NewCoinLv.MBRCOINLV);
                console.log(NewCoinLvV);
                // $id('token').textContent = "環保幣"+memberText.MBRCOIN;
                $('#token').text(`${"環保幣"+NewCoinLv.MBRCOIN}`);
                if((coinExp - NewCoinLvV*100) < 100){
                    $('.comBtn2').attr('disabled');
                    $('.comBtn2').css('background-color','gray');
                }else if((coinExp - NewCoinLvV*100) >= 100){
                    $('.comBtn2').attr('disabled');
                    $('.comBtn2').css('backgroundColor','gray');
                    $(`#btnExp${NewCoinLvV+1}`).removeAttr('disabled');
                    $(`#btnExp${NewCoinLvV+1}`).css('backgroundColor','#07082E');
                    $(`#btnExp${NewCoinLvV+1}`).css('color','#FFFFFF');
                    
                }
            }
            xhr1.open("post", "php/15/memberUpdataLV.php", true); //連結伺服端程式
            xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
            xhr1.send(null);
            e.preventDefault();
            
        })
    }
    xhr.open("post", "php/15/memberExp.php", true); //連結伺服端程式
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
    xhr.send(null);
}

