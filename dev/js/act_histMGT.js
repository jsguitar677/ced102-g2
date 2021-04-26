
function getactHist(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            let json = xhr.responseText;
            let actHist = JSON.parse(json);
            // console.log(actHist);
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
            $('div.edit-icon').click(function(){
                $('#alert-block').css('display','block');
                //抓到current Id
                let curId = $(this).attr('id').substr(4);
                console.log
                // console.log(curId);
                //抓到current class index
                let curIndex = $('div.edit-icon').index($(this));
                let actno = document.getElementById('actno');
                let actdate = document.getElementById('actdate');
                let actname = document.getElementById('actname');
                let actloc = document.getElementById('actloc');
                let actart = document.getElementById('actart');
                actno.innerHTML = `${actHist[curIndex].ACTNO}`;
                actdate.innerHTML = `${actHist[curIndex].ACTSDATE}`;
                actname.innerHTML = `${actHist[curIndex].ACTNAME}`;
                actloc.innerHTML = `${actHist[curIndex].ACTLOC}`;
                actart.innerHTML = `${actHist[curIndex].RESULT}`;
                $('input[name=ACTNO]').attr("value",`${actHist[curIndex].ACTNO}`);
            })
            $('#editBtn').click(function(){
                let xhre = new XMLHttpRequest();
                var urle ="./php/2/act_histMGT_pass.php";
                xhre.open("post",urle,true);
                // xhre.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                var editactno = $('#actno').text();
                var content = $('#actart').val();
                //省略
                // alert(`${editactno}+${content}`);
                // let data_info = `ACTNO=${editactno}&RESULT=${content}`;
                let data_info = new FormData(document.getElementById('ah-edit'))
                xhre.send(data_info);
                // getactHist;
            })

        }else{
            alert(xhr.status);
        }
    }
    var url = "./php/2/act_histMGT.php";
    xhr.open("get", url, true);
    xhr.send(null);
}



// function editAct(){
//     let xhre = new XMLHttpRequest();
//     // xhr.onload = function(){

//     // }
//     var urle ="./php/2/act_histMGT_pass.php";
//     xhre.open("post",urle,true);
//     xhre.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
//     let data_info = `ACTNO=${actHist[i].ACTNO}`;
//     xhre.send(data_info);
// }


window.addEventListener('load',function(){
    getactHist();
    // document.getElementById('editBtn').onclick = editAct;
});



