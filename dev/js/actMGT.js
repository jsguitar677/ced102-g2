$(document).ready(function(){
    //c1-管理員管理
    function showAct(jsonStr){
        var actvRow = JSON.parse(jsonStr);
        console.log(actvRow);
        for( var i=0 ; i<actvRow.length ; i++){
            // console.log(actvRow[i].ACTSDATE)
            if(actvRow[i].ACTSTAT == 0){
                var status = "提案審核中";
                let strdateL = actvRow[i].LACHDATE.substr(5)
                let repdateL = strdateL.replace('-', '/')
                let strdateA = actvRow[i].ACTSDATE.substr(5)
                let repdateA = strdateA.replace('-', '/')
                $('#addact-tbody').append(`
                    <tr id="newact${actvRow[i].ACTNO}">
                        <td>${actvRow[i].ACTNO}</td>
                        <td>${repdateL}</td>
                        <td>${repdateA}</td>
                        <td><span>${actvRow[i].ACTNAME}</span></td>
                        <td>
                            <div class="edit-icon"><i class="fas fa-marker"></i></div>
                        </td>
                    </tr>
                `)  
            }else if(actvRow[i].ACTSTAT == 1){
                var status = "未通過"
            }else if(actvRow[i].ACTSTAT == 2){
                var status = "已通過"
            }else if(actvRow[i].ACTSTAT == 3){
                var status = "取消審核中"
                let strdateA = actvRow[i].ACTSDATE.substr(5);
                let repdateA = strdateA.replace('-', '/');
                $('#cancelact-tbody').append(`
                <tr id="cclact${actvRow[i].ACTNO}">
                    <td>${actvRow[i].ACTNO}</td>
                    <td>${repdateA}</td>
                    <td><span>${actvRow[i].ACTNAME}</span></td>
                    <td><span>${actvRow[i].CANPROP}</span></td>
                    <td>
                        <div class="edit-icon"><i class="fas fa-marker"></i></div>
                    </td>
                </tr>
            `);
            }else if(actvRow[i].ACTSTAT == 4){
                var status = "取消"
            }else if(actvRow[i].ACTSTAT == 5){
                var status = "延期"
            }

            let strdate = actvRow[i].ACTSDATE.substr(5)
            let repdate = strdate.replace('-', '/')
            // console.log(repdate)
            $('#act-tbody').append(`
                <tr id="act${actvRow[i].ACTNO}">
                    <td class="act-num">${actvRow[i].ACTNO}</td>
                    <td class="mem-name">${actvRow[i].MBRNAME}</td>
                    <td>${repdate}</td>
                    <td class="act-name"><span>${actvRow[i].ACTNAME}</span></td>
                    <td class="act-loc"><span>${actvRow[i].LOC}</span></td>
                    <td>${status}</td>
                </tr>
            `)
        }

        var options = {valueNames: ['act-num','mem-name','act-name','act-loc']};
        userList_act = new List('c6', options);
        
        //點擊查看活動資訊
        $('#c6 #viewact tbody tr').click(function(){
            $('#c6 div.alert-block-view').css('display','block');
            let actno = $(this).attr("id").substr(3);
            for(let i = 0 ; i<actvRow.length ; i++){
                if(actvRow[i].ACTNO == actno){
                    if(actvRow[i].ACTSTAT == 0){
                        var status = "提案審核中";
                    }else if(actvRow[i].ACTSTAT == 1){
                        var status = "未通過";
                    }else if(actvRow[i].ACTSTAT == 2){
                        var status = "已通過";
                    }else if(actvRow[i].ACTSTAT == 3){
                        var status = "取消審核中";
                    }else if(actvRow[i].ACTSTAT == 4){
                        var status = "取消";
                    }else if(actvRow[i].ACTSTAT == 5){
                        var status = "延期";
                    };
                    $('#c6 #act-view div.top').html('');
                    $('#c6 #act-view div.date-block').html('');
                    $('#c6 #act-view div.text-block').html('');
                    $('#c6 #act-view div.goal-block').html('');

                    $('#c6 #act-view div.top').append(`
                        <label class="left">活動編號：</label><p>${actno}</p><br>
                        <label class="left">活動狀態：</label><p>${status}</p><br>
                        <label class="left">發起人編號：</label><p>${actvRow[i].MBRNO}</p><br>
                        <label class="left">發起人姓名：</label><p>${actvRow[i].MBRNAME}</p><br>
                        <label class="left">活動名稱：</label><p>${actvRow[i].ACTNAME}</p><br>
                        <label class="left">活動地點：</label><p>${actvRow[i].LOC}</p><br>
                    `)
                    $('#c6 #act-view div.date-block').append(`
                        <label class="left">提案日期：</label><p>${actvRow[i].LACHDATE}</p><br>
                        <label class="left">活動日期：</label><p>${actvRow[i].ACTSDATE}</p><br>
                        <label class="left">報名截止日期：</label><p>${actvRow[i].ACTDLINE}</p><br>
                    `)
                    if((actvRow[i].ACTSTAT <= 4) && (actvRow[i].ACTSTAT >= 3)){
                        $('#c6 #act-view div.text-block').append(`
                            <label class="left">創辦理念：</label><pre>${actvRow[i].VISION}</pre>
                            <label class="left">活動內容：</label><pre>${actvRow[i].ACTCON}</pre>
                            <label class="left">取消原因：</label><pre>${actvRow[i].CANPROP}</pre>
                        `)  
                    }else{
                        $('#c6 #act-view div.text-block').append(`
                            <label class="left">創辦理念：</label><pre>${actvRow[i].VISION}</pre>
                            <label class="left">活動內容：</label><pre>${actvRow[i].ACTCON}</pre>
                        `)  
                    }
                    $('#c6 #act-view div.goal-block').append(`
                        <h3>目標：</h3>
                        <label class="left">志工：</label><p>${actvRow[i].RECRGOAL}人</p><br>
                        <label class="left">資金：</label><p>NTD ${actvRow[i].DNTGOAL}</p><br>
                        <h3>現況：</h3>
                        <label class="left">志工：</label><p>${actvRow[i].RECRNOW}人</p><br>
                        <label class="left">資金：</label><p>NTD ${actvRow[i].DNTNOW}</p><br>
                    `)

                }
            }

        })
        // 關掉活動資訊
        $('#c6 div.close-view-btn').click(function(){
            $('#c6 div.alert-block-view').css('display','none');
        })
        //點擊: 審核新提案
        $('#c6 #addact div.edit-icon').click(function(){
            $('#c6 div.alert-block-add').css('display','block');
            let actno = $(this).parent().parent().attr("id").substr(6);
            $('#c6 #act-add input[name=addactno]').val(actno);

            $('#c6 #act-add div.top').html('');
            $('#c6 #act-add div.text-block').html('');

            for(let i = 0 ; i<actvRow.length ; i++){
                if(actvRow[i].ACTNO == actno){
                    $('#c6 #act-add div.top').append(`
                        <label class="left">活動編號：</label><p>${actno}</p><br>
                        <label class="left">發起人編號：</label><p>${actvRow[i].MBRNO}</p><br>
                        <label class="left">發起人姓名：</label><p>${actvRow[i].MBRNAME}</p><br>
                        <label class="left">活動名稱：</label><p>${actvRow[i].ACTNAME}</p><br>
                        <label class="left">活動地點：</label><p>${actvRow[i].LOC}</p><br>
                        <label class="left">提案日期：</label><p>${actvRow[i].LACHDATE}</p><br>
                        <label class="left">活動日期：</label><p>${actvRow[i].ACTSDATE}</p><br>
                        <label class="left">報名截止日期：</label><p>${actvRow[i].ACTDLINE}</p><br>
                        <label class="left">目標志工：</label><p>${actvRow[i].RECRGOAL}人</p><br>
                        <label class="left">目標資金：</label><p>NTD ${actvRow[i].DNTGOAL}</p><br>
                    `)
                    $('#c6 #act-add div.text-block').append(`
                        <label class="left">創辦理念：</label><pre>${actvRow[i].VISION}</pre>
                        <label class="left">活動內容：</label><pre>${actvRow[i].ACTCON}</pre>
                    `)  
                }
            }
        })

        //點擊: 關掉新提案
        $('#c6 div.addact-cancel-btn').click(function(){
            $(this).parent().parent().css('display','none');
            $(`#c6 #act-add input`).prop('checked',false);
        })
        //點擊: 審核欲取消提案
        $('#c6 #cancelact div.edit-icon').click(function(){
            $('#c6 div.alert-block-cancel').css('display','block');
            let actno = $(this).parent().parent().attr("id").substr(6);
            $('#c6 #act-cancel input[name=cclactno]').val(actno);

            $('#c6 #act-cancel div.top').html('');
            $('#c6 #act-cancel div.text-block').html('');

            for(let i = 0 ; i<actvRow.length ; i++){
                if(actvRow[i].ACTNO == actno){
                    $('#c6 #act-cancel div.top').append(`
                        <label class="left">活動編號：</label><p>${actno}</p><br>
                        <label class="left">發起人編號：</label><p>${actvRow[i].MBRNO}</p><br>
                        <label class="left">發起人姓名：</label><p>${actvRow[i].MBRNAME}</p><br>
                        <label class="left">活動名稱：</label><p>${actvRow[i].ACTNAME}</p><br>
                        <label class="left">活動地點：</label><p>${actvRow[i].LOC}</p><br>
                        <label class="left">活動日期：</label><p>${actvRow[i].ACTSDATE}</p><br>
                        <label class="left">報名截止日期：</label><p>${actvRow[i].ACTDLINE}</p><br>
                    `)
                    $('#c6 #act-cancel div.text-block').append(`
                        <label class="left">取消原因：</label><pre>${actvRow[i].CANPROP}</pre>
                    `)  
                }
            }
        })
        //點擊: 關閉欲取消提案
        $('#c6 div.cancelact-cancel-btn').click(function(){
            $(this).parent().parent().css('display','none');
            $(`#c6 #act-cancel input`).prop('checked',false);
        })
    }

    function getAct(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
                // console.log(xhr.responseText);
                showAct(xhr.responseText)
            }else{
                alert( xhr.status );
            }
        }
    
        var url = "./php/7/getAct_JSON.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }

    getAct();

    $('#cclsubmit').click(function(){
        let cclactno = $('#cclactno').val();
        let xhr = new XMLHttpRequest();
        if($('#cclact-nopass').prop('checked')){
            let cancelact = 2;
            let url = `./php/7/getAct_JSON.php?cclactno=${cclactno}&cancelact=${cancelact}`;
            xhr.open("Get", url, true);
            xhr.send( null );
            location.href='./actMGT.html';
        }else if($('#cclact-pass').prop('checked')){
            let cancelact = 4;
            let url = `./php/7/getAct_JSON.php?cclactno=${cclactno}&cancelact=${cancelact}`;
            xhr.open("Get", url, true);
            xhr.send( null );
            location.href='./actMGT.html';
        }else{
            alert('請選擇通過或退件')
        }
    })

    $('#addsubmit').click(function(){
        let addactno = $('#addactno').val();
        let xhr = new XMLHttpRequest();
        if($('#addact-nopass').prop('checked')){
            let addact = 1;
            let url = `./php/7/getAct_JSON.php?addactno=${addactno}&addact=${addact}`;
            xhr.open("Get", url, true);
            xhr.send( null );
            location.href='./actMGT.html';
        }else if($('#addact-pass').prop('checked')){
            let addact = 2;
            let url = `./php/7/getAct_JSON.php?addactno=${addactno}&addact=${addact}`;
            xhr.open("Get", url, true);
            xhr.send( null );
            location.href='./actMGT.html';
        }else{
            alert('請選擇通過或退件');
        }
    })


})

