$('document').ready(function(){
    $('label[for=v-f]').addClass('yellow-bg')

    $('label.card').click(function(){
        $('label.card').removeClass('yellow-bg')
        $(this).addClass('yellow-bg')
    })
    $('#v').click(function(){
        $('.donate').css('display','none');
        $('.join').css('display','block');
    })
    $('#f').click(function(){
        $('.join').css('display','none');
        $('.donate').css('display','block');
    })
    $('#v-f').click(function(){
        $('.join').css('display','block');
        $('.donate').css('display','block');
    })

    function show(jsonStr){
        let infoRow = JSON.parse(jsonStr);
        console.log(infoRow);

        $('#actname').text(`${infoRow[1][0].ACTNAME}`);
        $('#memname').val(`${infoRow[0][0].MBRNAME}`);

        $('#submitbtn').click(function(){
            let actno = location.href.split('?')[1].split('=')[1];
            if(infoRow[2]==""){
                let cellphone = $('#cellphone').val();
                let emcon = $('#emcon').val();
                let emrnumber = $('#emrnumber').val();
                let amount = $('#amount').val();
                let cardno = $('#cardno').val();
                let cvv = $('#cvv').val();
                let year = $('#year').val();
                let month = $('#month').val();
                let choose;

                function checkV(){
                    if(cellphone == "" || emcon == "" || emrnumber == "" ){
                        $('input').css('border','1px solid #07082E');
                        for(let i=0 ; i < $('input').length ; i++){
                            if(document.getElementsByTagName('input')[i].value == ''){
                                document.getElementsByTagName('input')[i].style.border = '1px solid #EF4325';
                            }
                        }
                    }else{
                        choose = 2; 
                        var data_info = `actno=${actno}&cellphone=${cellphone}&emcon=${emcon}&emrnumber=${emrnumber}&choose=${choose}`;
                        xhr1.send(data_info);
                        alert(`謝謝您的參與`);
                        location.href = "./event.html";
                    }
                }
                function checkF(){
                    if(amount == "" || cardno == "" || cvv == "" || month == "" || year == "" ){
                        $('input').css('border','1px solid #07082E');
                        for(let i=0 ; i < $('input').length ; i++){
                            if(document.getElementsByTagName('input')[i].value == ''){
                                document.getElementsByTagName('input')[i].style.border = '1px solid #EF4325';
                            }
                        }
                    }else{
                        choose = 1; 
                        var data_info = `actno=${actno}&amount=${amount}&cardno=${cardno}&choose=${choose}`;
                        xhr1.send(data_info);
                        alert(`謝謝您的捐款`);
                        location.href = "./event.html";
                    }
                }
                function checkVF(){
                    if(cellphone == "" || emcon == "" || emrnumber == "" || amount == "" || cardno == "" || cvv == "" || month == "" || year == ""){
                        $('input').css('border','1px solid #07082E');
                        for(let i=0 ; i < $('input').length ; i++){
                            if(document.getElementsByTagName('input')[i].value == ''){
                                document.getElementsByTagName('input')[i].style.border = '1px solid #EF4325';
                            }
                        }
                    }else{
                        choose = 3; 
                        var data_info = `actno=${actno}&cellphone=${cellphone}&emcon=${emcon}&emrnumber=${emrnumber}&amount=${amount}&cardno=${cardno}&choose=${choose}`;
                        xhr1.send(data_info);
                        alert(`謝謝您的參與及捐款`);
                        location.href = "./event.html";
                    }
                }

                let xhr1 = new XMLHttpRequest();
                let url1 = `./php/7/participation.php?actno=${actno}`;
                xhr1.open("Post", url1, true);
                xhr1.setRequestHeader("content-type","application/x-www-form-urlencoded");
                if($('#f').prop('checked')){
                    checkF();
                }else if($('#v').prop('checked')){
                    checkV();
                }else if($('#v-f').prop('checked')){
                    checkVF();
                }
            }
            if(infoRow[2]!=""){
                let amount = $('#amount').val();
                let cardno = $('#cardno').val();
                let cvv = $('#cvv').val();
                let year = $('#year').val();
                let month = $('#month').val();
                let choose;
                let xhr1 = new XMLHttpRequest();
                let url1 = `./php/7/participation.php?actno=${actno}`;
                xhr1.open("Post", url1, true);
                xhr1.setRequestHeader("content-type","application/x-www-form-urlencoded");
                if($('#f').prop('checked')){
                    if(amount == "" || cardno == "" || cvv == "" || month == "" || year == "" ){
                        $('input').css('border','1px solid #07082E');
                        for(let i=0 ; i < $('input').length ; i++){
                            if(document.getElementsByTagName('input')[i].value == ''){
                                document.getElementsByTagName('input')[i].style.border = '1px solid #EF4325';
                            }
                        }
                    }else{
                        choose = 1; 
                        var data_info = `actno=${actno}&amount=${amount}&cardno=${cardno}&choose=${choose}`;
                        xhr1.send(data_info);
                        alert(`謝謝您的捐款`);
                        // location.href = "./event.html";
                    }
                }else if($('#v').prop('checked')){
                    alert(`您已報名過本活動志工，您可選擇僅捐款或回到活動平台查看其他活動，謝謝您。`)
                }else if($('#v-f').prop('checked')){
                    alert(`您已報名過本活動志工，請改選"捐款"，謝謝您。`)
                }
            }
        })
    }

    function get(){
        let joinHref = location.href;
        let actno = joinHref.split('?')[1].split('=')[1];
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status ==200){
                show(xhr.responseText);
            }else{
                alert(xhr.status);
            }
        }
        let url = `./php/7/participation.php?actno=${actno}`;
        xhr.open("Get",url,true);
        xhr.send(null);
    }
    get();

})