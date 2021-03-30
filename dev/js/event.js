$('document').ready(function(){
    //預設
    // $('section').css('display','none');
    // $(`#section1`).css('display','');
    // $('ul.menu >li:nth-child(1)').css('fontWeight','bolder');

    //點擊選單，切換畫面
    for(let i=1; i<=3; i++){
        $(`ul.menu >li:nth-child(${i})`).click(function(){
            $('section').css('display','none');
            $(`#section${i}`).css('display','');
            $('ul.menu >li').css('fontWeight','');
            $(this).css('fontWeight','bolder');
        })
    };

    //首頁連接至section2
    let storage = sessionStorage;
    if(storage['btnId'] == null){
        storage['btnId'] = '';
    }
    let itemString = storage.getItem('btnId');
    let n1 = itemString.charAt(0);
    if (n1 == "A"){
        $('section').css('display','none');
        $(`#section2`).css('display','');
        $('ul.menu >li:nth-child(2)').css('fontWeight','bolder');
        storage['btnId'] = '';
    }else{
        $('section').css('display','none');
        $(`#section1`).css('display','');
        $('ul.menu >li:nth-child(1)').css('fontWeight','bolder');
    }

    //點擊id="section1"的發起活動按鈕
    $('#problem-btn').click(function(){
        $('section').css('display','none');
        $('ul.menu >li').css('fontWeight','lighter');
        $(`#section2`).css('display','');
        $('ul.menu >li:nth-child(2)').css('fontWeight','bolder');
        // $('html,body').animate({scrollTop:0}, 333);
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
    
    if($(document).width()<992){
        $('.small-card').removeClass('effect');
    }
    if($(document).width()>=992){
        $('.small-card').click(function(){
            $('.small-card').removeClass('effect');
            $(this).addClass('effect');
        })
        for(i=1;i<4;i++){
            $(`#people-rank div.TOP${i}`).click(function(){
                let color = $(this).css('background-color');
                $('#people-rank div.big-card').css('background-color',`${color}`);
                $('#people-rank div.big-card p').css('color',`#fafafa`);
                $('#people-rank div.big-card div.donation-total').css('color',`#fafafa`);
                $('#people-rank div.big-card h3').css('color',`#fafafa`);
            })
        }
        for(i=4;i<6;i++){
            $(`#people-rank div.TOP${i}`).click(function(){
                let color = $(this).css('background-color');
                $('#people-rank div.big-card').css('background-color',`${color}`);
                $('#people-rank div.big-card p').css('color',`#1D1E4C`);
                $('#people-rank div.big-card div.donation-total').css('color',`#1D1E4C`);
                $('#people-rank div.big-card h3').css('color',`#1D1E4C`);
            })
        }
        for(i=1;i<4;i++){
            $(`#money-rank div.TOP${i}`).click(function(){
                let color = $(this).css('background-color');
                $('#money-rank div.big-card').css('background-color',`${color}`);
                $('#money-rank div.big-card p').css('color',`#fafafa`);
                $('#money-rank div.big-card div.donation-total').css('color',`#fafafa`);
                $('#money-rank div.big-card h3').css('color',`#fafafa`);
            })
        }
        for(i=4;i<6;i++){
            $(`#money-rank div.TOP${i}`).click(function(){
                let color = $(this).css('background-color');
                $('#money-rank div.big-card').css('background-color',`${color}`);
                $('#money-rank div.big-card p').css('color',`#1D1E4C`);
                $('#money-rank div.big-card div.donation-total').css('color',`#1D1E4C`);
                $('#money-rank div.big-card h3').css('color',`#1D1E4C`);
            })
        }
    }

    if($(document).width()<768){
        $('ul.menu >li:nth-child(1)').text('助環境一力');
        $('ul.menu >li:nth-child(2)').text('與我們一起');
    }else{
        $('ul.menu >li:nth-child(1)').text('助環境一力 (參與活動)');
        $('ul.menu >li:nth-child(2)').text('與我們一起 (發起活動)');    
    }

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

    $(window).resize(function(){
        if($(document).width()<=767){
            $('ul.menu >li:nth-child(1)').text('助環境一力');
            $('ul.menu >li:nth-child(2)').text('與我們一起');
        }else{
            $('ul.menu >li:nth-child(1)').text('助環境一力 (參與活動)');
            $('ul.menu >li:nth-child(2)').text('與我們一起 (發起活動)');    
        }
        if($(document).width()<992){
            $('.small-card').removeClass('effect');
        }
        $('ul.slides').css({left:0});

    })
    slider();

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

    //點擊活動列表，活動卡片顯示，及其關閉按鈕設定
    $('ul#list li').click(function(){
        $('#list-card').css('display','block');
    })

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
    
    let date = $('div.weather-div p.date');
    let description = $('div.weather-div p.description');
    let temperature_hight = $('div.temperature p.hight');
    let temperature_low = $('div.temperature p.low');
    let locationName = '桃園市'; //之後替換成點選的活動地區
    for(let i=0; i<7; i++){
        let day = new Date();
        day.setTime(day.getTime()+(24*60*60*1000)*i); 
        day2 = (day.getMonth()+1) + "/" + day.getDate(); 
        date[i].innerText = day2;
    }

    $.ajax({
        url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-6A5D1FA0-3C09-4FF7-9D3B-7FD3C9EB3C52&limit=1000&offset=0&format=JSON",
        method:'get',
        dataType:'json',
        data:{},
    }).done(function(res){
        console.log(res);
        let A =res.records.locations[0];
        for(i=0;i<A.location.length;i++){
            if(A.location[i].locationName == locationName){
                let k=1;
                description[0].innerText = A.location[i].weatherElement[6].time[0].elementValue[0].value;
                temperature_hight[0].innerText = A.location[i].weatherElement[12].time[0].elementValue[0].value +'°C';
                temperature_low[0].innerText = A.location[i].weatherElement[8].time[0].elementValue[0].value +'°C';
                let iconValue = A.location[i].weatherElement[6].time[0].elementValue[1].value;
                let weatherIcon1 = document.getElementById(`weatherIcon1`);
                if(iconValue == 1 || iconValue==24){
                    weatherIcon1.src = "./img/event/weather/sun.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/sun2.jpg")');
                }else if(iconValue == 4 || iconValue==5 || iconValue==6 || iconValue==7 || iconValue==27 || iconValue==28){
                    weatherIcon1.src = "./img/event/weather/cloudy.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/clouds2.jpg")');
                }else if(iconValue == 2 || iconValue==3 || iconValue==25 || iconValue==26){
                    weatherIcon1.src = "./img/event/weather/太陽雲.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/sun2.jpg")');
                }else if( (iconValue =>8  && iconValue <= 14) || (iconValue =>29  && iconValue <=32) || iconValue==39 || iconValue==38 || iconValue==20){
                    weatherIcon1.src = "./img/event/weather/rainy.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/rain2.jpg")');
                }else if( (iconValue =>15  && iconValue <= 18) || (iconValue =>33  && iconValue <=36) || iconValue==41 || iconValue==22){
                    weatherIcon1.src = "./img/event/weather/雨雷.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/lightning2.jpg")');
                }else if(iconValue == 19){
                    weatherIcon1.src = "./img/event/weather/太陽雲雨.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/rain2.jpg")');
                }else if(iconValue == 21){
                    weatherIcon1.src = "./img/event/weather/太陽打雷雨.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/lightning2.jpg")');
                }else if(iconValue == 23 || iconValue == 37 || iconValue == 42){
                    weatherIcon1.src = "./img/event/weather/snowing.svg";
                    $('div.weather-div').css('background-image','url("../img/event/weather/snow2.jpg")');
                }
                for(let j=2; j<=13; j=j+2){
                    if(A.location[i].weatherElement[6].time[j].elementValue[0].value != ' '){
                        description[k].innerText = A.location[i].weatherElement[6].time[j].elementValue[0].value;
                    }
                    if(A.location[i].weatherElement[12].time[j].elementValue[0].value != ' '){
                        temperature_hight[k].innerText = A.location[i].weatherElement[12].time[j].elementValue[0].value +'°C';
                    }
                    if(A.location[i].weatherElement[8].time[j].elementValue[0].value != ' '){
                        temperature_low[k].innerText = A.location[i].weatherElement[8].time[j].elementValue[0].value +'°C';
                    }
                    let iconValue = A.location[i].weatherElement[6].time[j].elementValue[1].value;
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
        }
    }).fail(function(err){
        console.log(err)
    });


    // progress bar
    // let progress_people = (抓取目前報名人數/目標志工人數)*100+'%' ;
    let progress_people = '35%';
    $('#people').css('width',progress_people);
    // let progress_money = (抓取目前募款資金/目標募款金額)*100+'%' ;
    let progress_money = '50%';
    $('#money').css('width',progress_money);
 
    let arrLocation_current = [['L2', 0, 'M15'],['L10', 1, 'M17'],['L3', 0, 'M15'],['L6', 1, 'M16'],['L9', 1, 'M14'],['L7', 0, 'M5']];
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


    $('#all').click(function(){
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
    })
    $('#join').click(function(){
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
        
    })
    $('#coming').click(function(){
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
            if(arrLocation_current[k][1] ==1){
                let location = arrLocation_current[k][2];
                let M = document.getElementsByClassName(`${location}Mark1`);
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
    })

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
            
        })
    }
    $(`.M7`).addClass('central');
    document.getElementsByClassName(`M7Mark`)[0].style.display = '';

    
})
