
// 網頁切換
function openPage(evt, pageState) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";

}
tabLinks = document.getElementsByClassName("tabLinks");
for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active comBtn", "");
}
    document.getElementById(pageState).style.display = "block";
    evt.currentTarget.className += " active comBtn";
}

document.getElementById("defaultOpen").click();



//點按經驗值兌換顯示背景btnDisCon2


document.getElementById('btnDisCon1').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.add('btnConMemInfo');
};
document.getElementById('btnDisCon2').onclick = function(){
    document.getElementById('memberContentId').classList.add('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon3').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon4').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon5').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};
document.getElementById('btnDisCon6').onclick = function(){
    document.getElementById('memberContentId').classList.remove('btnDisCon2Sty');
    document.getElementById('memberContentId').classList.remove('btnConMemInfo');
};

function loadBtnMem(){
    document.getElementById('memberContentId').classList.add('btnConMemInfo');
}

window.addEventListener('load',loadBtnMem);
//


