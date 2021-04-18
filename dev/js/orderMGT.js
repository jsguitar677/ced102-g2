$(document).ready(function(){
    function showord(jsonStr){
        // console.log(1);
        var ordRow = JSON.parse(jsonStr);
        console.log(ordRow);
        for( var i=0 ; i<ordRow.length ; i++){
            $('#ord-tbody').append(`
                <tr id="ord${ordRow[i].orderno-1}">
                <td><div class="no-block ord-num" >${ordRow[i].orderno}</div></td>
                <td>${ordRow[i].orderdate}</td>
                <td class="mem-num">${ordRow[i].mbrno}</td>
                <td class="mem-name">${ordRow[i].mbrname}</td>
                <td>處理中</td>
                <td>已付款</td>
                <td>備貨中</td>
                <td>
                    <label class="toggle-btn" for="shipment">
                        <input type="checkbox" id="shipment" hidden>
                        <span class="slider"></span>
                    </label>
                </td>
                <td>
                    <div class="view-icon"><i class="fas fa-paste"></i></div>
                </td>
                </tr>
            `)
        }
        $('.view-icon').click(function(){
            $('.alert-block-view').css('display','block');
        })

        $('.view-icon').click(function(){
            let orderno = $(this).parent().parent().attr("id");
            let i = orderno.substr(3)
            $('.alert-block-view').css('display','block');
            $('.alert-block-view').append(`
                <form id="ord-view" class="alert">
                <div class="top">
                    <label class="left">訂單編號：</label><p>${ordRow[i].orderno}</p><br>
                    <label class="left">訂單日期：</label><p>${ordRow[i].orderdate}</p><br>
                    <label class="left">會員編號：</label><p>${ordRow[i].mbrno}</p><br>
                    <label class="left">會員姓名：</label><p>${ordRow[i].mbrname}</p><br>
                </div>
                <div class="middle1">
                    <table>
                        <tr>
                            <th>編號</th>
                            <th>名稱</th>
                            <th>單價</th>
                            <th>數量</th>
                            <th>客製圖片</th>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>環保手機殼</td>
                            <td>NTD 1,697</td>
                            <td>1</td>
                            <td><div class="btn">下載</div></td>
                        </tr>
                    </table>
                </div>
                <div class="middle2">
                    <label class="left">商品總價格：</label><p>NTD 1,697</p><br>
                    <label class="left">環保幣折抵：</label><p>NTD 20</p><br>
                    <label class="left">結帳總價：</label><p>NTD 1,677</p><br>
                </div>
                <div class="bottom">
                    <label class="left">收貨人：</label><p>${ordRow[i].CONSIG}</p><br>
                    <label class="left">收貨地址：</label><p>${ordRow[i].POSTCODE}${ordRow[i].CONSIGADD}</p><br>
                    <label class="left">收貨人電話：</label><p>${ordRow[i].CONSIGTEL}</p><br>
                </div>
                <div class="cancel-btn btn">關閉</div>
                </form>

            `)
            $('div.cancel-btn').click(function(){
                $('.alert-block-view').css('display','none');
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

