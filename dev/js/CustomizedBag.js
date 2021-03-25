
function init1(){
    document.getElementById('theFile1').onchange = fileChange1;
}

function fileChange1(){
    //選到的圖檔
    let file1 = document.getElementById('theFile1').files[0];
    //=================放置圖片
    let readFile1 = new FileReader();

    readFile1.readAsDataURL(file1);
    readFile1.addEventListener('load',function(){
        let image1 = document.getElementById('image1');
        image1.src= readFile1.result;
        image1.style.maxWidth = '100%';
        image1.style.maxHeight = '100%';
    });
}
window.addEventListener('load',init1);

 


//上傳背面圖案:
function init2(){
    document.getElementById('theFile2').onchange = fileChange2;
}

function fileChange2(){
    
    let file2 = document.getElementById('theFile2').files[0];

    let readFile2 = new FileReader();

    readFile2.readAsDataURL(file2);
    readFile2.addEventListener('load',function(){
        let image2 = document.getElementById('image2');
        image2.src= readFile2.result;
        image2.style.maxWidth = '100%';
        image2.style.maxHeight = '100%';
    });
}
window.addEventListener('load',init2);




//上傳袖子圖案:
// function init3(){
//     document.getElementById('theFile3').onchange = fileChange3;
// }

// function fileChange3(){
    
//     let file3 = document.getElementById('theFile3').files[0];

//     let readFile3 = new FileReader();

//     readFile3.readAsDataURL(file3);
//     readFile3.addEventListener('load',function(){
//         let image3 = document.getElementById('image3');
//         image3.src= readFile3.result;
//         image3.style.maxWidth = '60px';
//         image3.style.maxHeight = '60px';
//     });
// }
// window.addEventListener('load',init3);