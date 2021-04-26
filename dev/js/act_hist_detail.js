function $id(id){
	return document.getElementById(id);
}
window.addEventListener("load", function(){
    getActHistDetail();

    getActRecenDetail();

});
function getActRecenDetail(){
    
    let xhr1 = new XMLHttpRequest(); 
    xhr1.onload = function(){
        let ACTDETAIL2 = JSON.parse(xhr1.responseText);  
        console.log(ACTDETAIL2);
        let popLength = ACTDETAIL2.length;

        for(let i=0; i<popLength; i++){
            $('#rightPart').append(`
            <div class="rp_pop">
                <img id="${ACTDETAIL2[i].actno}" src="${ACTDETAIL2[i].locpic}">
                <h4>${ACTDETAIL2[i].actsdate}</h4><br>
                <h3>${ACTDETAIL2[i].actname}</h3>
                <button id="toAct${ACTDETAIL2[i].actno}" value="${ACTDETAIL2[i].actno}">查看活動</button>
            </div>
            `)

            let actvLine2 = document.getElementById(`toAct${ACTDETAIL2[i].actno}`).value;
            document.getElementById(`toAct${ACTDETAIL2[i].actno}`).onclick = function (){
                sessionStorage.removeItem('ACT');
                localStorage.setItem('ACT', actvLine2);
                window.location.href="./act_hist_detail.html";
            }

        }

        // $('#rightPart').append(`
        //     <div class="page5Card" id="page5Card${MBRPERID[i].actno}" style="background-image:url(${MBRPERID[i].locpic});">
        //         <div class="content">
        //             <h2 class="title">${MBRPERID[i].actname}</h2>
        //             <p class="copy">${MBRPERID[i].vision}</p>
        //             <button value="${MBRPERID[i].actno}" class="btn membtn">See More</button>
        //             <button value="${MBRPERID[i].actno}" id="cancelLike${MBRPERID[i].actno}" class="btn2">取消收藏</button>
        //         </div>
        //     </div>`
        // )
    }
    xhr1.open("post", "php/8/actGetPop.php", true); //連結伺服端程式
    xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    xhr1.send();

}

function getActHistDetail(){
    var ACTno = localStorage.getItem('ACT');

    let xhr = new XMLHttpRequest(); 
    xhr.onload = function(){
        let ACTDETAIL = JSON.parse(xhr.responseText);  
        console.log(ACTDETAIL);
      
        $id('actloc').textContent = "活動地點 : " + ACTDETAIL[0].ACTLOC;
        $id('lachdate').textContent = "籌款開始日期 : " + ACTDETAIL[0].LACHDATE;
        $id('dntgoal').textContent = "募款結果 : " + ACTDETAIL[0].DNTGOAL + " / " + ACTDETAIL[0]. DNTNOW;
        // $id('dntnow').textContent = "募款最終金額 : " + ACTDETAIL[0]. DNTNOW;
        $id('recrgoal').textContent = "參與人數 : " + ACTDETAIL[0].RECRGOAL + " / " + ACTDETAIL[0].RECRNOW;
        // $id('recnow').textContent = "當天參加人數 : " ;


        $id('actvDateTime').textContent = ACTDETAIL[0].ACTSDATE;
        $id('actName').textContent = ACTDETAIL[0].ACTNAME;
        $id('imgHook1').src = ACTDETAIL[0].ACTPIC1;
        $id('actContent').textContent = ACTDETAIL[0].ACTCON;
        // -----
        $id('actGoal').textContent = ACTDETAIL[0].VISION;
        $id('imgHook2').src = ACTDETAIL[0].ACTPIC2;
        // -----
        $id('actResult').textContent = ACTDETAIL[0].RESULT;
        $id('imgHook3').src = ACTDETAIL[0].ACTPIC3;
    }
    xhr.open("post", "php/8/actHistDetail.php", true); //連結伺服端程式
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    let actno = `ACTno=${ACTno}`;
    xhr.send(actno);
}
