//================  Log / Register 
// 先抓到每個物件參考
function logRegi() {
    document.getElementById('logRegiCli').onclick = showModal;
    document.getElementById('signRegFake').onclick = signRegChange;
    document.getElementById('closeBtn').onclick = exitLogReg;
    document.getElementById('logInButton').onclick = FakerLogIn;
};
// nav顯示的登入狀態
function showModal() {
    let logStatus = document.getElementById('logStat').innerHTML;
    document.getElementById('signRegFake').innerHTML = "建立帳號";
    document.getElementById('signUpFConTitle').innerHTML = "註冊會員";
    if (logStatus == "登入/註冊") {
        document.getElementById('lightbox').style.display = "block";
    } else {
        document.getElementById('lightbox').style.display = '';
    }
};
//切換登入/註冊
function signRegChange() {
    let signRegF = document.getElementById('signRegFake');
    let title = document.getElementById('signUpFConTitle');
    if (signRegF.innerHTML == "建立帳號") {
        document.getElementById('logCarousel').style.left = '-60%';
        signRegF.innerHTML = "進行登入";
        title.innerHTML = "登入會員";
    } else if (signRegF.innerHTML == "進行登入") {
        document.getElementById('logCarousel').style.left = 0;
        signRegF.innerHTML = "建立帳號";
        title.innerHTML = "註冊會員";
    }
    //======================留著
    // if (document.getElementById('logCarousel').style.left == 0) {
    //     document.getElementById('logCarousel').style.left = '-60%';
    //     signRegF.innerHTML = "進行登入";
    //     title.innerHTML = "登入會員";
    // } else if (document.getElementById('logCarousel').style.left == '-60%') {
    //     document.getElementById('logCarousel').style.left = 0;
    //     signRegF.innerHTML = "建立帳號";
    //     title.innerHTML = "註冊會員";
    // }
};
//===================登入假帳號
function FakerLogIn(){
    let memId = document.getElementById('memIdCol');
    let memPsw = document.getElementById('memPswCol');
    let status = document.getElementById('logStat');
    if(memId.value == 'John@mail.com' && memPsw.value == 123){
        status.innerHTML = 'John/登出';
        document.getElementById('lightbox').style.display = 'none';
        document.getElementById('memId').value = "";
        document.getElementById('memPsw').value = "";
        document.getElementById('regName').value = "";
        document.getElementById('regBirth').value = "";
        document.getElementById('regId').value = "";
        document.getElementById('regPsw').value = "";
        document.getElementById('regConPsw').value = "";
        document.getElementById('regVerifi').value = "";
    }else{
        alert('輸入帳號密碼有誤!!');
    }
}
//=================登出帳號

document.getElementById('logStat').addEventListener('click',function FakerLogOut(){
    let status = document.getElementById('logStat') ;
    if(status.innerHTML != '登入/註冊'){
        status.innerHTML = '登入/註冊';
    }
})









//離開登入註冊燈箱
function exitLogReg() {
    document.getElementById('lightbox').style.display = 'none';
    // document.getElementById('logCarousel').style.right = 0;
    document.getElementById('logCarousel').style.left = 0;
    document.getElementById('memId').value = "";
    document.getElementById('memPsw').value = "";
    document.getElementById('regName').value = "";
    document.getElementById('regBirth').value = "";
    document.getElementById('regId').value = "";
    document.getElementById('regPsw').value = "";
    document.getElementById('regConPsw').value = "";
    document.getElementById('regVerifi').value = "";
}
window.addEventListener('load', logRegi, false);







//-------Modal2 Modify Code

// 先抓到每個物件參考
function logRegi2() {
    // document.getElementById('logForgetCode').onclick = showModal2;
    document.getElementById('sendCodeBack').onclick = signRegChange2;
    document.getElementById('closeBtn2').onclick = exitLogReg2;
    document.getElementById('signRegFake2').onclick = turnBackToReg;
};

//回到修改燈箱
function turnBackToReg(){
    document.getElementById('logCarousel2').style.left = 0;
    document.getElementById('logCarousel').style.left = '-60%';
    document.getElementById('lightbox2').style.display = 'none';
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('signUpFConTitle').innerHTML = '登入會員';
    document.getElementById('signRegFake').innerHTML = '進行登入';
}


// nav顯示的登入狀態
function showModal2() {
    let aa = document.getElementById('logForgetCode');
    aa.onclick = function(){
        document.getElementById('lightbox2').style.display = 'block';
        document.getElementById('lightbox2').style.opacity = 1;
    };
};
//切換登入/註冊
function signRegChange2() {
    let signRegF = document.getElementById('signRegFake2');
    let changeBtnTit = document.getElementById('signRegFake');
    let title = document.getElementById('signUpFConTitle2');
    let title1 = document.getElementById('signUpFConTitle');
    if (signRegF.innerHTML == "建立帳號") {
        document.getElementById('logCarousel2').style.left = '-60%';
        // signRegF.innerHTML = "註冊會員";
        title1.innerHTML ="進行登入";
        changeBtnTit.innerHTML = "進行登入";
    }
};
// window.resize(function(){

// })
//離開登入註冊燈箱
function exitLogReg2() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox2').style.display = 'none';
    document.getElementById('logCarousel2').style.left = 0;
    document.getElementById('memId2').value = "";
    document.getElementById('memPsw2').value = "";
    document.getElementById('regName2').value = "";
    document.getElementById('regBirth2').value = "";
    document.getElementById('regId2').value = "";
    document.getElementById('regConPsw2').value = "";
    document.getElementById('regVerifi2').value = "";
    
}
window.addEventListener('load', logRegi2, false);
window.addEventListener('load',showModal2);


//彈出漢堡
function popOutBurger(){
    let popBtn = document.getElementById('navBurgerBtn');
    let popList = document.getElementById('navRList');
    let close1 = document.getElementById('navBurgerBtnClose1');
    let close2 = document.getElementById('navBurgerBtnClose2');
    let close3 = document.getElementById('navBurgerBtnClose3');
    popList.style.left ='2000px';

    popBtn.onclick = function(){
        close1.classList.toggle('closeRotate1');
        close2.classList.toggle('closeRotate2');
        close3.classList.toggle('closeRotate3');
        if(popList.style.left =='2000px'){
            popList.style.left = '-30px';
            popList.style.opacity = 1;
            
        }else{
            popList.style.left = '2000px';
            popList.style.opacity = 0;
        }
        
    }
}

window.addEventListener('load',popOutBurger);

//回到登入燈箱
document.getElementById('ForgetBackToLog').addEventListener('click',function(){
    document.getElementById('lightbox2').style.display = 'none';
    document.getElementById('lightbox').style.display = 'block';
})
