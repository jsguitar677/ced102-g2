// //================  Log / Register 
// // 先抓到每個物件參考
// function logRegi() {
//     document.getElementById('logRegiCli').onclick = showModal;
//     document.getElementById('signRegFake').onclick = signRegChange;
//     document.getElementById('closeBtn').onclick = exitLogReg;
//     document.getElementById('logInButton').onclick = FakerLogIn;
// };
// // nav顯示的登入狀態
// function showModal() {
//     let logStatus = document.getElementById('logStat').innerHTML;
//     document.getElementById('signRegFake').innerHTML = "建立帳號";
//     document.getElementById('signUpFConTitle').innerHTML = "註冊會員";
//     if (logStatus == "登入/註冊") {
//         document.getElementById('lightbox').style.display = "block";
//     } else {
//         document.getElementById('lightbox').style.display = '';
//     }
// };
// //切換登入/註冊
// function signRegChange() {
//     let signRegF = document.getElementById('signRegFake');
//     let title = document.getElementById('signUpFConTitle');
//     if (signRegF.innerHTML == "建立帳號") {
//         document.getElementById('logCarousel').style.left = '-60%';
//         signRegF.innerHTML = "進行登入";
//         title.innerHTML = "登入會員";
//     } else if (signRegF.innerHTML == "進行登入") {
//         document.getElementById('logCarousel').style.left = 0;
//         signRegF.innerHTML = "建立帳號";
//         title.innerHTML = "註冊會員";
//     }
//     //======================留著
//     // if (document.getElementById('logCarousel').style.left == 0) {
//     //     document.getElementById('logCarousel').style.left = '-60%';
//     //     signRegF.innerHTML = "進行登入";
//     //     title.innerHTML = "登入會員";
//     // } else if (document.getElementById('logCarousel').style.left == '-60%') {
//     //     document.getElementById('logCarousel').style.left = 0;
//     //     signRegF.innerHTML = "建立帳號";
//     //     title.innerHTML = "註冊會員";
//     // }
// };
// //===================登入假帳號
// function FakerLogIn(){
//     let memId = document.getElementById('memIdCol');
//     let memPsw = document.getElementById('memPswCol');
//     let status = document.getElementById('logStat');
//     if(memId.value == 'John@mail.com' && memPsw.value == 123){
//         status.innerHTML = 'John/登出';
//         document.getElementById('lightbox').style.display = 'none';
//         document.getElementById('memId').value = "";
//         document.getElementById('memPsw').value = "";
//         document.getElementById('regName').value = "";
//         document.getElementById('regBirth').value = "";
//         document.getElementById('regId').value = "";
//         document.getElementById('regPsw').value = "";
//         document.getElementById('regConPsw').value = "";
//         document.getElementById('regVerifi').value = "";
//     }else{
//         alert('輸入帳號密碼有誤!!');
//     }
// }
// //=================登出帳號

// document.getElementById('logStat').addEventListener('click',function FakerLogOut(){
//     let status = document.getElementById('logStat') ;
//     if(status.innerHTML != '登入/註冊'){
//         status.innerHTML = '登入/註冊';
//     }
// })









// //離開登入註冊燈箱
// function exitLogReg() {
//     document.getElementById('lightbox').style.display = 'none';
//     // document.getElementById('logCarousel').style.right = 0;
//     document.getElementById('logCarousel').style.left = 0;
//     document.getElementById('memId').value = "";
//     document.getElementById('memPsw').value = "";
//     document.getElementById('regName').value = "";
//     document.getElementById('regBirth').value = "";
//     document.getElementById('regId').value = "";
//     document.getElementById('regPsw').value = "";
//     document.getElementById('regConPsw').value = "";
//     document.getElementById('regVerifi').value = "";
// }
// window.addEventListener('load', logRegi, false);







// //-------Modal2 Modify Code

// // 先抓到每個物件參考
// function logRegi2() {
//     // document.getElementById('logForgetCode').onclick = showModal2;
//     document.getElementById('sendCodeBack').onclick = signRegChange2;
//     document.getElementById('closeBtn2').onclick = exitLogReg2;
//     document.getElementById('signRegFake2').onclick = turnBackToReg;
// };

// //回到修改燈箱
// function turnBackToReg(){
//     document.getElementById('logCarousel2').style.left = 0;
//     document.getElementById('logCarousel').style.left = '-60%';
//     document.getElementById('lightbox2').style.display = 'none';
//     document.getElementById('lightbox').style.display = 'block';
//     document.getElementById('signUpFConTitle').innerHTML = '登入會員';
//     document.getElementById('signRegFake').innerHTML = '進行登入';
// }


// // nav顯示的登入狀態
// function showModal2() {
//     let aa = document.getElementById('logForgetCode');
//     aa.onclick = function(){
//         document.getElementById('lightbox2').style.display = 'block';
//         document.getElementById('lightbox2').style.opacity = 1;
//     };
// };
// //切換登入/註冊
// function signRegChange2() {
//     let signRegF = document.getElementById('signRegFake2');
//     let changeBtnTit = document.getElementById('signRegFake');
//     let title = document.getElementById('signUpFConTitle2');
//     let title1 = document.getElementById('signUpFConTitle');
//     if (signRegF.innerHTML == "建立帳號") {
//         document.getElementById('logCarousel2').style.left = '-60%';
//         // signRegF.innerHTML = "註冊會員";
//         title1.innerHTML ="進行登入";
//         changeBtnTit.innerHTML = "進行登入";
//     }
// };
// // window.resize(function(){

// // })
// //離開登入註冊燈箱
// function exitLogReg2() {
//     document.getElementById('lightbox').style.display = 'none';
//     document.getElementById('lightbox2').style.display = 'none';
//     document.getElementById('logCarousel2').style.left = 0;
//     document.getElementById('memId2').value = "";
//     document.getElementById('memPsw2').value = "";
//     document.getElementById('regName2').value = "";
//     document.getElementById('regBirth2').value = "";
//     document.getElementById('regId2').value = "";
//     document.getElementById('regConPsw2').value = "";
//     document.getElementById('regVerifi2').value = "";
    
// }
// window.addEventListener('load', logRegi2, false);
// window.addEventListener('load',showModal2);


// //彈出漢堡
// function popOutBurger(){
//     let popBtn = document.getElementById('navBurgerBtn');
//     let popList = document.getElementById('navRList');
//     let close1 = document.getElementById('navBurgerBtnClose1');
//     let close2 = document.getElementById('navBurgerBtnClose2');
//     let close3 = document.getElementById('navBurgerBtnClose3');
//     popList.style.left ='2000px';

//     popBtn.onclick = function(){
//         close1.classList.toggle('closeRotate1');
//         close2.classList.toggle('closeRotate2');
//         close3.classList.toggle('closeRotate3');
//         if(popList.style.left =='2000px'){
//             popList.style.left = '-30px';
//             popList.style.opacity = 1;
            
//         }else{
//             popList.style.left = '2000px';
//             popList.style.opacity = 0;
//         }
        
//     }
// }

// window.addEventListener('load',popOutBurger);

// //回到登入燈箱
// document.getElementById('ForgetBackToLog').addEventListener('click',function(){
//     document.getElementById('lightbox2').style.display = 'none';
//     document.getElementById('lightbox').style.display = 'block';
// })


//============== new Js
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
window.addEventListener('load',navTlFn)


// ============ 註冊登入的 JS

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

    window.addEventListener('load',IdentifyLorRStatus)

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

        // function AccountListRegBtnClicked(){
        //     wholeScreenOverlay.style.display = 'block';
        //     document.body.style.overflow = 'hidden';
        // }

        // AccountListRegBtn.addEventListener('click',AccountListRegBtnClicked)

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
                document.getElementById('LogInMemId').textContent = '';
                document.getElementById('LogInMemIdPhoto').style.display = 'none';
                wholeScreenOverlay.style.display = 'none';
                wholeScreenOverlay2.style.display = 'none';
                document.body.style.overflow = 'auto';
                // All_RListUL.style.marginTop = '0px';
                AccountListLogBtn.textContent = '登入';
                AccountList.style.top = '-200px';
                AccountList.style.opacity = '0';
                // document.getElementById('AccountList').classList.toggle('AccountListToggle');
            }
        }


        //點按登入燈箱關閉鈕
        LogRegClsBtn.onclick = function(){
            wholeScreenOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('OverlayForm').reset();
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
            document.getElementById("LogInModalMemId").value = '';
            document.getElementById("LogInModalMemPsw").value = '';
        }

        LogToReg.onclick = function(){
            wholeScreenOverlay3.style.display = 'none';
            wholeScreenOverlay.style.display = 'block';
            document.getElementById('Overlay3Form').reset();
        }
            //登入燈箱 >> 進行登入
        var LogInModalLogInBtn = document.getElementById('LogInModalLogInBtn');
        var GeneralModal = document.getElementById('GeneralModal');
        var LogInModalMemId = document.getElementById('LogInModalMemId').value;
        var LogInModalMemPsw = document.getElementById('LogInModalMemPsw').value;
        var LogInMemIdPhoto = document.getElementById('LogInMemIdPhoto');
        var LogInMemId = document.getElementById('LogInMemId');
        LogInModalLogInBtn.onclick = function(){
            if(document.getElementById('LogInModalMemId').value == "JasonFox" && document.getElementById('LogInModalMemPsw').value == 123){
                // console.log('正確');
                GeneralModal.textContent = 'Jason Fox 歡迎回來!';
                wholeScreenOverlay2.style.display = 'block';
                setTimeout(function(){
                    document.getElementById('wholeScreenOverlay2').style.display = 'none';
                },1800)
                wholeScreenOverlay3.style.display = 'none';
                LogConfirmY.style.display = 'none';
                LogConfirmN.style.display = 'none';
                LogInMemIdPhoto.style.display = 'flex';
                LogInMemId.textContent = 'Jason Fox';
                document.getElementById('All_RListUL').style.marginTop = '0px';
                //清除登入燈箱資訊
                document.getElementById('Overlay3Form').reset();
                document.getElementById('AccountListLogBtn').textContent = '登出';
                //關閉註冊圖示顯示div
                AccountList.style.top = '-200px';
                AccountList.style.opacity = '0';
                //解鎖螢幕
                document.body.style.overflow = 'auto';
            }else{
                GeneralModal.textContent = '輸入錯誤請重試'
                //清除登入燈箱資訊
                document.getElementById('Overlay3Form').reset();
                wholeScreenOverlay3.style.display = 'none';
                wholeScreenOverlay2.style.display = 'block';
            }
        }

        // 登入燈箱 跳轉到忘記密碼燈箱
        document.getElementById('ForgetPsw').onclick = function(){
                //清除登入燈箱資訊
               document.getElementById('Overlay3Form').reset();
                //關閉登入燈箱
                wholeScreenOverlay3.style.display = 'none';
                //開啟申請忘記密碼燈箱
                wholeScreenOverlay4.style.display = 'block'
        }

    }


    window.addEventListener('load',LogReg);


    // =======================  忘記密碼燈箱
    function ForgetApplyNewPsw(){
        //跳到建立帳號登箱
        var LogToReg2 = document.getElementById('LogToReg2');
        var ForgetPswB2LogIn = document.getElementById('ForgetPswB2LogIn');
        var SendPswToMailBtn = document.getElementById('SendPswToMailBtn');
        LogToReg2.onclick = function(){
            document.getElementById('Overlay4Form').reset();
            document.getElementById('wholeScreenOverlay4').style.display = 'none';
            document.getElementById('wholeScreenOverlay').style.display = 'block';
        }
        ForgetPswB2LogIn.onclick = function(){
            document.getElementById('Overlay4Form').reset();
            document.getElementById('wholeScreenOverlay4').style.display = 'none';
            document.getElementById('wholeScreenOverlay3').style.display = 'block';
        }
        SendPswToMailBtn.onclick = function(){
            document.getElementById('Overlay4Form').reset();
            document.getElementById('wholeScreenOverlay4').style.display = 'none';
            document.getElementById('wholeScreenOverlay5').style.display = 'block';
        }
        var LogRegClsBtn4 = document.getElementById('LogRegClsBtn4');
        LogRegClsBtn4.onclick = function(){
            document.getElementById('ForgetMemId').reset();
            document.getElementById('wholeScreenOverlay4').style.display = 'none';
        }
    }
    
    window.addEventListener('load',ForgetApplyNewPsw);

    //=============== 修改密碼登箱

    function ModifiedPsw(){
        var LogToReg5 = document.getElementById('LogToReg5');
        //點按建立新帳號
        LogToReg5.onclick = function(){
            //清除燈箱資料,跳出修改密碼登箱,回到註冊燈箱
            document.getElementById('Overlay5Form').reset();
            document.getElementById('wholeScreenOverlay5').style.display = 'none';
            document.getElementById('wholeScreenOverlay').style.display = 'block';
        }
        //點按關閉紐
        var LogRegClsBtn5 = document.getElementById('LogRegClsBtn5');
        LogRegClsBtn5.onclick = function(){
            document.getElementById('Overlay5Form').reset();
            document.getElementById('wholeScreenOverlay5').style.display = 'none';
        }
        
    }

    window.addEventListener('load',ModifiedPsw);

    // function scrollSensor(){
    //     var scrollTopVar = document.body.scrollTop;
    //     var headerChange = document.getElementById('header');
    //     if(scrollTopVar > 20 ){
    //         headerChange.style.backgroundColor = 'white';
    //     }
    // }

    // window.addEventListener('load',scrollSensor);

// window.onscroll = function() {
//     scrollFunction();
// };

// function scrollFunction() {
//     var AllSt0 =  document.querySelectorAll('.st0');
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("header").style.backgroundColor = "white";
//         document.getElementById('All_BgBtnIt1').style.backgroundColor = '#1D1C4C';
//         document.getElementById('All_BgBtnIt2').style.backgroundColor = '#1D1C4C';
//         document.getElementById('All_BgBtnIt3').style.backgroundColor = '#1D1C4C';
//         document.getElementsByClassName('fa-user')[0].style.color = '#1D1C4C';
//         document.getElementsByClassName('fa-shopping-cart')[0].style.color = '#1D1C4C';
//         document.getElementsByClassName('fa-bell')[0].style.color = '#1D1C4C';
//         // AllSt0.style.color = 'blue';
//         for(i = 0; i < AllSt0.length; i++){
//             AllSt0[i].style.fill = '#1D1C4C';
//         }
        
//     } else{
//         document.getElementById("header").style.backgroundColor = "transparent";
//         document.getElementById('All_BgBtnIt1').style.backgroundColor = 'white';
//         document.getElementById('All_BgBtnIt2').style.backgroundColor = 'white';
//         document.getElementById('All_BgBtnIt3').style.backgroundColor = 'white';
//         document.getElementsByClassName('fa-user')[0].style.color = 'white';
//         document.getElementsByClassName('fa-shopping-cart')[0].style.color = 'white';
//         document.getElementsByClassName('fa-bell')[0].style.color = 'white';
//         for(i = 0; i < AllSt0.length; i++){
//             AllSt0[i].style.fill = 'white';
//         }
//     }
// }

// ==================  Footer 註冊鈕
function FooterRegFn(){
    document.getElementById('wholeScreenOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

document.getElementById('FooterRegBtn').addEventListener('click',FooterRegFn);