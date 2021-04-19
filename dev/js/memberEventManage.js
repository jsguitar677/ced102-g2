function $id(id){
	return document.getElementById(id);
}

function getDetail(){
    function show2(jsonStr){
        var ordRow = JSON.parse(jsonStr);
        console.log(ordRow.MBRNO);  
        // ---------------------
        $('#manageTable').html("");
        let xhr1 = new XMLHttpRequest(); 
        xhr1.onload = function(){
            let MBRDETAIL = JSON.parse(xhr1.responseText);
            console.log(MBRDETAIL);
            var kk = MBRDETAIL.length; 
            //
            for(let i=0; i<kk; i++){  //i 0 ~ 3
            
                $('#manageTable').append(`
                <tr class="eventManagementContent">
                    <td is="actNo">${MBRDETAIL[i].ACTNO}</td>
                    <td id="actName" style="text-overflow:ellipsis;overflow:hidden;max-width: 60px;">${MBRDETAIL[i].ACTNAME}</td>
                    <td id="actSdate${i}"></td>
                    <td id="actStat">${MBRDETAIL[i].ACTSDATE}</td>
                    <td><button value="${MBRDETAIL[i].ACTNO}" id="delay${[i]}" class="comBtn3 CancelLink" style="white-space:nowrap">需要</button></td>
                    <td><button value="${MBRDETAIL[i].ACTNO}" id="actCancel${[i]}" class="comBtn4 CancelLink">取消</button></td>
                </tr>
                `)  
                    
                var ACTSTAT = MBRDETAIL[i].ACTSTAT;
                switch (ACTSTAT){
                    // 寫[i]
                    case "0":
                        document.getElementById(`actSdate${i}`).textContent="提交審核中";
                        break;
                    case "1":
                        document.getElementById(`actSdate${i}`).textContent="未通過";
                        break;
                    case "2":
                        document.getElementById(`actSdate${i}`).textContent="已通過";
                        break;
                    case "3":
                        document.getElementById(`actSdate${i}`).textContent="取消審核中";
                        break;
                    case "4":
                        document.getElementById(`actSdate${i}`).textContent="已取消";
                        break;
                    case "5":
                        document.getElementById(`actSdate${i}`).textContent="延期";
                        break;
                    default:
                        alert('提交審核中');
                }

                // ACTSDATE
                let ACTSDATE = MBRDETAIL[i].ACTSDATE;
                console.log(ACTSDATE);
                let day = new Date();
                let today = day.getFullYear()+"-"+(day.getMonth()+1)+"-"+ day.getDate();
                let ScheduleDate = ACTSDATE;
                if ( (Date.parse(ScheduleDate)).valueOf() > (Date.parse(today)).valueOf())
                {   
                    document.getElementById(`actCancel${i}`).setAttribute("disabled","true");
                    document.getElementById(`actCancel${i}`).style.cursor = "unset";

                    document.getElementById(`delay${i}`).setAttribute("disabled","true");
                    document.getElementById(`delay${i}`).textContent = "已結束";
                    document.getElementById(`delay${i}`).style.cursor = "unset";
                }
                document.getElementById(`actCancel${i}`).onclick = function (){
                    let xhr2 = new XMLHttpRequest(); 
                    xhr2.onload = function(){
                        document.getElementById(`actCancel${i}`).textContent="審核下架中";
                        document.getElementById(`actSdate${i}`).textContent="取消審核中";
                        alert("已提交到後台審核中");

                    }
                    xhr2.open("post","php/15/EventCancel.php", true);
                    xhr2.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
                    let canActvNo = `ACTNOO=${document.getElementById(`actCancel${i}`).value} & MBRNO=${ordRow.MBRNO}`;
                    xhr2.send(canActvNo);

                    // `MBRNO=${ordRow.MBRNO}&ORDERNO=${j}`;
                };
                document.getElementById(`delay${i}`).onclick = function(){
                    let xhr3 = new XMLHttpRequest(); 
                    xhr3.onload = function(){
                        alert("已確認更改活動日期");
                        // let MBRDETAIL2 = JSON.parse(xhr3.responseText);
                        console.log(xhr3.responseText);

                    }
                    xhr3.open("post","php/15/EventDelay.php", true);
                    xhr3.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
                    let canActvNo = `ACTNOO=${document.getElementById(`actCancel${i}`).value} & MBRNO=${ordRow.MBRNO}`;
                    xhr3.send(canActvNo);
                };

                
            };

            //actNo actName actSdate actStat //delay actCancel
            // $id("actNo").textContent = MBRDETAIL
            
        }
        xhr1.open("post", "php/15/memberEventManage.php", true); //連結伺服端程式
        xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
        let data_info = `MBRNO=${ordRow.MBRNO}`;
        xhr1.send(data_info);
    }
    function IfNotMemberTransefer(){
        var memberHook = document.getElementById('member_hook');
        let xhr = new XMLHttpRequest(); 
        xhr.onload = function(){
            show2(xhr.responseText);
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


// 4/14 須完成 

// 經驗值兌換  ex 點擊才拉取資料
// 1 解決會員綠色圈圈問題
// 2 問題 跳轉完才能夠跳燈箱 顯示 Line:184

// 4/15 做後半段
// 參與募款與志工紀錄
// 發起活動管理

// 4/16 做後半段
// 發起活動管理
