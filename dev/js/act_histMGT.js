
function getactHist(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            let json = xhr.responseText;
            let actHist = JSON.parse(json);
            console.log(actHist);
            let tbody = document.getElementById('act_histTbody');
            let tbodyContent = "";
            for(let i=0;i<actHist.length;i++){
                let tRow = 
                `<tr>
                    <td><div class="no-block ah-num" id="${actHist[i].ACTNO}">${actHist[i].ACTNO}</div></td>
                    <td>${actHist[i].ACTSDATE}</td>
                    <td class="ah-name">${actHist[i].ACTNAME}</td>
                    <td class="ah-loc">${actHist[i].ACTLOC}</td>
                    <td class="des"><p>${actHist[i].RESULT}</p></td>
                    <td>
                        <div id="imgs">
                            <div class="img"><img src="${actHist[i].ACTPIC1}"></div>
                            <div class="img"><img src="${actHist[i].ACTPIC2}"></div>
                            <div class="img"><img src="${actHist[i].ACTPIC3}"></div>
                        </div>
                    </td>
                    <td>
                        <div class="edit-icon" id="edit${actHist[i].ACTNO}"><i class="fas fa-marker"></i></div>
                    </td>
                </tr>`;
                tbodyContent += tRow; 
            }
            
            tbody.innerHTML = tbodyContent;

        }else{
            alert(xhr.status);
        }
    }
    var url = "./php/2/act_histMGT.php";
    xhr.open("get", url, true);
    xhr.send(null);
}
window.addEventListener('load',function(){
    getactHist();
});


//編輯花絮
    //點擊編輯花絮
    $('#c7 div.edit-icon').click(function(){
        $('#c7 div.alert-block-edit').css('display','block');
    })
    //取消按鈕
    $('#c7 div.edit-cancel-btn').click(function(){
        $(this).parent().parent().parent().css('display','none');
    });
    var options = {valueNames: ['ah-num','ah-name','ah-loc']};
    userList_ah = new List('c7', options);