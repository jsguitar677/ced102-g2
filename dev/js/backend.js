
// 網頁切換
function openPage(evt, pageState) {
var i, tabContent, tabLinks;
tabContent = document.getElementsByClassName("tabContent");
for (i = 0; i < tabContent.length; i++) {
tabContent[i].style.display = "none";

}
tabLinks = document.getElementsByClassName("tabLinks");
for (i = 0; i < tabLinks.length; i++) {
tabLinks[i].className = tabLinks[i].className.replace(" active btnColor", "");
}
document.getElementById(pageState).style.display = "block";
evt.currentTarget.className += " active btnColor";
}

document.getElementById("defaultOpen").click();



$(document).ready(function(){

    //商品管理
    var options = {valueNames: [ 'P-title','P-name']};
    userList_P = new List('P-user', options);

    $('#porMag i').click(function(){
        $('#porMag i').css('display','block');
        $('#porMag button').css('display','none');
        $('#porMag .hide2').css('display','none');
        $('#porMag .hide1').css('display','inline-block');
        $(this).parent().find('button').css('display','block');
        $(this).css('display','none');
        $(this).parent().parent().find('.hide1').css('display','none');
        $(this).parent().parent().find('.hide2').css('display','inline-block');
    });
    $('#porMag button.cancel-btn').click(function(){
        $('#porMag i').css('display','block');
        $('#porMag button').css('display','none');
        $('#porMag .hide2').css('display','none');
        $('#porMag .hide1').css('display','inline-block');
    })

    //訂單管理
    var options = {valueNames: [ 'O-number']};
    userList_O = new List('O-user', options);

    $('#ordMag .close-btn').click(function(){
        $('#ordMag .order-items').css('display','none');
    })
    $('#ordMag i.fa-sticky-note').click(function(){
        $('#ordMag .order-items').css('display','block');
    })

    //檢舉留言
    var options = {valueNames: [ 'R-number']};
    userList_R = new List('R-user', options);

    $('#reportMag i').click(function(){
        $('#reportMag div.edit').css('display','none');
        $('#reportMag i').css('display','block');
        $(this).css('display','none');
        $(this).parent().find('div').css('display','block');
    });
    $('#reportMag button.edit-btn').click(function(){
        $(this).parent().css('display','none');
        $(this).parent().parent().find('i').css('display','block');
    });

    //活動審核
    var options = {valueNames: [ 'A-title','A-name']};
    userList_A = new List('A-user', options);

    //活動花絮
    var options = {valueNames: [ 'AH-title']};
    userList_AH = new List('AH-user', options);

    $('.AH-tr').click(function(){
        $('#AH-actno').text(`${$(this).children("td:nth-child(2)").text()}`);
        $('#AH-actdate').text(`${$(this).children("td:nth-child(3)").text()}`);
        $('#AH-actname').text(`${$(this).children("td:nth-child(4)").text()}`);
        $('#AH-actloc').text(`${$(this).children("td:nth-child(5)").text()}`);
    })
})
