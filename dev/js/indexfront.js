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

var g = document.getElementById('AlltargetData');
for (var i = 0, len = g.children.length; i < len; i++){
    (function(index){
        g.children[i].onclick = function(){
            currentItem = index + 1;
            showData();
            currentItem = 0;
        }    
    })(i);
}



