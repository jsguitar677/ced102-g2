function $id(id){
	return document.getElementById(id);
}

function getDetail(){
    function show2(jsonStr){
        var ordRow = JSON.parse(jsonStr);
        console.log(ordRow.MBRNO);  
        // ---------------------
        $('#participateHook').html("");
        let xhr1 = new XMLHttpRequest(); 
        xhr1.onload = function(){
            let MBRDETAIL = JSON.parse(xhr1.responseText);
            console.log(MBRDETAIL);
            let funLength = MBRDETAIL[0].length
            let actvLength = MBRDETAIL[1].length

            console.log(typeof funLength);
            if(funLength == 0){
                document.getElementById("fundraWarn").style.display="block";
            }
            if(actvLength == 0){
                document.getElementById("actvWarn").style.display="block";
            }

            
            // 募款
            for(let i = 0; i < funLength ; i++){  //i 1~5   MBRDETAIL[0]
                $('#participateHook').append(`
                    <tr id="participateRecordCont">
                        <td>${MBRDETAIL[0][i].ACTNO}</td>
                        <td>${MBRDETAIL[0][i].ACTNAME}</td>
                        <td>${MBRDETAIL[0][i].FUNDSN}</td>
                        <td>${MBRDETAIL[0][i].FUNDDATE}</td>
                        <td>$:${MBRDETAIL[0][i].AMOUNT}</td>
                    </tr>
                `);


            }
            // 志工紀錄
            for(let j = 0; j < actvLength ; j++){
                
                $('#participateHook2').append(`
                <tr id="participateRecordCont" class="participateRecordContent">
                    <td>${MBRDETAIL[1][j].ACTNO}</td>
                    <td>${MBRDETAIL[1][j].ACTNAME}</td>
                    <td>${MBRDETAIL[1][j].ACTSDATE}</td>
                </tr> 
            `);

            }
            
            
        }
        xhr1.open("post", "php/15/memberPartiRecord.php", true); //連結伺服端程式
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


