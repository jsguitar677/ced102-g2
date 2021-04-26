$(document).ready(function(){
    // 把所有商品呈現在頁面上=====================================================================
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

        //「新增按鈕&燈箱」& 「編輯按鈕&燈箱」=====================================================================
        // %%%%%%%%%%%%%%%%%%%%%%%%
        // 點擊「新增」則燈箱出現
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
        // 點擊「編輯」則燈箱出現
        // 燈箱內，此商品的原資訊也會出現
        $('#c3 div.edit-icon').click(function(){
            $('#c3 div.alert-block-edit').css('display','block');
            let prodno = $(this).parent().parent().attr("id");
            prodno = parseInt(prodno);
            //處理商品類別PRODCLNO
            // $('#PRODCLNO_updated').val(`${proRow[prodno-1].PRODCLNO}`);
            // alert($('#PRODCLNO_updated').val(`${proRow[prodno-1].PRODCLNO}`))
            
            if(proRow[prodno-1].PRODCLNO == 0){
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+1})`).prop('selected',true);
            }else if(proRow[prodno-1].PRODCLNO == 1)
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+2})`).prop('selected',true);
            }else if(proRow[prodno-1].PRODCLNO == 2){
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+3})`).prop('selected',true);
            }else if(proRow[prodno-1].PRODCLNO == 3){
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+4})`).prop('selected',true);
            }else if(proRow[prodno-1].PRODCLNO == 4){
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+5})`).prop('selected',true);
            }else if(proRow[prodno-1].PRODCLNO == 5){
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+6})`).prop('selected',true);
            }else if(proRow[prodno-1].PRODCLNO == 6){
                $(`#PRODCLNO option:nth-child(${parseInt(proRow[prodno-1].PRODCLNO)+7})`).prop('selected',true);
            }

            $('#PRODNAME_updated').val(`${proRow[prodno-1].PRODNAME}`);
            $('#PRODPRICE_updated').val(`${proRow[prodno-1].PRODPRICE}`);
            $('#PRODBIO_updated').val(`${proRow[prodno-1].PRODBIO}`);
            //處理商品是否客製PRODCA
            if(proRow[prodno-1].PRODCA == 0){
                $('#prodca0_updated').prop('checked',true)
            }else if(proRow[prodno-1].PRODCA == 1){
                $('#prodca1_updated').prop('checked',true)

            }
            // $('#PRODCA_updated').val(`${proRow[prodno-1].PRODCA}`);


            $('#PRODPIC_1_updated').val(`${proRow[prodno-1].PRODPIC_1}`);
            $('#PRODPIC_2_updated').val(`${proRow[prodno-1].PRODPIC_2}`);
            $('#PRODPIC_3_updated').val(`${proRow[prodno-1].PRODPIC_3}`);
            $('#PRODPIC_4_updated').val(`${proRow[prodno-1].PRODPIC_4}`);
            $('#PRODPIC_5_updated').val(`${proRow[prodno-1].PRODPIC_5}`);
        })
        // 點擊「取消」則燈箱隱藏
        $('#c3 div.edit-cancel-btn').click(function(){
            $(this).parent().parent().parent().css('display','none');
        });
    
        var options = {valueNames: [ 'prod-num','prod-name']};
        userList_mem = new List('c3', options);
        // %%%%%%%%%%%%%%%%%%%%%%%%5


        //直接調整上架與下架狀態
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

        // 點擊「新增」商品
        $('#addProdToMGT').click(function(){
            let prodclno = $('#PRODCLNO').val();
            let prodname = $('#PRODNAME').val();
            let prodprice = $('#PRODPRICE').val();
            let prodbio = $('#PRODBIO').val();
            let prodpic_1 = $('#PRODPIC_1').val();
            let prodpic_2 = $('#PRODPIC_2').val();
            let prodpic_3 = $('#PRODPIC_3').val();
            let prodpic_4 = $('#PRODPIC_4').val();
            let prodpic_5 = $('#PRODPIC_5').val();
            let prodca
            if($('#prodca0').prop('checked')){
                prodca = 0;
            }
            if($('#prodca1').prop('checked')){
                prodca = 1;
            }
            // alert('A')
            // alert(`${parseInt(prodclno)}+${prodname}+${prodprice}+${prodbio}+${prodca}+${prodpic_1}`)
            var xhr_addprod = new XMLHttpRequest();
            var url_addprod = `./php/mall/addProdToMGT.php`;
            xhr_addprod.open("Post", url_addprod, true);
            xhr_addprod.setRequestHeader("content-type","application/x-www-form-urlencoded");
            let data_info_add = `PRODCLNO=${prodclno}&PRODNAME=${prodname}&PRODPRICE=${prodprice}&PRODBIO=${prodbio}&PRODPIC_1=${prodpic_1}&PRODPIC_2=${prodpic_2}&PRODPIC_3=${prodpic_3}&PRODPIC_4=${prodpic_4}&PRODPIC_5=${prodpic_5}&PRODCA=${prodca}`;
            xhr_addprod.send(data_info_add);

            location.href = "./prodMGT.html";
        })

        $('#updatedProdToMGT').click(function(){

            // let prodclno = $('#PRODCLNO_updated').val();
            // let prodname = $('#PRODNAME_updated').val();
            // let prodprice = $('#PRODPRICE_updated').val();
            // let prodbio = $('#PRODBIO_updated').val();
            // let prodpic_1 = $('#PRODPIC_1_updated').val();
            // let prodpic_2 = $('#PRODPIC_2_updated').val();
            // let prodpic_3 = $('#PRODPIC_3_updated').val();
            // let prodpic_4 = $('#PRODPIC_4_updated').val();
            // let prodpic_5 = $('#PRODPIC_5_updated').val();
            // let prodca
            // if($('#prodca0_updated').prop('checked')){
            //     prodca = 0;
            // }
            // if($('#prodca1_updated1').prop('checked')){
            //     prodca = 1;
            // }
            // // alert('A')
            // // alert(`${parseInt(prodclno)}+${prodname}+${prodprice}+${prodbio}+${prodca}+${prodpic_1}`)
            // var xhr_updatedprod = new XMLHttpRequest();
            // var url_updatedprod = `./php/mall/updatedProdToMGT.php`;
            // xhr_updatedprod.open("Post", url_updatedprod, true);
            // xhr_updatedprod.setRequestHeader("content-type","application/x-www-form-urlencoded");
            // let data_info_updated = `PRODCLNO=${prodclno}&PRODNAME=${prodname}&PRODPRICE=${prodprice}&PRODBIO=${prodbio}&PRODPIC_1=${prodpic_1}&PRODPIC_2=${prodpic_2}&PRODPIC_3=${prodpic_3}&PRODPIC_4=${prodpic_4}&PRODPIC_5=${prodpic_5}&PRODCA=${prodca}`;
            // xhr_updatedprod.send(data_info_updated);

            // location.href = "./prodMGT.html";
        })
    }
    getPro();












    
})




