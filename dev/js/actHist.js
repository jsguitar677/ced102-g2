function $id(id){
	return document.getElementById(id);
}
window.addEventListener("load", function(){
    getActHistDetail();

});

function getActHistDetail(){
    let xhr = new XMLHttpRequest(); 
    xhr.onload = function(){
        let ACTDETAIL = JSON.parse(xhr.responseText);  
        console.log(ACTDETAIL);
        actCount = ACTDETAIL.length; //活動張數

        for(let i=0; i<actCount; i++){
            $('#actHook').append(`
            <div class="page5Card" id="page5Card${ACTDETAIL[i].actno}" style="background-image:url(${ACTDETAIL[i].locpic});">
                <div class="content">
                    <h2 class="title">${ACTDETAIL[i].actname}</h2>
                    <p class="copy">${ACTDETAIL[i].actsdate}</p>
                    <button id="ACT${ACTDETAIL[i].actno}" value="${ACTDETAIL[i].actno}" class="btn membtn">See More</button>
                </div>
            </div>
            `)
            
            let actvLine = document.getElementById(`ACT${ACTDETAIL[i].actno}`).value;
            document.getElementById(`ACT${ACTDETAIL[i].actno}`).onclick = function (){
                sessionStorage.removeItem('ACT');
                localStorage.setItem('ACT', actvLine);
                window.location.href="./act_hist_detail.html";
            }
        }
    }
    xhr.open("post", "php/8/actHist.php", true); //連結伺服端程式
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    xhr.send(null);
}


