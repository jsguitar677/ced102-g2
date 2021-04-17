$('document').ready(function(){

    //點擊活動列表，活動卡片顯示，及其關閉按鈕設定
    // $('ul#list li').click(function(){
    //     $('#list-card').css('display','block');
    // })

    $('#list-card > div.closebtn').click(function(){
        $('#list-card').css('display','none');  
    })
    //點擊查看天氣資訊按鈕，及其關閉按鈕
    $('#weather-btn').click(function(){
        $('div.weather-div').css('display','block');
    })
    $('#weather-div-btn').click(function(){
        $('div.weather-div').css('display','none');  
    })
    //===========================================================

    function showAct(jsonStr){
        let actRow = JSON.parse(jsonStr);
        console.log(actRow);

        //輪播
        function slider(){
            var isclick = true;
            $('#btn-right').click(function(){
                if(isclick){
                    isclick = false;
                    let card_length = $('ul.slides').length;
                    let left = parseFloat($('ul.slides').css('left'));
                    let width = parseFloat($('ul.slides').width());
                    if(left > -width*(card_length-1)){
                        $('ul.slides').animate({left: left - width},300);
                    }
                
                }
                setTimeout(function(){
                    isclick = true;
                },800);
            })
            $('#btn-left').click(function(){
                if(isclick){
                    isclick = false;
                    let left = parseFloat($('ul.slides').css('left'));
                    let width = parseFloat($('ul.slides').width());
                    if(left <= -width){
                        $('ul.slides').animate({left: left + width},300);
                    }
                }
                setTimeout(function(){
                    isclick = true;
                },800);
            })
        }

        // 天氣資訊
        $.ajax({
            url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-6A5D1FA0-3C09-4FF7-9D3B-7FD3C9EB3C52&limit=1000&offset=0&format=JSON",
            method:'get',
            dataType:'json',
            data:{},
        }).done(function(res){
            console.log(res);
            function weather(num,num2){
                $('div.weather-div p.location').text(`${actRow[num][num2].CITYNAME}`);
                let date = $('div.weather-div p.date');
                let description = $('div.weather-div p.description');
                let temperature_hight = $('div.temperature p.hight');
                let temperature_low = $('div.temperature p.low');
                let locationNum = actRow[num][num2].ACTCITY; //之後替換成點選的活動地區
                for(let i=0; i<7; i++){
                    let day = new Date();
                    day.setTime(day.getTime()+(24*60*60*1000)*i); 
                    day2 = (day.getMonth()+1) + "/" + day.getDate(); 
                    date[i].innerText = day2;
                }
                let A =res.records.locations[0];
                let k=1;
                description[0].innerText = A.location[locationNum].weatherElement[6].time[0].elementValue[0].value;
                temperature_hight[0].innerText = A.location[locationNum].weatherElement[12].time[0].elementValue[0].value +'°C';
                temperature_low[0].innerText = A.location[locationNum].weatherElement[8].time[0].elementValue[0].value +'°C';
                let iconValue = A.location[locationNum].weatherElement[6].time[0].elementValue[1].value;
                let weatherIcon1 = document.getElementById(`weatherIcon1`);
                if(iconValue == 1 || iconValue==24){
                    weatherIcon1.src = "./img/event/weather/sun.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/sun2.jpg")');
                }else if(iconValue == 4 || iconValue==5 || iconValue==6 || iconValue==7 || iconValue==27 || iconValue==28){
                    weatherIcon1.src = "./img/event/weather/cloudy.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/clouds2.jpg")');
                }else if(iconValue == 2 || iconValue==3 || iconValue==25 || iconValue==26){
                    weatherIcon1.src = "./img/event/weather/太陽雲.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/sun2.jpg")');
                }else if( (iconValue =>8  && iconValue <= 14) || (iconValue =>29  && iconValue <=32) || iconValue==39 || iconValue==38 || iconValue==20){
                    weatherIcon1.src = "./img/event/weather/rainy.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/rain2.jpg")');
                }else if( (iconValue =>15  && iconValue <= 18) || (iconValue =>33  && iconValue <=36) || iconValue==41 || iconValue==22){
                    weatherIcon1.src = "./img/event/weather/雨雷.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/lightning2.jpg")');
                }else if(iconValue == 19){
                    weatherIcon1.src = "./img/event/weather/太陽雲雨.svg";
                    $('div.weather-div').css('backgroundImage','url("../img/event/weather/rain2.jpg")');
                }else if(iconValue == 21){
                    weatherIcon1.src = "./img/event/weather/太陽打雷雨.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/lightning2.jpg")');
                }else if(iconValue == 23 || iconValue == 37 || iconValue == 42){
                    weatherIcon1.src = "./img/event/weather/snowing.svg";
                    $('div.weather-div').css('backgroundImage','url("./img/event/weather/snow2.jpg")');
                }
                for(let j=2; j<=13; j=j+2){
                    if(A.location[locationNum].weatherElement[6].time[j].elementValue[0].value != ' '){
                        description[k].innerText = A.location[locationNum].weatherElement[6].time[j].elementValue[0].value;
                    }
                    if(A.location[locationNum].weatherElement[12].time[j].elementValue[0].value != ' '){
                        temperature_hight[k].innerText = A.location[locationNum].weatherElement[12].time[j].elementValue[0].value +'°C';
                    }
                    if(A.location[locationNum].weatherElement[8].time[j].elementValue[0].value != ' '){
                        temperature_low[k].innerText = A.location[locationNum].weatherElement[8].time[j].elementValue[0].value +'°C';
                    }
                    let iconValue = A.location[locationNum].weatherElement[6].time[j].elementValue[1].value;
                    if(iconValue == 1 || iconValue==24){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/sun.svg";
                    }else if(iconValue == 4 || iconValue==5 || iconValue==6 || iconValue==7 || iconValue==27 || iconValue==28){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/cloudy.svg";
                    }else if(iconValue == 2 || iconValue==3 || iconValue==25 || iconValue==26){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/太陽雲.svg";
                    }else if( (iconValue =>8  && iconValue <= 14) || (iconValue =>29  && iconValue <=32) || iconValue==39 || iconValue==38 || iconValue==20){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/rainy.svg";
                    }else if( (iconValue =>15  && iconValue <= 18) || (iconValue =>33  && iconValue <=36) || iconValue==41 || iconValue==22){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/雨雷.svg";
                    }else if(iconValue == 19){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/太陽雲雨.svg";
                    }else if(iconValue == 21){
                        document.getElementById(`weatherIcon${k+1}`).src = "./img/event/weather/太陽打雷雨.svg";
                    }else if(iconValue == 23 || iconValue == 37 || iconValue == 42){
                        document.getElementById('weatherIcon1').src = "./img/event/weather/snowing.svg";
                    }
                    k++;
                }
            }
            weather(3,0);
                    
            let arrLocation_current = [];
            if(actRow[1].length>0){
                for(let j=0 ; j<actRow[1].length ; j++ ){
                    arrLocation_current.push(["L","0",`${actRow[1][j].area}`]);
                };
            }
            if(actRow[2].length>0){
                for(let k=0 ; k<actRow[2].length ; k++ ){
                    arrLocation_current.push(["L","1",`${actRow[2][k].area}`]);
                };
            }
            let M_coordinate = [
                {
                    x:23.686074,
                    y:120.430481,
                    M:'M0',
                },
                {
                    x:23.865906,
                    y: 120.987748,
                    M:'M1',
                },
                {
                    x:22.926451,
                    y:121.092937,
                    M:'M3',
                },
                {
                    x:24.589162,
                    y:121.660455,
                    M:'M5',
                },
                {
                    x:22.541248,
                    y: 120.648516,
                    M:'M6',
                },
                {
                    x:24.493358,
                    y:120.932175,
                    M:'M7',
                },
                {
                    x:23.572181,
                    y: 119.638578,
                    M:'M8',
                },
                {
                    x:25.046107,
                    y:121.581882,
                    M:'M9',
                },
                {
                    x:24.688897,
                    y:121.179726,
                    M:'M10',
                },
                {
                    x:23.790893,
                    y: 121.419469,
                    M:'M11',
                },
                {
                    x:23.007087,
                    y:120.617372,
                    M:'M12',
                },
                {
                    x:23.949142,
                    y:120.472990,
                    M:'M13',
                },
                {
                    x:24.784282,
                    y:120.944678,
                    M:'M14',
                },
                {
                    x:24.910631,
                    y: 121.486100,
                    M:'M15',
                },
                {
                    x:25.088912,
                    y:121.748856,
                    M:'M16',
                },
                {
                    x:24.204040,
                    y:120.744637,
                    M:'M17',
                },
                {
                    x:23.169436,
                    y:120.350915,
                    M:'M18',
                },
                {
                    x:24.950062,
                    y:121.268050,
                    M:'M19',
                },
                {
                    x:23.452674,
                    y:120.731225,
                    M:'M20',
                },
                {
                    x:23.470012,
                    y:120.451537,
                    M:'M21',
                }
        
            ]
        
            //列表
            //尚未動態換活動照片
            //點擊活動列表
            function liEffect(li){
                $('div.event-info div.list ul#list li').removeClass('liEffect');
                $(li).addClass('liEffect');
            };
            function actContent(liNum){
                for(let i=0 ; i<actRow[0].length; i++){
                    if(actRow[0][i].ACTNO == $(liNum).attr("class").substr(3)){
                        $('div.event-info div.info-card #list-card div.block div.left').html("");
                        $('div.event-info div.info-card #list-card div.block div.left').append(`
                            <div class="leftTitleBox">
                                <h2>${actRow[0][i].ACTNAME}</h2>
                            </div>
                            
                            <p>日期：${actRow[0][i].ACTSDATE}</p>
                            <p>地點：${actRow[0][i].loc}</p>
                            <p>目標：志工${actRow[0][i].RECRGOAL}人 / 資金NTD${actRow[0][i].DNTGOAL}</p>
                            <p class="shorten3">簡述：${actRow[0][i].VISION}</p>
                        `);
                        $('#fNow').text(`目前募資金額$${actRow[0][i].DNTNOW}`);
                        $('#vNow').text(`目前參與人數${actRow[0][i].RECRNOW}人`);
                        $('#fGoal').text(`目標募資金額$${actRow[0][i].DNTGOAL}`);
                        $('#vGoal').text(`目標志工人數${actRow[0][i].RECRGOAL}人`);
                        $('div.event-info div.info-card #list-card div.block div.right div.img img').attr('src',`${actRow[0][i].LOCPIC}`);
                        $('div.event-info div.info-card #list-card div.opacity img').attr('src',`${actRow[0][i].LOCPIC}`);
                        let progress_people = `${actRow[0][i].Vrate}%`;
                        $('#people').css('width',progress_people);
                        let progress_money = `${actRow[0][i].Frate}%`;
                        $('#money').css('width',progress_money); 
                        weather(0,i);
                    }                     
                }
            }
            function clickli(){
                $('div.event-info div.list ul#list li').click(function(){
                    if( typeof($(this).attr("class")) == "undefined"){
                    }else{
                        $('div.event-info div.info-card #list-card div.block').css('display','block');
                        actContent(this);
                    }
                    liEffect(this);
                })
            }
            function clickCity(A,i){
                document.getElementById('all').checked = false;
                document.getElementById('join').checked = false;
                document.getElementById('coming').checked = false;
                let image = document.getElementsByTagName('image');
                for(let j=0; j< image.length ;j++){
                    image[j].style.display = 'none';
                }
                $(A).css('display','block');
                for(let j=0 ; j<22 ; j++){
                    $(`.M${j}`).removeClass('north');
                    $(`.M${j}`).removeClass('central');
                    $(`.M${j}`).removeClass('south');
                    $(`.M${j}`).removeClass('east');
                    $(`.M${j}`).removeClass('outlying');
                }
                if(i==5 || i==9 || i==10 || i==14 || i==15 || i==16 || i==19){
                    $(`.M${i}`).addClass('north');
                }else if(i==0 || i==1 || i==7 || i==13 || i==17){
                    $(`.M${i}`).addClass('central');
                }else if(i==6 || i==12 || i==18 || i==20 || i==21){
                    $(`.M${i}`).addClass('south');
                }else if(i==3 || i==11){
                    $(`.M${i}`).addClass('east');
                }else if(i==2 || i==4 || i==8){
                    $(`.M${i}`).addClass('outlying');
                }
                $('div.event-info div.list ul#list').html("");
                if(actRow[0].length == 0){
                    $('div.event-info div.list ul#list').append(`
                        <li>
                            <p class="text">該縣市尚無活動</p>
                        </li>
                    `)
                    $('#list-card div.block').css('display','none');
                    $('div.event-info div.list ul#list li').css('cursor','default');
                }else{
                    for( let l = 0 ; l < actRow[0].length ; l++){
                        if(actRow[0][l].ACTCITY == i){
                            $('div.event-info div.list ul#list').append(`
                                <li class="act${actRow[0][l].ACTNO}">
                                    <div class="bg"><img src="${actRow[0][l].LOCPIC}"></div>
                                    <p class="text">${actRow[0][l].LOCNAME}</p>
                                </li>
                            `)
                        }
                    }
                    $('#list-card div.block').css('display','block');
                    if($('ul#list').children('li').length == 0){
                        $('div.event-info div.list ul#list').append(`
                            <li>
                                <p class="text">該縣市尚無活動</p>
                            </li>
                        `)
                        $('#list-card div.block').css('display','none');
                        $('div.event-info div.list ul#list li').css('cursor','default');
                    }else{
                        actContent('ul#list li:nth-child(1)');
                        liEffect('ul#list li:nth-child(1)');
                    }
                }
                clickli();
            }
            $('#all').click(function(){
                $('div.event-info div.list ul#list').html("");
                if(actRow[0].length == 0){
                    $('div.event-info div.list ul#list').append(`
                        <li>
                            <p class="text">目前尚無活動</p>
                        </li>
                    `)
                    $('#list-card div.block').css('display','none');
                    $('div.event-info div.list ul#list li').css('cursor','default');
                }else{
                    $('#list-card div.block').css('display','block');
                    for(let i=0 ; i<actRow[0].length ;i++){
                        $('div.event-info div.list ul#list').append(`
                            <li class="act${actRow[0][i].ACTNO}">
                                <div class="bg"><img src="${actRow[0][i].LOCPIC}"></div>
                                <p class="text">${actRow[0][i].LOCNAME}</p>
                            </li>
                        `)
                    }
                }
                actContent('ul#list li:nth-child(1)');
                let image = document.getElementsByTagName('image');
                for(let j=0 ; j<image.length ; j++){
                    image[j].style.display='none';
                }
                for(let j=0 ; j<22 ; j++){
                    $(`.M${j}`).removeClass('north');
                    $(`.M${j}`).removeClass('central');
                    $(`.M${j}`).removeClass('south');
                    $(`.M${j}`).removeClass('east');
                    $(`.M${j}`).removeClass('outlying');
                }
                for(let k =0; k<arrLocation_current.length; k++){
                    let location = arrLocation_current[k][2];
                    let M = document.getElementsByClassName(`${location}Mark`);
                    M[0].style.display = '';
                    let i = location.charAt(1)+location.charAt(2)
                    if(i==5 || i==9 || i==10 || i==14 || i==15 || i==16 || i==19){
                        $(`.${location}`).addClass('north');
                    }else if(i==0 || i==1 || i==7 || i==13 || i==17){
                        $(`.${location}`).addClass('central');
                    }else if(i==6 || i==12 || i==18 || i==20 || i==21){
                        $(`.${location}`).addClass('south');
                    }else if(i==3 || i==11){
                        $(`.${location}`).addClass('east');
                    }else if(i==2 || i==4 || i==8){
                        $(`.${location}`).addClass('outlying');
                    }
                }
                clickli();
                liEffect('ul#list li:nth-child(1)');
            
            })
            $('#join').click(function(){
                $('div.event-info div.list ul#list').html("");
                if(actRow[1].length == 0){
                    $('div.event-info div.list ul#list').append(`
                        <li>
                            <p class="text">尚無招募中的活動</p>
                        </li>
                    `);
                    $('div.event-info div.list ul#list li').css('cursor','default');
                    $('#list-card div.block').css('display','none');
                }else{
                    $('#list-card div.block').css('display','block');
                    for(let i=0 ; i<actRow[1].length ;i++){
                        $('div.event-info div.list ul#list').append(`
                            <li class="act${actRow[1][i].ACTNO}">
                                <div class="bg"><img src="${actRow[1][i].LOCPIC}"></div>
                                <p class="text">${actRow[1][i].LOCNAME}</p>
                            </li>
                        `)
                    }
                }
                actContent('ul#list li:nth-child(1)');
                for(let j=0 ; j<22 ; j++){
                    $(`.M${j}`).removeClass('north');
                    $(`.M${j}`).removeClass('central');
                    $(`.M${j}`).removeClass('south');
                    $(`.M${j}`).removeClass('east');
                    $(`.M${j}`).removeClass('outlying');
                }
                let image = document.getElementsByTagName('image');
                for(let j=0 ; j<image.length ; j++){
                    image[j].style.display='none';
                }
                for(let k =0; k<arrLocation_current.length; k++){
                    if(arrLocation_current[k][1] ==0){
                        let location = arrLocation_current[k][2];
                        let M = document.getElementsByClassName(`${location}Mark0`);
                        M[0].style.display = '';
                        let i = location.charAt(1)+location.charAt(2)
                        if(i==5 || i==9 || i==10 || i==14 || i==15 || i==16 || i==19){
                            $(`.${location}`).addClass('north');
                        }else if(i==0 || i==1 || i==7 || i==13 || i==17){
                            $(`.${location}`).addClass('central');
                        }else if(i==6 || i==12 || i==18 || i==20 || i==21){
                            $(`.${location}`).addClass('south');
                        }else if(i==3 || i==11){
                            $(`.${location}`).addClass('east');
                        }else if(i==2 || i==4 || i==8){
                            $(`.${location}`).addClass('outlying');
                        }
                    }
                }
                clickli();
                liEffect('ul#list li:nth-child(1)');
            })
            $('#coming').click(function(){
                $('div.event-info div.list ul#list').html("");
                if(actRow[2].length == 0){
                    $('div.event-info div.list ul#list').append(`
                        <li>
                            <p class="text">尚無招募結束活動</p>
                        </li>
                    `);
                    $('div.event-info div.list ul#list li').css('cursor','default');
                    $('#list-card div.block').css('display','none');
                }else{
                    $('#list-card div.block').css('display','block');
                    for(let i=0 ; i<actRow[2].length ;i++){
                        $('div.event-info div.list ul#list').append(`
                            <li class="act${actRow[2][i].ACTNO}">
                                <div class="bg"><img src="${actRow[2][i].LOCPIC}"></div>
                                <p class="text">${actRow[2][i].LOCNAME}</p>
                            </li>
                        `)
                    }
                }
                actContent('ul#list li:nth-child(1)');
                for(let j=0 ; j<22 ; j++){
                    $(`.M${j}`).removeClass('north');
                    $(`.M${j}`).removeClass('central');
                    $(`.M${j}`).removeClass('south');
                    $(`.M${j}`).removeClass('east');
                    $(`.M${j}`).removeClass('outlying');
                }
                let image = document.getElementsByTagName('image');
                for(let j=0 ; j<image.length ; j++){
                    image[j].style.display='none';
                }
                for(let k =0; k<arrLocation_current.length; k++){
                    if(arrLocation_current[k][1] == 1){
                        let location = arrLocation_current[k][2];
                        let M = document.getElementsByClassName(`${location}Mark1`);
                        M[0].style.display = '';
                        let i = location.substr(1);
                        if(i==5 || i==9 || i==10 || i==14 || i==15 || i==16 || i==19){
                            $(`.${location}`).addClass('north');
                        }else if(i==0 || i==1 || i==7 || i==13 || i==17){
                            $(`.${location}`).addClass('central');
                        }else if(i==6 || i==12 || i==18 || i==20 || i==21){
                            $(`.${location}`).addClass('south');
                        }else if(i==3 || i==11){
                            $(`.${location}`).addClass('east');
                        }else if(i==2 || i==4 || i==8){
                            $(`.${location}`).addClass('outlying');
                        }
                    }
                }
                clickli();
                liEffect('ul#list li:nth-child(1)');
            })

            //列表預設近期三則活動
            $('div.slider-block #flexslider').html("");
            $('div.event-info div.list ul#list').html("");
            if(actRow[0].length == 0){
                $('div.event-info div.list ul#list').append(`
                    <li>
                        <p class="text">目前尚無活動</p>
                    </li>
                `)
                $('#list-card div.block').css('display','none');
                $('div.event-info div.list ul#list li').css('cursor','default');
            }else{
                for(let i=0 ; i<actRow[3].length ;i++){
                    $('div.event-info div.list ul#list').append(`
                        <li class="act${actRow[3][i].ACTNO}">
                            <div class="bg"><img src="${actRow[3][i].LOCPIC}"></div>
                            <p class="text">${actRow[3][i].LOCNAME}</p>
                        </li>
                    `);
                    $('div.slider-block #flexslider').append(`
                        <ul class="slides">
                            <li>
                                <div class="description">
                                    <p class="text">地點：${actRow[3][i].loc}</p>
                                    <p class="text">日期：${actRow[3][i].ACTSDATE}</p>
                                    <p class="text shorten">活動簡述：${actRow[3][i].VISION}</p>
                                    <p class="text">目前活動狀態：參與率${actRow[3][i].Vrate}% / 募款率${actRow[3][i].Frate}%</p>
                                </div>
                                <div class="img">
                                    <img src="${actRow[3][i].LOCPIC}" />
                                </div>
                            </li>
                        </ul>
                    `);
                }
                slider();
                actContent('ul#list li:nth-child(1)');
            }
            liEffect('ul#list li:nth-child(1)');
            clickli();



            let svgNS = 'http://www.w3.org/2000/svg';
            let svg = document.getElementById('svg2606');
            for(let i=0 ; i<M_coordinate.length ; i++){
                let latitude = M_coordinate[i].x;
                let x = 1200 - (( latitude - 21.7963923927 ) / 0.0030401102);
                let longitude = M_coordinate[i].y;
                let y = ( longitude - 119.172349167 ) / 0.0034174113;
                let img = document.createElementNS(svgNS, 'image');
                // img.setAttribute({x:`${y-70}`},{y:`${x-90}`},{width:'100'},{height:'100'},{class:'all'});
                img.setAttribute('x', `${y-55}`);
                img.setAttribute('y', `${x-105}`);
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
                img.setAttribute('class', `all ${M_coordinate[i].M}Mark`);
                img.setAttribute('style', `display:none;`);
                img.href.baseVal = "./img/event/icon/mark_red.png";
                svg.appendChild(img);
                let img2 = document.createElementNS(svgNS, 'image');
                img2.setAttribute('x', `${y-55}`);
                img2.setAttribute('y', `${x-105}`);
                img2.setAttribute('width', '100');
                img2.setAttribute('height', '100');
                img2.setAttribute('class', `join ${M_coordinate[i].M}Mark0`);
                img2.setAttribute('style', `display:none;`);
                img2.href.baseVal = "./img/event/icon/mark_green.png";
                svg.appendChild(img2);
                let img3 = document.createElementNS(svgNS, 'image');
                img3.setAttribute('x', `${y-55}`);
                img3.setAttribute('y', `${x-105}`);
                img3.setAttribute('width', '100');
                img3.setAttribute('height', '100');
                img3.setAttribute('class', `coming ${M_coordinate[i].M}Mark1`);
                img3.setAttribute('style', `display:none;`);
                img3.href.baseVal = "./img/event/icon/mark_yellow.png";
                svg.appendChild(img3);
            }
        
            for(let i = 0 ; i < 22 ; i++){
                $(`.M${i}`).click(function(){
                    document.getElementById('all').checked = false;
                    document.getElementById('join').checked = false;
                    document.getElementById('coming').checked = false;
                    let image = document.getElementsByTagName('image');
                    for(let j=0; j< image.length ;j++){
                        image[j].style.display = 'none';
                    }
                    let M = document.getElementsByClassName(`M${i}Mark`);
                    for(let k=0 ; k< M.length ;k++){
                        M[k].style.display = '';
                    }
                    for(let j=0 ; j<22 ; j++){
                        $(`.M${j}`).removeClass('north');
                        $(`.M${j}`).removeClass('central');
                        $(`.M${j}`).removeClass('south');
                        $(`.M${j}`).removeClass('east');
                        $(`.M${j}`).removeClass('outlying');
                    }
                    if(i==5 || i==9 || i==10 || i==14 || i==15 || i==16 || i==19){
                        $(`.M${i}`).addClass('north');
                    }else if(i==0 || i==1 || i==7 || i==13 || i==17){
                        $(`.M${i}`).addClass('central');
                    }else if(i==6 || i==12 || i==18 || i==20 || i==21){
                        $(`.M${i}`).addClass('south');
                    }else if(i==3 || i==11){
                        $(`.M${i}`).addClass('east');
                    }else if(i==2 || i==4 || i==8){
                        $(`.M${i}`).addClass('outlying');
                    }
                    $('div.event-info div.list ul#list').html("");
                    if(actRow[0].length == 0){
                        $('div.event-info div.list ul#list').append(`
                            <li>
                                <p class="text">該縣市尚無活動</p>
                            </li>
                        `)
                        $('#list-card div.block').css('display','none');
                        $('div.event-info div.list ul#list li').css('cursor','default');
                    }else{
                        for( let l = 0 ; l < actRow[0].length ; l++){
                            if(actRow[0][l].ACTCITY == i){
                                $('div.event-info div.list ul#list').append(`
                                    <li class="act${actRow[0][l].ACTNO}">
                                        <div class="bg"><img src="${actRow[0][l].LOCPIC}"></div>
                                        <p class="text">${actRow[0][l].LOCNAME}</p>
                                    </li>
                                `)
                            }
                        }
                        $('#list-card div.block').css('display','block');
                        if($('ul#list').children('li').length == 0){
                            $('div.event-info div.list ul#list').append(`
                                <li>
                                    <p class="text">該縣市尚無活動</p>
                                </li>
                            `)
                            $('#list-card div.block').css('display','none');
                            $('div.event-info div.list ul#list li').css('cursor','default');
                        }else{
                            actContent('ul#list li:nth-child(1)');
                            liEffect('ul#list li:nth-child(1)');
                        }
                    }
                    clickli();
                })
            }
            for(let i = 0 ; i < 22 ; i++){
                for(let p=0 ; p<2 ; p++){
                    $(`.M${i}Mark${p}`).click(function(){
                        clickCity(`.M${i}Mark${p}`,i);
                    })
                }
                $(`.M${i}Mark`).click(function(){
                    clickCity(`.M${i}Mark`,i);
                })
            }

        }).fail(function(err){
            console.log(err)
        });
    }
    function getRank(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function (){
            if( xhr.status == 200 ){
            showAct(xhr.responseText)
            }else{
                alert( xhr.status );
            }
        }
        
        var url = "./php/7/actView.php";
        xhr.open("Get", url, true);
        xhr.send( null );
    }

    getRank();
   
})
