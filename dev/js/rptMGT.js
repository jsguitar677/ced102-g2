$('document').ready(function(){
    $('#c5 .edit-icon').click(function(){
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
    
})