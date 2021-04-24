// *後台新增商品
$(document).ready(function(){
    let btn_AddProd = document.getElementById('addProdToMGT');
    btn_AddProd.onclick = addProdToMGT;
    function addProdToMGT(){
        let PRODCLNO = $('#PRODCLNO').val().substr(0,1);
        let PRODNAME = $('#PRODNAME').val();
        let PRODPRICE = $('input[name=PRODPRICE]').val();
        let PRODBIO = $('#PRODBIO').val();
        let PRODSTAT = 1;
        if($('#prodca').prop('checked')){
            var PRODCA = 0;
        }
        if($('#prodca1').prop('checked')){
            var PRODCA = 1;
        }
        let PRODPIC_1 = $('#PRODPIC_1').val();
        let PRODPIC_2 = $('#PRODPIC_2').val();
        let PRODPIC_3 = $('#PRODPIC_3').val();
        let PRODPIC_4 = $('#PRODPIC_4').val();
        let PRODPIC_5 = $('#PRODPIC_5').val();
        // alert(`${PRODCLNO}+${PRODNAME}+${PRODPRICE}+${PRODBIO}+${PRODSTAT}+${PRODCA}+${PRODPIC_1}`)

        var xhr_AddProd = new XMLHttpRequest();
        var url = `./php/mall/addProdToMGT.php`;
        xhr_AddProd.open("post", url, true);
        xhr_AddProd.setRequestHeader("content-type","application/x-www-form-urlencoded");
        let data_info = `PRODCLNO=${PRODCLNO}&PRODNAME=${PRODNAME}&PRODPRICE=${PRODPRICE}&PRODBIO=${PRODBIO}&PRODSTAT=${PRODSTAT}&PRODCA=${PRODCA}&PRODPIC_1=${PRODPIC_1}&PRODPIC_2=${PRODPIC_2}&PRODPIC_3=${PRODPIC_3}&PRODPIC_4=${PRODPIC_4}&PRODPIC_5=${PRODPIC_5}`;
        xhr_AddProd.send(data_info);
        // location.href = "./prodMGT.html";    
    }
});