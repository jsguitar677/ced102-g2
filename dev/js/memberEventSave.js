function $id(id){
	return document.getElementById(id);
}
function getDetail(){

    let xhr1 = new XMLHttpRequest(); 
    xhr1.onload = function(){
        // MBRPERID = parse (xhr2.responseText);
        let MBRPERID = JSON.parse(xhr1.responseText);
        console.log(MBRPERID); 
        var getdataLenghth  = MBRPERID.length
        // if( getdataLenghth == 0){
        //     $id('warmSaveCard').style.display = 'block';
        // }
        for(var i=0; i<getdataLenghth; i++){
            $('#saveCardHook').append(`
                <div class="page5Card" id="page5Card${MBRPERID[i].actno}" style="background-image:url(${MBRPERID[i].locpic});">
                    <div class="content">
                        <h2 class="title">${MBRPERID[i].actname}</h2>
                        <p class="copy">${MBRPERID[i].vision}</p>
                        <button value="${MBRPERID[i].actno}" class="btn membtn">See More</button>
                        <button value="${MBRPERID[i].actno}" id="cancelLike${MBRPERID[i].actno}" class="btn2">取消收藏</button>
                    </div>
                </div>`
            )
            let cancelLike = document.getElementById(`cancelLike${MBRPERID[i].actno}`)
            let page5Cardid = document.getElementById(`page5Card${MBRPERID[i].actno}`)

            cancelLike.onclick = function (){
                let xhr2 = new XMLHttpRequest(); 
                xhr2.onload = function(){
                    $(page5Cardid).remove();
                };
                xhr2.open("post", "php/15/memberDeleteLike.php", true); //連結伺服端程式
                xhr2.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
                let actId = `ACTID=${cancelLike.value}`;
                xhr2.send(actId);
            };
        };
        

    };
    xhr1.open("post", "php/15/memberEventSave.php", true); //連結伺服端程式
    xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    xhr1.send(null);
}

window.addEventListener("load", function(){
    getDetail();

})


