function $id(id){
	return document.getElementById(id);
}

function getDetail(){
    function show2(jsonStr){
        var ordRow = JSON.parse(jsonStr);
        // console.log(ordRow.MBRNO);  
        // ---------------------
        let xhr1 = new XMLHttpRequest(); 
        xhr1.onload = function(){
            let MBRDETAIL = JSON.parse(xhr1.responseText);
            console.log(MBRDETAIL);
            var optionlength = MBRDETAIL.length;
            var page3form = document.getElementById('page3form');
            var alertMessage = document.getElementById('alertMessage');
            if(MBRDETAIL.length > 0){
                alertMessage.textContent="請選擇訂單!";
            }
            //判斷table秀出來
            
            var select = document.getElementById("selectDate"); 
            select.length = 1;

            select.options[0].selected = true;
            for(let i=0 ; i < optionlength ; i++ ){
                var option = document.createElement("option");
                option.setAttribute("value",MBRDETAIL[i].ORDERNO);
                option.setAttribute("class","orderClass");
                option.appendChild(document.createTextNode(MBRDETAIL[i].ORDERDATE));
                select.appendChild(option);
                select.onchange = function(){
                    $('#proItemDetail').html("");
                    //取回我要的table資料 
                    var j = select.value; // 1 or 3
                    let xhr3 = new XMLHttpRequest(); 
                    xhr3.onload = function(){
                        // 提示字關閉
                        alertMessage.style.display="none";
                        tableData = JSON.parse(xhr3.responseText);
                        var proDableData =tableData[1].length
                        for(var p = 0; p < proDableData ; p++){
                            $('#orderdate').text(tableData[0][0].PROPRICETOTAL);//商品總金額 proTotalPrice
                            $('#discount').text(tableData[0][0].DISCOUNT); //環保幣折扣 discount
                            $('#totalPrice').text(tableData[0][0].ORDERTOTAL);//總價 totalPrice
                            $('#orderdate').text(tableData[0][0].ORDERDATE);// 活動日期
                            $('#orderNo').text(j);// 訂單編號
                            var SHIPSTAT2 = tableData[0][0].ORDERSTATUS;//訂單狀態
                            switch (SHIPSTAT2){
                                case "0":
                                    $('#alreadyGetPack').text("備貨中");
                                    break;
                                case "1":
                                    $('#alreadyGetPack').text("已出貨");
                                    break;
                                case "2":
                                    $('#alreadyGetPack').text("退貨");
                                    break;
                                default:
                                    alert('沒有符合的條件');
                            }
                            var SHIPSTAT = tableData[0][0].SHIPSTAT;//送貨狀態
                            switch (SHIPSTAT){
                                case "0":
                                    $('#preparePack').text("備貨中");
                                    break;
                                case "1":
                                    $('#preparePack').text("發貨中");
                                    break;
                                case "2":
                                    $('#preparePack').text("已發貨");
                                    break;
                                case "3":
                                    $('#preparePack').text("已到貨");
                                    break;
                                case "4":
                                    $('#preparePack').text("已取貨");
                                    break;
                                case "5":
                                    $('#preparePack').text("退貨中");
                                    break;
                                case "6":
                                    $('#preparePack').text("已退貨");
                                    break;
                                default:
                                    $('#preparePack').text("等待中");
                            }
                            $('#proItemDetail').append(`
                            <tr>
                                <td>
                                    <img id="productImg" style="width:47px; height:47px" src="${tableData[1][p].ITEMOIC}"></img>
                                </td>
                                <td id="productName">${tableData[1][p].PRODNAME}</td>
                                <td id="productQty">${tableData[1][p].ITEMQUN}</td>
                                <td id="productPrice">${tableData[1][p].PRICE}</td>
                            </tr>`);
                        }
                    }
                    xhr3.open("post", "php/15/memberOrederDetail.php", true); //連結伺服端程式
                    xhr3.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
                    let data_info2 = `MBRNO=${ordRow.MBRNO}&ORDERNO=${j}`;
                    xhr3.send(data_info2);
                    if(j > 0){
                        page3form.style.display ="table";
                        
                    }else{
                        page3form.style.display ="none";
                    }
                }
            }
        }
        xhr1.open("post", "php/15/memberOrderRecord.php", true); //連結伺服端程式
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


// 4/14 須完成 

// 經驗值兌換  ex 點擊才拉取資料

// 1 解決會員綠色圈圈問題
// 2 問題 跳轉完才能夠跳燈箱 顯示 Line:184

// 4/15 做後半段
// 參與募款與志工紀錄
// 發起活動管理

// 4/16 做後半段
// 發起活動管理
