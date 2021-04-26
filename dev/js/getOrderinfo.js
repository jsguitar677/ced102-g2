      function getOrdInfo(){
      // let xhr = new XMLHttpRequest();
      // xhr.onload = function(){
      //   order = JSON.parse(xhr.responseText);
      //   console.log(order);
        
      // }
      // xhr.open("get", "getOrderInfo.php", true);
      // xhr.send(null);
      // sessionStorage.getItem('key')
        let data = JSON.parse(sessionStorage.getItem("cart"));
        // let total = JSON.parse(sessionStorage.getItem("lastTota"));
        // alert(sessionStorage.getItem("total"));

        // data[i].prodName;
        // data[i].price;
        // data[i].count;
// alert( data.length)
        $('.card-header').append(`
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h2 class="btntext"><p>訂單總金額NT${sessionStorage.getItem("lastTota")}</p></h2>
              </button>
        `)      

        for(let i = 0 ; i < data.length ; i++){
        $('.item_container').append(`
          <div class="item_header ">
            <div class="item_detail">
                <img class="prodimg" src="${data[i].src}" alt=""  >
                <div class="name">
                  <span>品名:</span>
                  <span type="text">${data[i].prodName}</span>
                </div> 
            </div>
            <div class="item_detail count" style="text-align: center;"><span type="text">${data[i].count}</span></div>
            
            <div class="item_detail amount"><span type="text">$${data[i].price}</span></div>
          </div>
        `)

       }
       $('.payment-totalbody').append(`
                <div class="row">
                  <span class="label">商品總金額:</span>
                  <div class="formw totalAmount"><span>${sessionStorage.getItem("lastTota")}</span></div>
                </div>
                <div class="row">
                  <span class="label">使用環保幣折扣:</span>
                  <div class="formw"><span class="discount"   readonly style="outline: none;border:none;font-size: 16px; " >${sessionStorage.getItem("discount")}</span></div>
                </div>
                <div class="row">
                  <span class="label">總計：</span>
                  <div class="formw subtotal"><span>${sessionStorage.getItem("lastTota")}</span></div>
                </div>
              </div>
      `)
        // document.getElementById('itemName').textContent = data[0].prodName;
        // console.log(i)
    }; //

    window.addEventListener("load", function(){
      getOrdInfo();
    })