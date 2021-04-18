$(function(){
    if($(document).width()<560){
        $('#sign').html('<span class="red">*</span>活動報名截止日期');
    }
    $(window).resize(function(){
        if($(document).width()<560){
            $('#sign').html('<span class="red">*</span>活動報名截止日期');
        }else{
            $('#sign').html('<span class="red">*</span>活動報名<br> 截止日期');
        }
    })

    $('#agree-btn').click(function(e){
        if($('#agreement').prop("checked") == false){
            $('div.part > div.description > div.checkbox-block > label').css('color','red');
            e.preventDefault();
            return;
        }
    })

    function showLoc(jsonStr){
        let locRow = JSON.parse(jsonStr);
        console.log(locRow);

        $('#city').html("");
        $('#city').append(`
            <option disabled selected hidden>縣市</option>
        `);
        for(let i = 0 ; i < locRow.length ; i++){
            $('#city').append(`
                <option>${locRow[i].CITYNAME}</option>
            `)
        }
        $('select#city').change(function(){
            $('#loc').html("");
            $('#loc').append(`
                <option disabled selected hidden>地點</option>
            `)
            for(let i = 0 ; i < locRow.length ; i++){
                if($(this).val() == locRow[i].CITYNAME){
                    let str = locRow[i].LOCNAME;
                    let arr = str.split(",");
                    for(let j=0 ;j<arr.length ;j++){
                        $('#loc').append(`
                            <option>${arr[j]}</option>
                        `)
                    }
                }
            }

        })
        $('#agree-btn').click(function(){
            // MBRNO會員編號 (SESSION的ID抓進來)
            let actcity ='';
            for(let k = 0 ; k < locRow.length ; k++){
                if($("#city").val() == `${locRow[k].CITYNAME}`){
                    actcity = `${locRow[k].CITYNO}`; // ACTCITY活動縣市代號
                }
            }
            let actname = $('#actname').val();// ACTNAME活動名稱
            let actsdate = $('#actsdate').val(); // ACTSDATE活動日期
            let actdline = $('#actdline').val(); // ACTDLINE報名截止日期
            let vision = $('#vision').val();// VISION創辦理念 
            let actcon = $('#actcon').val()// ACTCON活動內容 
            let actloc  = $('#loc').val();// ACTLOC活動地點 
            let dntgoal = $('#dntgoal').val();// DNTGOAL募資目標
            let recpgoal = $('#recpgoal').val();// RECRGOAL募志工目標 
            if( actname == '' || actsdate == '' || actdline == '' || vision == '' || actcon == '' || $('#loc').val() == null || $("#city").val() == null || dntgoal == '' || recpgoal == ''){
                $('input').css('border','1px solid #07082E');
                for(let i=0 ; i < $('input').length ; i++){
                    if(document.getElementsByTagName('input')[i].value == ''){
                        document.getElementsByTagName('input')[i].style.border = '1px solid #EF4325';
                    }
                }
                $('textarea').css('border','1px solid #07082E');
                for(let i=0 ; i < $('textarea').length ; i++){
                    if(document.getElementsByTagName('textarea')[i].value == ''){
                        document.getElementsByTagName('textarea')[i].style.border = '1px solid #EF4325';
                    }
                }                
                $('select').css('border','1px solid #07082E');
                if($('#loc').val() == null){
                    $('#loc').css('border' , '1px solid #EF4325');
                }                    
                if($("#city").val() == null){
                    $("#city").css('border' , '1px solid #EF4325');
                }
            }else{
                let xhr1 = new XMLHttpRequest();
                let url1 = `./php/7/initiation_info.php`;
                xhr1.onload = function (){
                    if( xhr1.status == 200 ){
                        console.log(xhr1.responseText);
                    }else{
                        alert( xhr1.status );
                    }
                }
                xhr1.open("Post", url1, true);
                xhr1.setRequestHeader("content-type","application/x-www-form-urlencoded");
                let data_info = `actname=${actname}&actsdate=${actsdate}&actdline=${actdline}&vision=${vision}&actcon=${actcon}&actloc=${actloc}&actcity=${actcity}&dntgoal=${dntgoal}&recpgoal=${recpgoal}`;
                xhr1.send(data_info);
                location.href = "./initiation_success.html";
            }
        })
    
   
   
    }

    function getLoc(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
                showLoc(xhr.responseText);
            }else{
                alert( xhr.status );
            }
        }
        
        var url = "./php/7/initiation_info.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }

    getLoc();

    function logoutstatus(){
        let xhrlogin = new XMLHttpRequest();
        xhrlogin.onload = function (){
            if( xhrlogin.status == 200 ){
                let res = JSON.parse(xhrlogin.responseText)
                console.log(res);
                if(res[0]=='nologin'){ 
                    location.href="./event.html";
                }else if(res[0].MBREXP < 1000){
                    //須為資深會員
                    alert('抱歉您尚未解鎖發起提案功能，請繼續努力升級吧~');
                    location.href="./event.html";
                    $('#agree-btn').click(function(){
                        alert('抱歉您尚未解鎖發起提案功能，請繼續努力升級吧~');
                    })
                }
            }else{
                alert( xhrlogin.status );
            }
        }
        let urllogin = "./php/7/eventlogin.php";
        xhrlogin.open("Get", urllogin, true);
        xhrlogin.send( null );
    }
    logoutstatus();
})