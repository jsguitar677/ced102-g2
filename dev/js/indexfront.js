//data
const reviews=[
    {
        id:1,
        personTarget:"需求志工人數 50人",
        personNow:"已報名志工人數 43人",
        moneyTarget:"目標募款金額 $100,000",
        moneyNow:"已達募款金額 $43,210",
        deadline:"活動截止日 5天"
    },
    {
        id:2,
        personTarget:"需求志工人數 20人",
        personNow:"已報名志工人數 17人",
        moneyTarget:"目標募款金額 $10,000",
        moneyNow:"已達募款金額 $3,210",
        deadline:"活動截止日 11天"
    },
    {
        id:3,
        personTarget:"需求志工人數 30人",
        personNow:"已報名志工人數 5人",
        moneyTarget:"目標募款金額 $30,000",
        moneyNow:"已達募款金額 $5,500",
        deadline:"活動截止日 3天"
    },
    {
        id:4,
        personTarget:"需求志工人數 40人",
        personNow:"已報名志工人數 44人",
        moneyTarget:"目標募款金額 $50,000",
        moneyNow:"已達募款金額 $48,567",
        deadline:"活動截止日 2天"
    },
    {
        id:5,
        personTarget:"需求志工人數 30人",
        personNow:"已報名志工人數 20人",
        moneyTarget:"目標募款金額 $100,000",
        moneyNow:"已達募款金額 $43,210",
        deadline:"活動截止日 1天"
    },
    {
        id:6,
        personTarget:"需求志工人數 25人",
        personNow:"已報名志工人數 3人",
        moneyTarget:"目標募款金額 $10,000",
        moneyNow:"已達募款金額 $3,210",
        deadline:"活動截止日 7天"
    },
];

// ID DATA
const personTarget = document.getElementById("personTarget");
const personNow = document.getElementById("personNow");
const moneyTarget = document.getElementById("moneyTarget");
const moneyNow = document.getElementById("moneyNow");
const deadline = document.getElementById("deadline");

// 按鈕
// const pre2 = document.getElementById("pre2");
// const naxt2 = document.getElementById("naxt2");
var targetData = document.querySelector(".targetData");


let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
   showData();
})

function showData(){
    const item = reviews[currentItem];
    personTarget.textContent = item.personTarget;
    personNow.textContent = item.personNow;
    moneyTarget.textContent = item.moneyTarget;
    moneyNow.textContent = item.moneyNow;
    deadline.textContent = item.deadline;
}

function getTargetDataIndex(){

}

for(var i=0 ; i<targetData.length; i++){
    targetDatas[i].setAttribute("index",i+1);
    targetDatas[i].onclick = function(){
    console.log("我是第"+this.getAttribute("index")+"个div");
}
}

// targetData.addEventListener("click",function(){
//     var a = targetData.index(this);
//     console.log(a);
// });


// targetData.addEventListener("click",function(){
//     currentItem++;
//     if(currentItem > reviews.length -1){
//         currentItem = 0;
//     }
//     showData();
// });
