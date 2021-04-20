// *先把所有商品呈現在頁面上
$(document).ready(function(){
    function showPro(jsonStr){
        var proRow = JSON.parse(jsonStr);
        console.log(proRow);
        for( var i=0 ; i<proRow.length ; i++){
            $('#prod-tbody').append(`
                <tr id="${proRow[i].PRODNO}">
                    <td><div class="no-block prod-num">${proRow[i].PRODNO}</div></td>
                    <td>${proRow[i].PRODCLNO}</td>
                    <td class="prod-name">${proRow[i].PRODNAME}</td>
                    <td>${proRow[i].PRODPRICE}</td>
                    <td class="des"><p>${proRow[i].PRODBIO}</p></td>
                    <td>
                        <div id="imgs">
                            <div class="img"><img src="${proRow[i].PRODPIC_1}"></div>
                            <div class="img"><img src="${proRow[i].PRODPIC_2}"></div>
                            <div class="img"><img src="${proRow[i].PRODPIC_3}"></div>
                            <div class="img"><img src="${proRow[i].PRODPIC_4}"></div>
                            <div class="img"><img src="${proRow[i].PRODPIC_5}"></div>
                        </div>
                    </td>
                    <td>${proRow[i].PRODSTAT}</td>
                    <td>${proRow[i].LISTEDDATE}</td>
                    <td>
                        <label class="toggle-btn prodOnOrOff" for="suspension${i}">
                            <input type="checkbox" id="suspension${i}" hidden>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td>
                        <div class="edit-icon"><i class="fas fa-marker"></i></div>
                    </td>
            </tr>
            `)

            if(proRow[i].PRODSTAT == 0){
                $(`#suspension${i}`).prop('checked',false);
                $(`#suspension${i}`).val('0');
            }else if(proRow[i].PRODSTAT == 1){
                $(`#suspension${i}`).prop('checked',true);
                $(`#suspension${i}`).val('1');
            }
        }

        $('.prodOnOrOff').click(function(){
            if( $(this).find('input').val() == '0' ){
                $(this).find('input').val('1');
                var prodno1 = $(this).parent().parent().attr("id");
                var xhr_changeStat1 = new XMLHttpRequest();
                var url11 = `./php/mall/prodChangeStat_JSON.php?prodstat=1&prodno=${prodno1}`;
                xhr_changeStat1.open("Get", url11, true);
                xhr_changeStat1.send( null );
            }
            
            if( $(this).find('input').val() == '1'){
                $(this).find('input').val('0');
                var prodno = $(this).parent().parent().attr("id");
                var xhr_changeStat = new XMLHttpRequest();
                var url1 = `./php/mall/prodChangeStat_JSON.php?prodstat=0&prodno=${prodno}`;
                xhr_changeStat.open("Get", url1, true);
                xhr_changeStat.send( null );
             }
         })



        var options = {valueNames: [ 'prod-num','prod-name']};
        userList_mem = new List('c3', options);
    }

    function getPro(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
                showPro(xhr.responseText)
            }else{
                alert( xhr.status );
            }
        }  
        var url = "./php/mall/getProdsMGT_JSON.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }
    getPro();


// // *商品上架或下架
//     var prodOnOrOff = document.getElementById('prodOnOrOff');
//     prodOnOrOff.onclick = function(){
//         if('如果狀態是0'){
//             '就把狀態改為1'
//         }else if('如果狀態是1'){
//             '就把狀態改為0'
//         }
//         function changeStat(){
//             let xhr_ChangeStat = new XMLHttpRequest();
//             xhr_ChangeStat.onload = function (){
//                 if( xhrxhr_ChangeStat.status == 200 ){
//                     changeStat(xhr_ChangeStat.responseText)
//                 }else{
//                     alert( xhr_ChangeStat.status );
//                 }
//             }  
//             var url = "./php/mall/updateProdStat_JSON.php";
//             xhr.open("Get", url, true);
//             xhr.send( null );
//         }
//         getPro();
//     }













    
})




