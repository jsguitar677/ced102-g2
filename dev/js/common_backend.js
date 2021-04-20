$(document).ready(function(){
    // 登入中
    function login(){
        let xhrlogin = new XMLHttpRequest();
        xhrlogin.onload = function (){
            if( xhrlogin.status == 200 ){
                let nameinfo = JSON.parse(xhrlogin.responseText);
                console.log(nameinfo);
                if( nameinfo == "" || nameinfo == null){
                    location.href="./backend_login.html";
                }else{
                    $('#username').text(`${nameinfo}`);
                }
            }else{
                alert( xhrlogin.status );
            }
        }  
        let urllogin = `./php/7/backend_header.php`;
        xhrlogin.open("Get", urllogin, true);
        xhrlogin.send(null);
    }
    login();
    // 登出中
    function logout(){
        let xhrlogout = new XMLHttpRequest();  
        let urllogout = `./php/7/backend_logout.php`;
        xhrlogout.open("Get", urllogout, true);
        xhrlogout.send(null);
    }
    $('#sign-out').click(function(){
        logout();
        location.href="./backend_login.html";
    })
    //====================================管理員管理============================================
    //取消按鈕案件
    $('div.cancel-btn').click(function(){
        $(this).parent().parent().css('display','none');
        $(this).parent().find('input').val('');
    });
    //跳窗不關效果
    $('div.alert-block').click(function(){
        $(this).css('display','block');
        let alert = new TimelineMax({
            repeat:2,
        });
        alert.to('form.alert',0.05,{
            borderColor: '#FFD241',
        }).to('form.alert',0.05,{
            borderColor: '#4E4E6A',
        })
    })
    $('form.alert').click(function(e){
        e.stopPropagation();
    });
    
    //====================================會員管理============================================
    $('#c2 div.delete-icon').click(function(){
        $('#c2 div.alert-block-delete').css('display','block');
        let mbrno = $(this).parent().parent().attr("id");
        $('#mem-delete .mbrno').text(`${mbrno.substr(3)}`);
        $('#mem-delete input[name="mbrno"]').val(`${mbrno.substr(3).trim()}`);
    })
    $('#c2 label.toggle-btn').click(function(){
        let mbrno = $(this).parent().parent().attr("id");
        $('#c2 div.alert-block-stop').css('display','block');
        $('#mem-stop .mbrno').text(`${mbrno.substr(3)}`);
        $('#mem-stop input[name="mbrno"]').val(`${mbrno.substr(3).trim()}`);
        if($(this).find('input').prop("checked")){
            $('#c2 #stop-text').text('停權?');
            $('#stop-cancel').click(function(){
                let val = $(this).parent().find('input').val();
                $(`#c2 #mem${val} input`).prop('checked',false);
                $('#c2 div.alert-block-stop').css('display','none');
            })
        }else{
            $('#c2 #stop-text').text('復權?');
            $('#stop-cancel').click(function(){
                let val = $(this).parent().find('input').val();
                $(`#c2 #mem${val} input`).prop("checked",true);
                $('#c2 div.alert-block-stop').css('display','none');
            })
        }
    })

    var options = {valueNames: [ 'mem-num','mem-name']};
    userList_mem = new List('c2', options);

    //====================================商品管理============================================
    //點擊新增商品
    $('#c3 div.add').click(function(){
        $('#c3 div.alert-block-add').css('display','block');
    })
    //新增商品取消按鈕案件
    $('#c3 div.add-cancel-btn').click(function(){
        $(this).parent().parent().parent().css('display','none');
        $(this).parent().parent().find('input').val('');
        $(this).parent().parent().find('textarea').val('');
        $(this).parent().parent().find('input').prop('checked',false);

    });
    $('#c3 div.edit-icon').click(function(){
        $('#c3 div.alert-block-edit').css('display','block');
    })
    $('#c3 div.edit-cancel-btn').click(function(){
        $(this).parent().parent().parent().css('display','none');
    });

    var options = {valueNames: [ 'prod-num','prod-name']};
    userList_mem = new List('c3', options);


    //====================================訂單管理============================================
    
    $('#c4 div.view-icon').click(function(){
        $('#c4 div.alert-block-view').css('display','block');
    })

    var options = {valueNames: [ 'ord-num','mem-num','mem-name']};
    userList_ord = new List('c4', options);

    //====================================檢舉管理============================================
    $('#c5 label.toggle-btn').click(function(){
        let rptno = $(this).parent().parent().attr("id");
        $('#c5 div.alert-block-audit').css('display','block');
        let commno = $(this).parent().parent().find('td.message-num').text();
        $('#rpt-audit .commno').text(`${commno}`);
        $('#rpt-audit input[name="REPORTNO"]').val(`${rptno.substr(3).trim()}`);
        if($(this).find('input').prop("checked")){
            $('#c5 #audit-cancel').click(function(){
                let val = $(this).parent().find('input').val();
                $(`#c5 #rpt${val} input`).prop('checked',false);
                $('#c5 div.alert-block-audit').css('display','none');
            })
        }else{
            $('#c5 #audit-cancel').click(function(){
                let val = $(this).parent().find('input').val();
                $(`#c5 #rpt${val} input`).prop("checked",true);
                $('#c5 div.alert-block-audit').css('display','none');
            })
        }
    })

    var options = {valueNames: [ 'rpt-num','rpt-mem-num','rpt-mem-name','message-num']};
    userList_rpt = new List('c5', options);

    //====================================活動審核管理============================================


    //====================================活動花絮管理============================================
    //點擊編輯花絮
    $('#c7 div.edit-icon').click(function(){
        $('#c7 div.alert-block-edit').css('display','block');
    })
    //取消按鈕
    $('#c7 div.edit-cancel-btn').click(function(){
        $(this).parent().parent().parent().css('display','none');
    });
    var options = {valueNames: ['ah-num','ah-name','ah-loc']};
    userList_ah = new List('c7', options);
})
