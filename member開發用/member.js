
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

