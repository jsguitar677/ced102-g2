//展示從資料庫抓取的會員資料
function showMember(jsonStr){
//將PHP送過來的JSON字串轉為JS物件
    let member = JSON.parse(jsonStr); //{}
    let html;
    html = 
    `<table>
        <thead>
            <tr>
                <th>編號</th>
                <th>姓名</th>
                <th>等級</th>
                <th>帳號(信箱)</th>
                <th>生日</th>
                <th>手機</th>
                <th>環保幣</th>
                <th>經驗值</th>
                <th>狀態</th>
                <th>違規停權</th>
                <th>刪除</th>
            </tr>
        </thead>`;
        let tbodyLeftTot = "";
        for(let i=0;i<member.length;i++){
            tbodyLeftTot += `<tbody class="list">
                <tr id="mem1">
                    <td><div class="no-block mem-num" id="BCMBRNO${i+1}">${i+1}</div></td>
                    <td class="mem-name" id="BCMBRNAME${i+1}">${member[i]["MBRNAME"]}</td>
                    <td id="BCMLEVEL${i+1}" class="LevelJudge">${member[i]["MBREXP"]}</td>
                    <td id="BCMBRMAIL${i+1}">${member[i]["MBRMAIL"]}</td>
                    <td id="BCMBRBIRTH${i+1}">${member[i]["MBRBIRTH"]}</td>
                    <td id="BCMBRPHONE${i+1}">${member[i]["MBRPHONE"]}</td>
                    <td id="BCMBRCOIN${i+1}">${member[i]["MBRCOIN"]}</td>
                    <td id="BCMBREXP${i+1}">${member[i]["MBREXP"]}</td>
                    <td id="BCMBRSTATE${i+1}">${member[i]["MBRSTAT"]}</td>
                    
                    <td>
                        <label class="toggle-btn" for="suspension1">
                            <input type="checkbox" id="suspension1" checked hidden>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td>
                        <div class="delete-icon" id="deleteIcon${i+1}"><i class="fas fa-trash"></i></div>
                    </td>
                </tr>
            </tbody>`;
            }
    html = html + tbodyLeftTot + `</table>`;
    //將從Server端抓取的資料展示到"showPanel"裡
    document.getElementById("showPanel").innerHTML = html;
    //由會員經驗值判斷身分為"一般會員"或"資深會員"
    let LevelJudge = document.getElementsByClassName('LevelJudge');
    for(let i=0; i<LevelJudge.length; i++){
        if (LevelJudge[i].innerHTML == null || LevelJudge[i].innerHTML < 100){
        LevelJudge[i].innerHTML = "一般會員";
        }else{
        LevelJudge[i].innerHTML = "資深會員";
        }
    }
}

function getMember(){
    var xhr = new XMLHttpRequest();//1.使用Ajax必須使用此物件
    xhr.onload=function (){
        if( xhr.status == 200 ){
        //modify here
        console.log( xhr.responseText);
        showMember(xhr.responseText);
        }else{
            alert( xhr.status );
        }
    }
    
    var url = "./php/2/memMGT.php";
    xhr.open("Get", url, true);
    xhr.send( null );
}
window.addEventListener('load', getMember);

//================= form common_backend.js
// $('#c2 div.delete-icon').click(function(){
//     $('#c2 div.alert-block-delete').css('display','block');
//     let mbrno = $(this).parent().parent().attr("id");
//     $('#mem-delete .mbrno').text(`${mbrno.substr(3)}`);
//     $('#mem-delete input[name="mbrno"]').val(`${mbrno.substr(3).trim()}`);
// })
// $('#c2 label.toggle-btn').click(function(){
//     let mbrno = $(this).parent().parent().attr("id");
//     $('#c2 div.alert-block-stop').css('display','block');
//     $('#mem-stop .mbrno').text(`${mbrno.substr(3)}`);
//     $('#mem-stop input[name="mbrno"]').val(`${mbrno.substr(3).trim()}`);
//     if($(this).find('input').prop("checked")){
//         $('#c2 #stop-text').text('停權?');
//         $('#stop-cancel').click(function(){
//             let val = $(this).parent().find('input').val();
//             $(`#c2 #mem${val} input`).prop('checked',false);
//             $('#c2 div.alert-block-stop').css('display','none');
//         })
//     }else{
//         $('#c2 #stop-text').text('復權?');
//         $('#stop-cancel').click(function(){
//             let val = $(this).parent().find('input').val();
//             $(`#c2 #mem${val} input`).prop("checked",true);
//             $('#c2 div.alert-block-stop').css('display','none');
//         })
//     }
// })

// var options = {valueNames: [ 'mem-num','mem-name']};
// userList_mem = new List('c2', options);