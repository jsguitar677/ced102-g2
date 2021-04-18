// const { FALSE } = require("node-sass");

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
            
            let btnfunction= document.getElementsByClassName('btnfunction');
            // console.log(btnfunction);
            let rBtn = document.getElementsByClassName('comBtn2');
            // let receiveCoinMileStone = document.getElementsByClassName('expPart');
            if(MBRDETAIL.MBREXP > 100){
                // for(let i = 0; i<rBtn.length; i++){
                let i = MBRDETAIL.MBRCOINLV
                //假設 i = 4
                switch(i){
                case 0:
                    rBtn.disabled = true;
                break;
                case 1 :
                    rBtn[1].disabled = false;
                break;
                case 2 :
                    rBtn[2].disabled = false;
                break;
                case 3 :
                    rBtn[3].disabled = false;
                break;
                case 4 :
                    rBtn[4].disabled = false;
                break;
                case 5 :
                    rBtn[5].disabled = false;
                break;
                case 6 :
                    rBtn[6].disabled = false;
                break;
                case 7 :
                    rBtn[7].disabled = false;
                break;
                case 8 :
                    rBtn[8].disabled = false;
                break;
                case 9 :
                    rBtn[9].disabled = false;
                break;
                case 10 :
                    rBtn[10].disabled = false;
                break;
                // }
            }
                    // if(MBRDETAIL.MBREXP < 100){
                    //     btnfunction.disabled = true;
                    //     // // btnfunction.style.backgroundColor = "black"; 
                        // receiveCoinMileStone[0].classList.add('expPartReceived');
                        // receiveCoinMileStone[0].classList.remove('expPart');
    
                    // }else{
                        // rBtn[i].onclick = function(){
                        //     receiveCoinMileStone[0].classList.add('expPartReceived');
                        //     receiveCoinMileStone[0].classList.remove('expPart');
                        //     rBtn[i].disabled = true;
                        // }
                    // }
            }else{
                rBtn.disabled = true;
            }
        
            // --------------------------------------------------------------
            // 大頭貼
            $id('proIdImg').src = MBRDETAIL.MBRPIC;
            // 姓名
            $id('memNAME').textContent =MBRDETAIL.MBRNAME;
            //memBirth
            $id('memBirth').textContent = "生日:"+ MBRDETAIL.MBRBIRTH;
            //memBIO
            $id('memBIO').textContent = MBRDETAIL.MBRBIO;
        }
        xhr1.open("post", "php/15/memberEXP.php", true); //連結伺服端程式
        xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
        let data_info = `MBRNO=${ordRow.MBRNO}`;
        xhr1.send(data_info);
    }

    function IfNotMemberTransefer(){
        var memberHook = document.getElementById('member_hook');
        let xhr = new XMLHttpRequest(); 
        xhr.onload = function(){
            show(xhr.responseText);
            
            let MBRDETAIL = JSON.parse(xhr.responseText);
            if( MBRDETAIL === 50 ){
                alert('請先登入會員帳號');
                window.location.href='./indexfront.html';
                memberHook.href="./member.html";
                return;
            } else{
                memberHook.innerHTML="返回首頁";
                memberHook.href="./indexfront.html";
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


//經驗值圖
// function ReceiveCoin(){
//     let rBtn = document.getElementsByClassName('comBtn2');
//     let receiveCoinMileStone = document.getElementsByClassName('expPart');
//     for(let i = 0; i<rBtn.length; i++){
//         rBtn[i].onclick = function(){
//             receiveCoinMileStone[0].classList.add('expPartReceived');
//             receiveCoinMileStone[0].classList.remove('expPart');
//             rBtn[i].disabled = true;
//         }
//     }
// }


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
