$(document).ready(function(){
    function showord(jsonStr){
        // console.log(1);
        var ordRow = JSON.parse(jsonStr);
        console.log(ordRow);
        for( var i=0 ; i<ordRow[0].length ; i++){
            $('#ord-tbody').append(`
                <tr id="ord${ordRow[0][i].orderno-1}">
                <td><div class="no-block ord-num" >${ordRow[0][i].orderno}</div></td>
                <td>${ordRow[0][i].orderdate}</td>
                <td class="mem-num">${ordRow[0][i].mbrno}</td>
                <td class="mem-name">${ordRow[0][i].mbrname}</td>
                <td id="orderstatus${i}">${ordRow[0][i].orderstatus}</td>
                <td id="paystat${i}">${ordRow[0][i].paystat}</td>
                <td id="shipstat${i}">${ordRow[0][i].shipstat}</td>

                <td>
                    <div class="view-icon"><i class="fas fa-paste"></i></div>
                </td>
                </tr>
            `)
            var orderstatus = ordRow[0][i].orderstatus;//訂單狀態
            switch (orderstatus){
                case "0":
                    $(`#orderstatus${i}`).text("備貨中");
                    break;
                case "1":
                    $(`#orderstatus${i}`).text("已出貨");
                    break;
                case "2":
                    $(`#orderstatus${i}`).text("退貨");
                    break;
                // default:
                //     alert('備貨中');
            }
            
            var paystat = ordRow[0][i].paystat;//訂單狀態
            switch (paystat){
                case "0":
                    $(`#paystat${i}`).text("未付款");
                    break;
                case "1":
                    $(`#paystat${i}`).text("付款失敗");
                    break;
                case "2":
                    $(`#paystat${i}`).text("超過付款時間");
                    break;
                case "3":
                    $(`#paystat${i}`).text("已付款");
                    break;
                case "4":
                    $(`#orderstatus${i}`).text("退款中");
                    break;
                case "5":
                    $('#paystat').text("已退款");
                    break;
                // default:
                //     alert('備貨中');
            }
            var shipstat = ordRow[0][i].shipstat;//訂單狀態
            switch (shipstat){
                case "0":
                    $(`#shipstat${i}`).text("備貨中");
                    break;
                case "1":
                    $(`#shipstat${i}`).text("發貨中");
                    break;
                case "2":
                    $(`#shipstat${i}`).text("已發貨");
                    break;
                // default:
                //     alert('備貨中');
            }
            
        }
        
        $('.view-icon').click(function(){
            let orderno = $(this).parent().parent().attr("id");
            let j = orderno.substr(3);
            $('.alert-block-view').css('display','block');
            $('.alert-block-view').html("");
            $('.alert-block-view').append(`
                <form id="ord-view" class="alert">
                <div class="top">
                    <label class="left">訂單編號：</label><p>${ordRow[0][j].orderno}</p><br>
                    <label class="left">訂單日期：</label><p>${ordRow[0][j].orderdate}</p><br>
                    <label class="left">會員編號：</label><p>${ordRow[0][j].mbrno}</p><br>
                    <label class="left">會員姓名：</label><p>${ordRow[0][j].mbrname}</p><br>
                </div>
                <div class="middle1">
                </div>
                <div class="middle2">
                    <label class="left">商品總價格：</label><p>NT$${ordRow[0][j].ordertoal}</p><br>
                    <label class="left">環保幣折抵：</label><p>NT$${ordRow[0][j].discount}</p><br>
                    <label class="left">結帳總價：</label><p>NT$${ordRow[0][j].propricttotal}</p><br>
                </div>
                <div class="bottom">
                    <label class="left">收貨人：</label><p>${ordRow[0][j].CONSIG}</p><br>
                    <label class="left">收貨地址：</label><p>${ordRow[0][j].POSTCODE}${ordRow[0][j].CONSIGADD}</p><br>
                    <label class="left">收貨人電話：</label><p>${ordRow[0][j].CONSIGTEL}</p><br>
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
            
            
            $('div.cancel-btn').click(function(){
                $('.alert-block-view').css('display','none');
            });
            $('form.alert').click(function(e){
                e.stopPropagation();
            });

        })
    
        var options = {valueNames: [ 'ord-num','mem-num','mem-name']};
        userList_ord = new List('c4', options);


    }

    function getOrd(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
                // console.log(xhr.responseText);
                showord(xhr.responseText);
                // console.log(111);
            }else{
                alert( xhr.status );
            }
        }  
        var url = "./php/5/getOrder_JSON.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
    getOrd();
})

