//================  Log / Register 
// 先抓到每個物件參考
function logRegi() {
    document.getElementById('logRegiCli').onclick = showModal;
    document.getElementById('signRegFake').onclick = signRegChange;
    document.getElementById('closeBtn').onclick = exitLogReg;
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
        // document.getElementById('logCarousel').style.right = ((100)/1.6)+'%';
        document.getElementById('logCarousel').style.left = '-60%';
        // document.getel
        signRegF.innerHTML = "進行登入";
        title.innerHTML = "登入會員";
    } else if (signRegF.innerHTML == "進行登入") {
        document.getElementById('logCarousel').style.left = 0;
        signRegF.innerHTML = "建立帳號";
        title.innerHTML = "註冊會員";
    }
};
// window.resize(function(){

// })
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