function navTlFn (){
    var All_BgBtn = document.getElementById('All_BgBtn');

    All_BgBtn.onclick = function(){
        //使用timelineMax
        // navListTl.to('#All_BgBtnListIt1',1,{ x: 2000}).to('#All_BgBtnListIt2',1,{x: 2000}).to('#All_BgBtnListIt3',1,{x:2000}).to('#All_BgBtnListIt4',1,{x:2000})
        //開關
        All_BgBtn.classList.toggle('BgBtnClickedEffect');
        //若有點按登入圖示，會被關掉
        
        // console.log(All_BgBtn.classList[0]);
        if(All_BgBtn.classList[0] == 'BgBtnClickedEffect'){
            
            // 影片遮蔽
            // videoFixed.style.zIndex = -2;

            //點按Nav後方動畫
            TweenMax.to('#SlideNav',.4,{
                x:2000,
                opacity:1,
            });

            TweenMax.to('#All_BgBtnListIt1',.4,{
                x:2000,
                opacity:1,
                // ease: Power2.easeOut,
            });
            
            TweenMax.to('#All_BgBtnListIt2',.4,{
                x:2000,
                opacity:1,
                delay:.2,
                // ease: Power2.easeOut,
            });
            TweenMax.to('#All_BgBtnListIt3',.4,{
                x:2000,
                opacity:1,
                delay:.4,
                // ease: Power2.easeOut,

            });
            TweenMax.to('#All_BgBtnListIt4',.4,{
                x:2000,
                opacity:1, 
                delay:.6,
                // ease: Power2.easeOut,

            });
        }else{
            // videoFixed.style.zIndex = 1;

            //點按Nav後方動畫
            TweenMax.to('#SlideNav',.4,{
                x:0,
                opacity:0,
                delay:.6,
            });

            TweenMax.to('#All_BgBtnListIt4',.4,{
                x:0,
                opacity:0,
                
                // ease: Power2.easeOut,

            });
            
            TweenMax.to('#All_BgBtnListIt3',.4,{
                x:0,
                opacity:0,
                delay:.2,
                // ease: Power2.easeOut,

            });
            TweenMax.to('#All_BgBtnListIt2',.4,{
                x:0,
                opacity:0,
                delay:.4,
                // ease: Power2.easeOut,

            });
            TweenMax.to('#All_BgBtnListIt1',.4,{
                x:0,
                opacity:0, 
                delay:.6,
                // ease: Power2.easeOut,

            });
        }
        var LockScroll = document.getElementsByTagName('body')[0];
        LockScroll.classList.toggle('dialogOpen');
        
    }
}


// ============ 註冊登入的 JS
function $id(id){
	return document.getElementById(id);
}

let memberText;
// $id('memberBell').style.display="block";

    //"帳戶選單燈箱"判斷 "登入/登出按鍵狀態"
    function IdentifyLorRStatus(){
        var LogInMemId = document.getElementById('LogInMemId');
        var LogInMemIdPhoto = document.getElementById('LogInMemIdPhoto');
        var AccountListLogBtn = document.getElementById('AccountListLogBtn');
        if(LogInMemId.textContent != ''){
            AccountListLogBtn.textContent = '登出';
        }else{
            AccountListLogBtn.textContent = '登入';
        }

    }


    //============  狀態:尚未登入時 >> 彈跳登入註冊燈箱
    function LogReg(){
        var Log_RegBtn = document.getElementById('Log_RegBtn');
        var LogRegClsBtn = document.getElementById('LogRegClsBtn');
        var LogRegClsBtn2 = document.getElementById('LogRegClsBtn2');
        var wholeScreenOverlay = document.getElementById('wholeScreenOverlay');
        var LogInMemId = document.getElementById('LogInMemId');
        var wholeScreenOverlay2 = document.getElementById('wholeScreenOverlay2');
        var LogConfirmY = document.getElementById('LogConfirmY');
        var LogConfirmN = document.getElementById('LogConfirmN');
        var All_RListUL = document.getElementById('All_RListUL');
        var RegToLog = document.getElementById('RegToLog');
        var wholeScreenOverlay3 = document.getElementById('wholeScreenOverlay3');
        var LogRegClsBtn3 = document.getElementById('LogRegClsBtn3');
        var LogToReg = document.getElementById('LogToReg');
        var AccountList = document.getElementById('AccountList');
        var AccountListRegBtn = document.getElementById('AccountListRegBtn');
        var AccountListLogBtn = document.getElementById('AccountListLogBtn');
        var LogInMemIdPhoto = document.getElementById('LogInMemIdPhoto');
        //點按人形註冊圖示開啟帳戶選單燈箱(由上方往下彈出)
        Log_RegBtn.onclick = function(){
        //    AccountList.classList.toggle('AccountListToggle');
            if(AccountList.style.top == '-200px'){
                AccountList.style.opacity = 1;
                AccountList.style.top = '50px';
                AccountList.style.transition = 'all .5s';
                // AccountList.classList.toggle('AccountListToggle');
                return false;
            }else{
                AccountList.style.opacity = 0;
                AccountList.style.top = '-200px';
                AccountList.style.transition = 'all .5s';

                // AccountList.classList.toggle('AccountListToggle');
                return false;
            }
        }

        //在  "帳戶選單燈箱"  點按開啟  "註冊燈箱"
        AccountListRegBtn.onclick = function(){
            wholeScreenOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        //在  "帳戶選單燈箱"  點按開啟  "登入/登出燈箱"
            //目前為登入狀態時
        AccountListLogBtn.onclick = function(){
            var LogInMemId = document.getElementById('LogInMemId');
            if(LogInMemId.textContent != ''){//狀態: 已登入欲登出
                
                wholeScreenOverlay2.style.display = 'block';
                document.getElementById('GeneralModal').textContent = '您確定要登出嗎?';
                document.getElementById('LogConfirmY').style.display = 'inline';
                document.getElementById('LogConfirmN').style.display = 'inline';
                document.body.style.overflow = 'hidden';
            }else{//狀態:未登入欲登入
                
                wholeScreenOverlay3.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }

        
        
        // 確定登出燈箱/帳密輸入錯誤燈箱 跳出
        LogConfirmY.onclick = function(){
            //帳密輸入錯誤燈箱點暗確定
            if(GeneralModal.textContent =='輸入錯誤請重試'){
                wholeScreenOverlay3.style.display = 'block';
                wholeScreenOverlay2.style.display = 'none';
                document.getElementById('Overlay3Form').reset();

            }
            //您確定要登出嗎?  登入資訊: 照片 & 名稱刪除
            else{
                let xhr = new XMLHttpRequest(); 
                xhr.onload = function(){
                    $id('LogInMemId').textContent = '';
                    $id('LogInMemIdPhoto').style.display = 'none';
                    wholeScreenOverlay.style.display = 'none';
                    wholeScreenOverlay2.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    AccountListLogBtn.textContent = '登入';
                    AccountList.style.top = '-200px';
                    AccountList.style.opacity = '0';
                    // 登出後綠色球球消失
                    $id('memberBell').style.display="none";
                    // 登出後註冊按鈕就顯現
                    $id('AccountListReg').style.display = "block";
                }
                xhr.open("get","php/15/logout.php");
                xhr.send(null);                
                // document.getElementById('AccountList').classList.toggle('AccountListToggle');
            }
        }


        //點按登入燈箱關閉鈕
        LogRegClsBtn.onclick = function(){
            wholeScreenOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            $id('OverlayForm').reset();
        }

        //點按登出燈箱關閉鈕>> 關閉暗幕 & 關閉燈箱
        LogRegClsBtn2.onclick = function(){
            wholeScreenOverlay2.style.display = 'none';
            document.body.style.overflow = 'auto';
            //因為共用這個燈箱，關閉要回復原狀
            LogConfirmY.style.display = 'inlineBlock';
            LogConfirmN.style.display= 'inlineBlock';
        }
        //點按登出取消鈕 >> 關閉暗幕 & 關閉燈箱
        LogConfirmN.onclick = function(){
            wholeScreenOverlay2.style.display = 'none';
            document.body.style.overflow = 'auto';
        }


        //在註冊燈箱點按登入切換會員登入燈箱
        document.getElementById('RegToLog').onclick = function(){
            
            //登入燈箱出現
            wholeScreenOverlay3.style.display = 'block';

            //將註冊燈箱並關閉
            wholeScreenOverlay.style.display = 'none';
            
            //註冊燈箱資料清除
            document.getElementById('OverlayForm').reset();

        }


        //進入登入燈箱內
            //點按關閉紐關閉登入燈箱
        LogRegClsBtn3.onclick = function(){
            wholeScreenOverlay3.style.display = 'none';
            document.body.style.overflow = 'auto';
            //登入燈箱資訊清除
            $id("MBRMAIL").value = '';
            $id("MBRPSW").value = '';
        }

        LogToReg.onclick = function(){
            wholeScreenOverlay3.style.display = 'none';
            wholeScreenOverlay.style.display = 'block';
            document.getElementById('Overlay3Form').reset();
        }
            //登入燈箱 >> 進行登入
        var LogInModalLogInBtn = document.getElementById('LogInModalLogInBtn');
        var GeneralModal = document.getElementById('GeneralModal');
        // var LogInModalMemId = document.getElementById('LogInModalMemId').value;
        // var LogInModalMemPsw = document.getElementById('LogInModalMemPsw').value;
        var LogInMemIdPhoto = document.getElementById('LogInMemIdPhoto');
        var LogInMemId = document.getElementById('LogInMemId');

        
        // var member;
        LogInModalLogInBtn.onclick = function(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                let memberText = JSON.parse(xhr.responseText);
                if( memberText.MBRNAME){
                    // 彈跳視窗------------
                    GeneralModal.textContent = memberText.MBRNAME+' Welcome back!';
                    wholeScreenOverlay2.style.display = 'block';
                    setTimeout(function(){
                        $id('wholeScreenOverlay2').style.display = 'none';
                    },3000)
                    // -------------------
                    
                    wholeScreenOverlay3.style.display = 'none';
                    LogConfirmY.style.display = 'none';
                    LogConfirmN.style.display = 'none';
                    LogInMemIdPhoto.style.display = 'flex';
                    //寫入會員的姓名
                    LogInMemId.textContent = memberText.MBRNAME;
                    // 登入後綠色球球出現
                    $id('memberBell').style.display="block";
                    // 登入後註冊按鈕就消失
                    $id('AccountListReg').style.display = "none";
                    
                    $id('All_RListUL').style.marginTop = '0px';
                    //清除登入燈箱資訊
                    $id('Overlay3Form').reset();
                    $id('AccountListLogBtn').textContent = '登出';
                    //關閉註冊圖示顯示div
                    AccountList.style.top = '-200px';
                    AccountList.style.opacity = '0';
                    //解鎖螢幕
                    document.body.style.overflow = 'auto';
                }else{
                    GeneralModal.textContent = '輸入錯誤請重試'
                    //清除登入燈箱資訊
                    $id('Overlay3Form').reset();
                    wholeScreenOverlay3.style.display = 'none';
                    wholeScreenOverlay2.style.display = 'block';
                }
            }
            xhr.open("post", "php/15/login.php", true); //連結伺服端程式
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
            let data_info = `MBRMAIL=${$id("MBRMAIL").value}&MBRPSW=${$id("MBRPSW").value}`;
            xhr.send(data_info);
        }

        
        // 登入燈箱 跳轉到忘記密碼燈箱
        $id('ForgetPsw').onclick = function(){
                //清除登入燈箱資訊
                $id('Overlay3Form').reset();
                //關閉登入燈箱
                wholeScreenOverlay3.style.display = 'none';
                //開啟申請忘記密碼燈箱
                wholeScreenOverlay4.style.display = 'block'
        }

    }


    // =======================  忘記密碼燈箱
    function ForgetApplyNewPsw(){
        //跳到建立帳號登箱
        var LogToReg2 = document.getElementById('LogToReg2');
        var ForgetPswB2LogIn = document.getElementById('ForgetPswB2LogIn');
        var SendPswToMailBtn = document.getElementById('SendPswToMailBtn');
        LogToReg2.onclick = function(){
            $id('Overlay4Form').reset();
            $id('wholeScreenOverlay4').style.display = 'none';
            $id('wholeScreenOverlay').style.display = 'block';
        }
        ForgetPswB2LogIn.onclick = function(){
            $id('Overlay4Form').reset();
            $id('wholeScreenOverlay4').style.display = 'none';
            $id('wholeScreenOverlay3').style.display = 'block';
        }
        SendPswToMailBtn.onclick = function(){
            $id('Overlay4Form').reset();
            $id('wholeScreenOverlay4').style.display = 'none';
            $id('wholeScreenOverlay5').style.display = 'block';
        }
        var LogRegClsBtn4 = document.getElementById('LogRegClsBtn4');
        LogRegClsBtn4.onclick = function(){
            $id('Overlay4Form').reset();
            $id('wholeScreenOverlay4').style.display = 'none';
        }
    }
    

    //=============== 修改密碼登箱

    function ModifiedPsw(){
        var LogToReg5 = document.getElementById('LogToReg5');
        //點按建立新帳號
        LogToReg5.onclick = function(){
            //清除燈箱資料,跳出修改密碼登箱,回到註冊燈箱
            $id('Overlay5Form').reset();
            $id('wholeScreenOverlay5').style.display = 'none';
            $id('wholeScreenOverlay').style.display = 'block';
        }
        //點按關閉紐
        var LogRegClsBtn5 = document.getElementById('LogRegClsBtn5');
        LogRegClsBtn5.onclick = function(){
            $id('Overlay5Form').reset();
            $id('wholeScreenOverlay5').style.display = 'none';
        }
        
    }


// ==================  Footer 註冊鈕
function FooterRegFn(){
    $id('wholeScreenOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

$id('FooterRegBtn').addEventListener('click',FooterRegFn);

// =================

function getMemInfo(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      let memberText = JSON.parse(xhr.responseText);
    //   console.log(memberText);
      if(memberText.MBRMAIL){
        wholeScreenOverlay3.style.display = 'none';
        LogConfirmY.style.display = 'none';
        LogConfirmN.style.display = 'none';
        LogInMemIdPhoto.style.display = 'flex';
        LogInMemId.textContent = memberText.MBRNAME;
        $id('All_RListUL').style.marginTop = '0px';
        //清除登入燈箱資訊
        $id('Overlay3Form').reset();
        $id('AccountListLogBtn').textContent = '登出';
        //關閉註冊圖示顯示div
        AccountList.style.top = '-200px';
        AccountList.style.opacity = '0';
        //解鎖螢幕
        document.body.style.overflow = 'auto';
        
      }
    }
    xhr.open("get", "php/15/getMemInfo.php", true);
    xhr.send(null);
};

// =====註冊表單=============================
// 前台註冊js判斷
function checkACFT(e){
    // 帳號
    let logMemId = document.getElementById("logMemId");
    if( logMemId.value.length < 6 && logMemId.value != null){
        alert("帳號不得低於6碼");
        e.preventDefault();
        return;
    }
    let logMemPsw = document.getElementById("logMemPsw");
    let logMemPswCheck = document.getElementById("logMemPswCheck");
    if( logMemPsw.value.length < 6){
        alert("密碼長度必須為6-15位");
        e.preventDefault();
        return;
    }
    if( logMemPswCheck.value.length < 6){
        alert("密碼長度必須為6-15位");
        e.preventDefault();
        return;
    }
    if(logMemPsw.value !== logMemPswCheck.value){
        alert("密碼與確認密碼必須相同");
        e.preventDefault();
        return;
    }
    
    var numRegex = /\D/g;
    let logMemMobileCheck = document.getElementById("logMemMobileCheck");
    logMemMobileCheck.value = logMemMobileCheck.value.replace(numRegex,'');
    if( logMemMobileCheck.value.length != 10 || !logMemMobileCheck.value){
        alert("請輸入手機號碼10碼且必須皆為數字");
        e.preventDefault();
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log('test');
        console.log("xhr.responseText : ",xhr.responseText)
        let memberText = xhr.responseText;
        if(memberText == 1){
            alert("已成功註冊!");
        }else{
            alert("失敗!");
        }

    }
    xhr.open("post", "php/15/cread_AC.php", true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_AC = `logMemId=${$id("logMemId").value} & logMemPsw=${$id("logMemPsw").value} & logMemName=${$id("logMemName").value} & BirthYear=${$id("BirthYear").value} & logMemMobileCheck=${$id("logMemMobileCheck").value}`;
    xhr.send(data_AC);
    e.preventDefault();
}

// 提交後台判斷
    // -----檢查帳號信箱重複
    function checkId(){
        let xhr = new XMLHttpRequest();
        let logMemId = document.getElementById("logMemId");
        let createRemind = document.getElementById('createRemind')
        let createNewAcc = document.getElementById('createNewAcc')
        xhr.onload = function(){//server端已執行完畢
            console.log("onload : ", xhr.readyState);
            if(xhr.status == 200){//http status is OK
                if(xhr.responseText == 2 && logMemId.value != null){
                    createNewAcc.disabled = false;
                    createRemind.style.opacity = 0;
                    alert("此帳號可使用");
                }else{
                    createNewAcc.disabled=true
                    alert("此帳號已存在, 不可用");
                    createRemind.style.opacity = 1;
                }
            }else{
                alert(xhr.status);
            }
        } 
        
        let url = "php/15/check_AC.php";
        xhr.open("post", url, true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        let data_AD = `logMemId=${$id("logMemId").value}`;
        xhr.send(data_AD);

    };




    
window.addEventListener("load", function(){
    //----------------  帳戶選單燈箱判斷 "登入/登出按鍵狀態
    IdentifyLorRStatus();
    //----------------  動畫navTlFn
    navTlFn();
    //----------------  檢查會員是否已登入，以取回會員的資料
    getMemInfo();
    //----------------  登入會員帳號密碼
    LogReg();
    //----------------  修改密碼登箱
    ModifiedPsw();
    //----------------  忘記密碼燈箱
    ForgetApplyNewPsw();
    //----------------  前台送出密碼燈箱
    $id('createNewAcc').onclick = checkACFT;
    //----------------  後台驗證帳號姓名
    $id("checkAccountOccupied").addEventListener("click",checkId,false);
})
