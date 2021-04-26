$(document).ready(function(){
    //c1-管理員管理
    function showAdm(jsonStr){
        var admRow = JSON.parse(jsonStr);
        console.log(admRow);
        $('#adm-tbody').html("");
        for( var i=0 ; i<admRow.length ; i++){
            $('#adm-tbody').append(`
                <tr id="adm${admRow[i].ADMNO}">
                    <td><div class="no-block adm-num">${admRow[i].ADMNO}</div></td>
                    <td class="adm-name">${admRow[i].ADMNAME}</td>
                    <td>${admRow[i].ADMACC}</td>
                    <td><div class="delete-icon"><i class="fas fa-trash"></i></div></td>
                </tr>
            `)
        }

        var options = {valueNames: [ 'adm-num','adm-name']};
        userList_adm = new List('c1', options);

        // 點擊刪除管理員(垃圾桶圖示)
        $('#c1 div.delete-icon').click(function(){
            $('#c1 div.alert-block-delete').css('display','block');
            let admno = $(this).parent().parent().attr("id");
            $('#adm-delete .admno').text(`${admno.substr(3)}`);
            $('#adm-delete input[name="admno"]').val(`${admno.substr(3).trim()}`);
        })
    }

    function getAdm(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
                showAdm(xhr.responseText)
            }else{
                alert( xhr.status );
            }
        }  
        var url = "./php/7/getAdm_JSON.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
    getAdm();


    // 點擊新增管理員
    $('#c1 div.add-administrator').click(function(){
        $('#c1 div.alert-block-add').css('display','block');
    })

    // 新增管理員 - 點擊新增按鈕
    $('#c1 #addbtn').click(function(){
        $('#c1 #adm-add input').css('border','1px solid #4E4E6A');
        let admname = $('#admname').val().trim();
        let admacc = $('#admacc').val().trim();
        let admpws = $('#admpws').val().trim();
        if( admname == '' || admacc == '' || admpws == '' ){
            if(admname == ''){
                $('#admname').css('border','1px solid #FFD241');
            }
            if(admacc == ''){
                $('#admacc').css('border','1px solid #FFD241');
            }
            if(admpws == ''){
                $('#admpws').css('border','1px solid #FFD241');
            }
        }else{
            let xhr = new XMLHttpRequest();
            xhr.onload = function (){
                if( xhr.status == 200 ){
                    if(xhr.responseText=="no"){
                        $('#c1 #admacc').css('border','1px solid #FFD241');
                    }else{
                        let xhr1 = new XMLHttpRequest();
                        let url1 = `./php/7/getAdm_JSON.php`;
                        xhr1.open("Post", url1, true);
                        xhr1.setRequestHeader("content-type","application/x-www-form-urlencoded");
                        let data_info1 = `admname=${admname}&admacc=${admacc}&admpws=${admpws}`;
                        xhr1.send(data_info1);
                        location.href = "./admMGT.html";
                    }
                }else{
                    alert( xhr.status );
                }
            }  
            let url = `./php/7/adm_checkid.php?admacc=${admacc}`;
            xhr.open("Get", url, true);
            xhr.send(null);
        }
    })

    // 新增管理員 - 點擊取消按鈕
    $('#c1 div.cancel-btn').click(function(){
        $(this).parent().parent().css('display','none');
        $(this).parent().find('input').val('');
        $('#c1 #adm-add input').css('border','1px solid #4E4E6A');
        $('#id-repeat').css('display','none');
    });

    // 刪除管理員 - 點擊刪除(確認)按鈕
    $('#deletebtn').click(function(){
        let admno_d = $('#admno').val().trim();
        let xhr_d = new XMLHttpRequest();
        var url_d = `./php/7/getAdm_JSON.php`;
        xhr_d.open("Post", url_d, true);
        xhr_d.setRequestHeader("content-type","application/x-www-form-urlencoded");
        let data_info1 = `admno=${admno_d}`;
        xhr_d.send(data_info1);
        $('#c1 div.alert-block-delete').css('display','none');
        setTimeout(getAdm,1000);
    })

    $('#admacc').change(function(){
        let admacc = $(this).val();
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
                if(xhr.responseText=="no"){
                    $('#id-repeat').css('display','block');
                }else{
                    $('#id-repeat').css('display','none');
                }
            }else{
                alert( xhr.status );
            }
        }  
        var url = `./php/7/adm_checkid.php?admacc=${admacc}`;
        xhr.open("Get", url, true);
        xhr.send(null);
    })

})

