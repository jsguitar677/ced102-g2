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
                <tr id="mem${member[i]["MBRNO"]}">
                    <td><div class="no-block mem-num" id="BCMBRNO${i+1}">${member[i]["MBRNO"]}</div></td>
                    <td class="mem-name" id="BCMBRNAME${i+1}">${member[i]["MBRNAME"]}</td>
                    <td id="BCMLEVEL${i+1}" class="LevelJudge">${member[i]["MBREXP"]}</td>
                    <td id="BCMBRMAIL${i+1}">${member[i]["MBRMAIL"]}</td>
                    <td id="BCMBRBIRTH${i+1}">${member[i]["MBRBIRTH"]}</td>
                    <td id="BCMBRPHONE${i+1}">${member[i]["MBRPHONE"]}</td>
                    <td id="BCMBRCOIN${i+1}">${member[i]["MBRCOIN"]}</td>
                    <td id="BCMBREXP${i+1}">${member[i]["MBREXP"]}</td>
                    <td id="BCMBRSTATE${member[i]["MBRNO"]}" class="Mbrstate">${member[i]["MBRSTAT"]}</td>
                    
                    <td>
                        <label class="toggle-btn" for="suspension${i+1}">
                            <input type="checkbox" id="suspension${i+1}" hidden>
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
    //會員狀態判斷停權或正常
    let Mbrstate = document.getElementsByClassName('Mbrstate');
    for(let i=0; i<Mbrstate.length; i++){
        if (Mbrstate[i].innerHTML == 0){
        Mbrstate[i].innerHTML = "正常";
        }else{
        Mbrstate[i].innerHTML = "停權中";
        }
    }
    $('#c2 label.toggle-btn').click(function(){
        let mbrno = $(this).parent().parent().attr("id");
        // console.log(mbrno);
        $('#c2 div.alert-block-stop').css('display','block');
        $('#mem-stop .mbrno').text(`${mbrno.substr(3)}`);
        $('#mem-stop input[name="mbrno"]').val(`${mbrno.substr(3)}`);
        if($(this).find('input').prop("checked")){
            $('#c2 #stop-text').text('停權?');
            //input的value要設定成該會員編號
            $('#mem-stop input').attr("value",`${mbrno.substr(3)}`);
            //欲執行停權的狀態，button必須送出會員狀態: 1
            $('#stopConfirm').val('1');
            $('#stop-cancel').click(function(){
                let val = $(this).parent().find('input').val();
                $(`#c2 #mem${val} input`).prop('checked',false);
                $('#c2 div.alert-block-stop').css('display','none');
            })
        }else{
            $('#c2 #stop-text').text('復權?');
            $('#stopConfirm').val('0');
            $('#stop-cancel').click(function(){
                let val = $(this).parent().find('input').val();
                $(`#c2 #mem${val} input`).prop("checked",true);
                $('#c2 div.alert-block-stop').css('display','none');
            })
        }
    })
    //刪除會員
    $('#c2 div.delete-icon').click(function(){
        $('#c2 div.alert-block-delete').css('display','block');
        let mbrno = $(this).parent().parent().attr("id");
        $('#mem-delete .mbrno').text(`${mbrno.substr(3)}`);
        $('#mem-delete input[name="mbrno"]').attr("value",`${mbrno.substr(3)}`);
    })
    $('div.cancel-btn').click(function(){
        $(this).parent().parent().css('display','none');
        $(this).parent().find('input').val('');
    });
    //停權會員
    $('#stopConfirm').click(function(){
        var parent = $(this).parent().children('.mbrno');
        var number = ($('span.mbrno').text());
        $('div.alert-block-stop').css('display','none');
        var status = $('#stop-text').text();
        var nowStatus = status.substr(0,2);
        // console.log(nowStatus);
        if(nowStatus == '停權'){
            $(`td#BCMBRSTATE${number}`).text('停權中');
            // console.log(`${number}`);
        }else{
            $(`td#BCMBRSTATE${number}`).text('正常');
        }
    })
    //刪除會員
        
}

function getMember(){
    var xhr = new XMLHttpRequest();//1.使用Ajax必須使用此物件
    xhr.onload=function (){
        if( xhr.status == 200 ){
        //modify here
        // console.log( xhr.responseText);
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


//停權會員

function stopMember(){
    var xhrS = new XMLHttpRequest();
    xhrS.onload=function (){
        if( xhrS.status == 200){
        show = JSON.parse(xhrS.responseText);
        alert('成功');
        location.href = "./memMGT.html";

        }else{
            // alert( xhrS.status );
        }
    }
    
    var url = "./php/2/memMGT_stop.php";
    xhrS.open("Get", url, true);
    xhrS.send( null );
}
window.addEventListener('load', stopMember);




//刪除會員
function DelMember(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if( xhr.status == 200){
            console.log(xhr.status,"Ok");
            location.href = "./memMGT.html";
        }else{
            console.log(xhr.status,"Prob");
            
        }
    }
    var url = './php/2/memMGT_del.php';
    xhr.open("get",url,true);
    xhr.send(null);
}

window.addEventListener('load',DelMember);