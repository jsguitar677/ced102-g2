$('document').ready(function(){
    //預設
    $('section').css('display','none');
    $(`section#section1`).css('display','block');
    $('ul.menu >li:nth-child(1)').addClass('maincurrent');

    //點擊選單，切換畫面
    for(let i=1; i<=3; i++){
        $(`ul.menu >li:nth-child(${i})`).click(function(){
            $('section').css('display','none');
            $(`#section${i}`).css('display','');
            $('ul.menu >li').css('fontWeight','');
            $(this).css('fontWeight','bolder');
            $('ul.menu >li').removeClass('maincurrent');
            $(this).addClass('maincurrent');
        })
    };
    // 首頁連接至section2
    // let storage = sessionStorage;
    // if(storage['btnId'] == null){
    //     storage['btnId'] = '';
    // }
    // let itemString = storage.getItem('btnId');
    // let n1 = itemString.charAt(0);
    // if (n1 == "A"){
    //     $('section').css('display','none');
    //     $(`#section2`).css('display','');
    //     $('ul.menu >li:nth-child(2)').css('fontWeight','bolder');
    //     storage['btnId'] = '';
    // }else{
    //     $('section').css('display','none');
    //     $(`#section1`).css('display','');
    //     $('ul.menu >li:nth-child(1)').css('fontWeight','bolder');
    // }

    //點擊id="section1"的發起活動按鈕
    $('#problem-btn').click(function(){
        $('section').css('display','none');
        $(`#section2`).css('display','');
        $('ul.menu >li').removeClass('maincurrent');
        $('ul.menu >li:nth-child(2)').addClass('maincurrent');
        $('ul.menu >li').css('fontWeight','lighter');
        $('ul.menu >li:nth-child(2)').css('fontWeight','bolder');
        $('html,body').scrollTop(360);
    });

    $('#people-rank-btn').click(function(){
        $('#toggle-btn').animate({left:'50%'});
        $('#people-rank-btn').removeClass('toggle-text-effect')
        $('#money-rank-btn').addClass('toggle-text-effect')
        // $('#money-rank').animate({left:'-105%'},"100");
        // $('#people-rank').animate({left:'0%'},"100");
        $('#money-rank').css({left:'-105%'},"100");
        $('#people-rank').css({left:'0%'},"100");
    })
    $('#money-rank-btn').click(function(){
        $('#toggle-btn').animate({left:'0%'});
        $('#money-rank-btn').removeClass('toggle-text-effect')
        $('#people-rank-btn').addClass('toggle-text-effect')
        // $('#people-rank').animate({left:'100%'},"100");
        // $('#money-rank').animate({left:'0%'},"100");
        $('#people-rank').css({left:'100%'},"100");
        $('#money-rank').css({left:'0%'},"100");
    })
    
    if($(document).width()<768){
        $('ul.menu >li:nth-child(1)').text('助環境一力');
        $('ul.menu >li:nth-child(2)').text('與我們一起');
    }else{
        $('ul.menu >li:nth-child(1)').text('助環境一力 (參與活動)');
        $('ul.menu >li:nth-child(2)').text('與我們一起 (發起活動)');    
    }



    $('p.more').click(function(){
        $(this).text('');
        $(this).parent().children("p:first-child").removeClass('shorten2');
    })
    $('#instructions-more').click(function(){
        $(this).text('');
        $("#instructions").removeClass('shorten2');
    })

    //close btn
    $('#standard-btn').click(function(){
        TweenMax.to('#standard',1,{
            display: 'block',
            opacity: 0.9,
        })
    })
    $('#standard div.closebtn').click(function(){
        TweenMax.to('#standard',1,{
            opacity: 0,
            display: 'none',
        })
    })

    $('.start-btn').click(function(){
        let xhrlogin = new XMLHttpRequest();
        xhrlogin.onload = function (){
            if( xhrlogin.status == 200 ){
                let res = JSON.parse(xhrlogin.responseText)
                console.log(res);
                if(res[0]=='nologin'){ 
                    //請先登入
                    $('#wholeScreenOverlay3').css('display','block');
                    $('body').css('overflow','hidden');
                    $('#LogRegClsBtn3').click(function(){
                        $('#wholeScreenOverlay3').css('display','none');
                        $('body').css('overflow','auto');
                    })
                }else if(res[0].MBREXP < 1000){
                    //須為資深會員
                    alert('抱歉您尚未解鎖發起提案功能，請繼續努力升級吧~');
                }else if((res[0].MBREXP >= 1000)){
                    //連結事前須知頁面
                    location.href="./initiation_agreement.html";
                }
            }else{
                alert( xhrlogin.status );
            }
        }
        let urllogin = "./php/7/eventlogin.php";
        xhrlogin.open("Get", urllogin, true);
        xhrlogin.send( null );
    });



    //====================================感謝有你=================================
    function showRank(jsonStr){
        let rankRow = JSON.parse(jsonStr);
        console.log(rankRow);
        function fbigcard(num){
            for(let i=0 ; i<rankRow[0].length ; i++){
                if(rankRow[0][i].MBRNO == rankRow[1][num].MBRNO){
                    // rankRow[0][i].MBRNO
                    $('#section3 #money-rank div.big-card-left').html("");
                    $('#section3 #money-rank div.big-card-left').append(`
                        <div class="pic"><img src="${rankRow[0][i].MBRPIC}"></div>
                        <p class="description">簡介：${rankRow[0][i].MBRBIO}</p>
                    `)
                }
            }
            for(let r=0 ; r<rankRow[0].length ; r++){
                if(rankRow[0][r].MBRNO == rankRow[1][num].MBRNO){
                    var jnum = 0;
                    var inum = 0;
                    for(let j=0 ; j<rankRow[2].length ; j++){
                        if(rankRow[2][j].MBRNO == rankRow[1][num].MBRNO){
                            var jnum = rankRow[2][j].jnum;
                            
                        }
                    }
                    for(let k=0 ; k<rankRow[3].length ; k++){
                        if(rankRow[3][k].MBRNO == rankRow[1][num].MBRNO){
                            var inum = rankRow[3][k].inum;
                        }
                    }
    
                    $('#section3 #money-rank div.big-card-right').html("");
                    $('#section3 #money-rank div.big-card-right').append(`
                         <div class="donation-title">
                            <div class="img">
                                <img src="./img/event/icon/icon_chart-dots.png">
                            </div>
                            <h3>捐款累計金額</h3>
                        </div>
                        <div class="donation-total">$${rankRow[1][num].ftotal}</div>
                        <p class="text">贊助活動次數</p>
                        <p class="text donation-number">${rankRow[1][num].fnum}次</p>
                        <p class="text">活動志工參與次數</p>
                        <p class="text volunteer-number">${jnum}次</p>
                        <p class="text">活動募款發起次數</p>
                        <p class="text initiation-number">${inum}次</p>
                    `);
                }
            }
        }
        function vbigcard(num){
            $('#section3 #people-rank div.big-card-left').html("");
            $('#section3 #people-rank div.big-card-left').append(`
                <div class="pic"><img src="${rankRow[2][num].MBRPIC}"></div>
                <p class="description">簡介：${rankRow[2][num].MBRBIO}</p>
            `)
            var fnum = 0;
            var ftotal = 0;
            var inum = 0;
            for(let j=0 ; j<rankRow[1].length ; j++){
                if(rankRow[1][j].MBRNO == rankRow[2][num].MBRNO){
                    fnum = rankRow[1][j].fnum;
                    ftotal = rankRow[1][j].ftotal;
                }
            }
            for(let k=0 ; k<rankRow[3].length ; k++){
                if(rankRow[3][k].MBRNO == rankRow[2][num].MBRNO){
                    inum = rankRow[3][k].inum;
                }
            }
            $('#section3 #people-rank div.big-card-right').html("");
            $('#section3 #people-rank div.big-card-right').append(`
                <div class="donation-title">
                    <div class="img">
                        <img src="./img/event/icon/icon_chart-dots.png">
                    </div>
                    <h3>志工參與次數</h3>
                </div>
                <div class="volunteer-number">${rankRow[2][num].jnum}次</div>
                <p class="text">贊助活動次數</p>
                <p class="text donation-number">${fnum}次</p>
                <p class="text">捐款累計金額</p>
                <p class="text donation-total">$${ftotal}</p>
                <p class="text">活動募款發起次數</p>
                <p class="text initiation-number">${inum}次</p>
            `);
        }
        fbigcard(0);
        vbigcard(0);
        
        $('#section3 #money-rank div.right').html("");
        $('#section3 #people-rank div.right').html("");
        for(let z=0 ; z<5 ; z++){
            var jnum = 0;
            var inum = 0;
            for(let j=0 ; j<rankRow[2].length ; j++){
                if(rankRow[2][j].MBRNO == rankRow[1][z].MBRNO){
                    var jnum = rankRow[2][j].jnum;
                    
                }
            }
            for(let k=0 ; k<rankRow[3].length ; k++){
                if(rankRow[3][k].MBRNO == rankRow[1][z].MBRNO){
                    var inum = rankRow[3][k].inum;
                }
            }
            $('#section3 #money-rank div.right').append(`
                <div class="small-card TOP${z+1}">
                    <div class="flex">
                        <div class="TOP">${z+1}</div>
                        <div class="pic"><img src="${rankRow[1][z].MBRPIC}"></div>
                        <div class="text">
                            <p>捐款人</p>
                            <p id="name">${rankRow[1][z].MBRNAME}</p>
                        </div>
                        <div class="text">
                            <p>累計金額</p>
                            <p class="donation-total">$${rankRow[1][z].ftotal}</p>
                        </div>
                    </div>
                    <div class="detail">
                        <p class="text description shorten2">簡介：${rankRow[1][z].MBRBIO}</p>
                        <p class="text more">more</p>
                        <p class="text">贊助活動次數<span class="donation-total">${rankRow[1][z].fnum}次</span></p>
                        <p class="text">活動志工參與次數<span class="volunteer-number">${jnum}次</span></p>
                        <p class="text">活動募款發起次數<span class="initiation-number">${inum}次</span></p>
                    </div>
                </div>
            `)
            $('p.more').click(function(){
                $(this).text('');
                $(this).parent().children("p:first-child").removeClass('shorten2');
            })
        }
        for(let y=0 ; y<5 ; y++){
            var fnum = 0;
            var ftotal = 0;
            var inum = 0;
            for(let j=0 ; j<rankRow[1].length ; j++){
                if(rankRow[1][j].MBRNO == rankRow[2][y].MBRNO){
                    fnum = rankRow[1][j].fnum;
                    ftotal = rankRow[1][j].ftotal;
                    
                }
            }
            for(let k=0 ; k<rankRow[3].length ; k++){
                if(rankRow[3][k].MBRNO == rankRow[2][y].MBRNO){
                    inum = rankRow[3][k].inum;
                }
            }
            $('#section3 #people-rank div.right').append(`
                <div class="small-card TOP${y+1}">
                    <div class="flex">
                        <div class="TOP">${y+1}</div>
                        <div class="pic"><img src="${rankRow[2][y].MBRPIC}"></div>
                        <div class="text">
                            <p>志工</p>
                            <p id="name">${rankRow[2][y].MBRNAME}</p>
                        </div>
                        <div class="text">
                            <p>累計次數</p>
                            <p class="volunteer-number">${rankRow[2][y].jnum}次</p>
                        </div>
                    </div>
                    <div class="detail">
                        <p class="text description shorten2">簡介：${rankRow[2][y].MBRBIO}</p>
                        <p class="text more">more</p>
                        <p class="text">贊助活動次數<span class="donation-number">${fnum}次</span></p>
                        <p class="text">捐款累計金額<span class="donation-total">$${ftotal}元</span></p>
                        <p class="text">活動募款發起次數<span class="initiation-number">${inum}次</span></p>
                    </div>
                </div>
            `)
            $('p.more').click(function(){
                $(this).text('');
                $(this).parent().children("p:first-child").removeClass('shorten2');
            })
        }


        function frankCard(){
            if($(document).width() < 992){
                $('#money-rank .small-card').removeClass('effect');
            }else{
                $('#money-rank .small-card').click(function(){
                    $('#money-rank .small-card').removeClass('effect');
                    $(this).addClass('effect');
                    let top = $(this).find('div.TOP').text()-1;
                    fbigcard(top);
                })
                for(i=1;i<4;i++){
                    $(`#money-rank div.TOP${i}`).click(function(){
                        let color = $(this).css('background-color');
                        $('#money-rank div.big-card').css('background-color',`${color}`);
                        $('#money-rank div.big-card p').css('color',`#fafafa`);
                        $('#money-rank div.big-card div.donation-total').css('color',`#fafafa`);
                        $('#money-rank div.big-card h3').css('color',`#fafafa`);
                        $('#money-rank div.img img').attr('src','./img/event/icon/icon_chart-dots.png');
                    })
                }
                for(i=4;i<6;i++){
                    $(`#money-rank div.TOP${i}`).click(function(){
                        let color = $(this).css('background-color');
                        $('#money-rank div.big-card').css('background-color',`${color}`);
                        $('#money-rank div.big-card p').css('color',`#1D1E4C`);
                        $('#money-rank div.big-card div.donation-total').css('color',`#1D1E4C`);
                        $('#money-rank div.big-card h3').css('color',`#1D1E4C`);
                        $('#money-rank div.img img').attr('src','./img/event/icon/icon_chart-dots-blue.png');
                    })
                }
            }
        }
        function vrankCard(){
            if($(document).width() < 992){
                $('#people-rank .small-card').removeClass('effect');
            }else{
                $('#people-rank .small-card').click(function(){
                    $('#people-rank .small-card').removeClass('effect');
                    $(this).addClass('effect');
                    let top = $(this).find('div.TOP').text()-1;
                    vbigcard(top);
                })
                for(i=1;i<4;i++){
                    $(`#people-rank div.TOP${i}`).click(function(){
                        let color = $(this).css('background-color');
                        $('#people-rank div.big-card').css('background-color',`${color}`);
                        $('#people-rank div.big-card p').css('color',`#fafafa`);
                        $('#people-rank div.big-card div.volunteer-number').css('color',`#fafafa`);
                        $('#people-rank div.big-card h3').css('color',`#fafafa`);
                        $('#people-rank div.img img').attr('src','./img/event/icon/icon_chart-dots.png');
                    })
                }
                for(i=4;i<6;i++){
                    $(`#people-rank div.TOP${i}`).click(function(){
                        let color = $(this).css('background-color');
                        $('#people-rank div.big-card').css('background-color',`${color}`);
                        $('#people-rank div.big-card p').css('color',`#1D1E4C`);
                        $('#people-rank div.big-card h3').css('color',`#1D1E4C`);
                        $('#people-rank div.big-card div.volunteer-number').css('color',`#1D1E4C`);
                        $('#people-rank div.img img').attr('src','./img/event/icon/icon_chart-dots-blue.png');
                    })
                }
            }
        }
        frankCard();
        vrankCard();


        $(window).resize(function(){
            if($(document).width()<=767){
                $('ul.menu >li:nth-child(1)').text('助環境一力');
                $('ul.menu >li:nth-child(2)').text('與我們一起');
            }else{
                $('ul.menu >li:nth-child(1)').text('助環境一力 (參與活動)');
                $('ul.menu >li:nth-child(2)').text('與我們一起 (發起活動)');    
            }
            $('ul.slides').css({left:0});
            frankCard();
            vrankCard();
        })



    }

    function getRank(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
            // console.log(xhr.responseText);
            showRank(xhr.responseText)
            }else{
                alert( xhr.status );
            }
        }
        
        var url = "./php/7/thanks.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }

    getRank();
    
})
