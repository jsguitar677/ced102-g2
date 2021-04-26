$(function(){
    function showordinfo(jsonStr){
        let ordRowinfo = JSON.parse(jsonStr);
        console.log(ordRowinfo);
        for( var i=0 ; i<ordRowinfo[0].length ; i++){
            $('#ord-tbody').append(`
                <tr id="ord${ordRowinfo[0][i].orderno-1}">
                <td><div class="no-block ord-num" >${ordRowinfo[0][i].orderno}</div></td>
                <td>${ordRowinfo[0][i].orderdate}</td>
                <td class="mem-num">${ordRowinfo[0][i].mbrno}</td>
                <td class="mem-name">${ordRowinfo[0][i].mbrname}</td>
                <td id="orderstatus${i}">${ordRowinfo[0][i].orderstatus}</td>
                <td id="paystat${i}">${ordRowinfo[0][i].paystat}</td>
                <td id="shipstat${i}">${ordRowinfo[0][i].shipstat}</td>

                <td>
                    <div class="view-icon"><i class="fas fa-paste"></i></div>
                </td>
                </tr>
            `)
        }
        $('.view-icon').click(function(){
            let orderno = $(this).parent().parent().attr("id");
            let j = orderno.substr(3);
            $('.alert-block-view').css('display','block');
            $('.alert-block-view').html("");
            $('.alert-block-view').append(`
                <form id="ord-view" class="alert">
                <div class="top">
                    <label class="left">訂單編號：</label><p>${ordRowinfo[0][j].orderno}</p><br>
                    <label class="left">訂單日期：</label><p>${ordRowinfo[0][j].orderdate}</p><br>
                    <label class="left">會員編號：</label><p>${ordRowinfo[0][j].mbrno}</p><br>
                    <label class="left">會員姓名：</label><p>${ordRowinfo[0][j].mbrname}</p><br>
                </div>
                <div class="middle1">
                </div>
                <div class="middle2">
                    <label class="left">商品總價格：</label><p>NT$${ordRowinfo[0][j].ordertoal}</p><br>
                    <label class="left">環保幣折抵：</label><p>NT$${ordRowinfo[0][j].discount}</p><br>
                    <label class="left">結帳總價：</label><p>NT$${ordRowinfo[0][j].propricttotal}</p><br>
                </div>
                <div class="bottom">
                    <label class="left consig">收貨人：</label><p>${ordRowinfo[0][j].CONSIG}</p><br>
                    <label class="left">收貨地址：</label><p>${ordRowinfo[0][j].CONSIGADD}</p><br>
                    <label class="left">收貨人電話：</label><p>${ordRowinfo[0][j].CONSIGTEL}</p><br>
                </div>
                <div class="cancel-btn btn">關閉</div>
                </form>

            `)

                $('.middle1').append(`
                    <table id="items">
                        <tr>
                            <th>編號</th>
                            <th>名稱</th>
                            <th>單價</th>
                            <th>數量</th>
                            <th>客製圖片</th>
                        </tr>
                    </table>
                `)


            for( var k=0 ; k<ordRow[1].length ; k++){
                if( ordRow[1][k].orderno == parseInt(j)+1){
                    $('#items').append(`
                        <tr>
                            <td>${ordRow[1][k].odrsn}</td>
                            <td>${ordRow[1][k].prodname}</td>
                            <td>NT$${ordRow[1][k].price}</td>
                            <td>${ordRow[1][k].itemqun}</td>
                            <td>${ordRow[1][k].itemoic}<div class="btn">下載</div></td>
                        </tr>
                    `)


                }

            }
            
        }
    )}

        // $('#city').html("");
        // $('#city').append(`
        //     <option disabled selected hidden>縣市</option>
        // `);
        // for(let i = 0 ; i < ordRow.length ; i++){
        //     $('#city').append(`
        //         <option>${ordRow[i].CITYNAME}</option>
        //     `)
        // }
        // $('select#city').change(function(){
        //     $('#loc').html("");
        //     $('#loc').append(`
        //         <option disabled selected hidden>地點</option>
        //     `)
        //     for(let i = 0 ; i < ordRow.length ; i++){
        //         if($(this).val() == ordRow[i].CITYNAME){
        //             let str = ordRow[i].LOCNAME;
        //             let arr = str.split(",");
        //             for(let j=0 ;j<arr.length ;j++){
        //                 $('#loc').append(`
        //                     <option>${arr[j]}</option>
        //                 `)
        //             }
        //         }
        //     }

        // })
        // $('#agree-btn').click(function(){
        //     // MBRNO會員編號 (SESSION的ID抓進來)
        //     let actcity ='';
        //     for(let k = 0 ; k < ordRow.length ; k++){
        //         if($("#city").val() == `${ordRow[k].CITYNAME}`){
        //             actcity = `${ordRow[k].CITYNO}`; // ACTCITY活動縣市代號
        //         }
        //     }
        //     let orderno = $('#orderno').val();// ACTNAME活動名稱
        //     let mbrno = $('#mbrno').val(); // ACTSDATE活動日期
        //     let consig = $('#consig').val(); // ACTDLINE報名截止日期
        //     let vision = $('#vision').val();// VISION創辦理念 
        //     let actcon = $('#actcon').val()// ACTCON活動內容 
        //     let actloc  = $('#loc').val();// ACTLOC活動地點 
        //     let dntgoal = $('#dntgoal').val();// DNTGOAL募資目標
        //     let recpgoal = $('#recpgoal').val();// RECRGOAL募志工目標 
        //     if( actname == '' || actsdate == '' || actdline == '' || vision == '' || actcon == '' || $('#loc').val() == null || $("#city").val() == null || dntgoal == '' || recpgoal == '' || $('#agreement').prop("checked") == false){
        //         $('input').css('border','1px solid #07082E');
        //         $('div.part > div.description > div.checkbox-block > label').css('color','#19192F');
        //         for(let i=0 ; i < $('input').length ; i++){
        //             if(document.getElementsByTagName('input')[i].value == ''){
        //                 document.getElementsByTagName('input')[i].style.border = '1px solid #EF4325';
        //             }
        //         }
        //         $('textarea').css('border','1px solid #07082E');
        //         for(let i=0 ; i < $('textarea').length ; i++){
        //             if(document.getElementsByTagName('textarea')[i].value == ''){
        //                 document.getElementsByTagName('textarea')[i].style.border = '1px solid #EF4325';
        //             }
        //         }                
        //         $('select').css('border','1px solid #07082E');
        //         if($('#loc').val() == null){
        //             $('#loc').css('border' , '1px solid #EF4325');
        //         }                    
        //         if($("#city").val() == null){
        //             $("#city").css('border' , '1px solid #EF4325');
        //         }
        //         if($('#agreement').prop("checked") == false){
        //             $('div.part > div.description > div.checkbox-block > label').css('color','red');
        //         }
        //     }else{
        //         let xhr1 = new XMLHttpRequest();
        //         let url1 = `./php/7/initiation_info.php`;
        //         xhr1.onload = function (){
        //             if( xhr1.status == 200 ){
        //                 console.log(xhr1.responseText);
        //             }else{
        //                 alert( xhr1.status );
        //             }
        //         }
        //         xhr1.open("Post", url1, true);
        //         xhr1.setRequestHeader("content-type","application/x-www-form-urlencoded");
        //         let data_info = `actname=${actname}&actsdate=${actsdate}&actdline=${actdline}&vision=${vision}&actcon=${actcon}&actloc=${actloc}&actcity=${actcity}&dntgoal=${dntgoal}&recpgoal=${recpgoal}`;
        //         xhr1.send(data_info);
        //         location.href = "./initiation_success.html";
        //     }
        // })
    
   
   
    // }

    // function getordinfo(){
    //     let xhr = new XMLHttpRequest();
    //     xhr.onload = function (){
    //         if( xhr.status == 200 ){
    //             showordinfo(xhr.responseText);
    //         }else{
    //             alert( xhr.status );
    //         }
    //         console.log(xhr.responseText);

    //     }
        
        
    //     xhr.open("post", url, true);
    //     xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //     var url = `URLL=${"../php/5/orderform_info.php"} &`;
    //     xhr.send(url);
    // }

    // getordinfo();
})

    // function logoutstatus(){
    //     let xhrlogin = new XMLHttpRequest();
    //     xhrlogin.onload = function (){
    //         if( xhrlogin.status == 200 ){
    //             let res = JSON.parse(xhrlogin.responseText)
    //             console.log(res);
    //             if(res[0]=='nologin'){ 
    //                 location.href="./event.html";
    //             }else if(res[0].MBREXP < 100){
    //                 //須為資深會員
    //                 alert('抱歉您尚未解鎖發起提案功能，請繼續努力升級吧~');
    //                 location.href="./event.html";
    //                 $('#agree-btn').click(function(){
    //                     alert('抱歉您尚未解鎖發起提案功能，請繼續努力升級吧~');
    //                 })
    //             }
    //         }else{
    //             alert( xhrlogin.status );
    //         }
    //     }
    //     let urllogin = "./php/7/eventlogin.php";
    //     xhrlogin.open("Get", urllogin, true);
    //     xhrlogin.send( null );
    // }
    // logoutstatus();
