const data = [{
        day: "mon",
        amount: 17.45,
    },
    {
        day: "tue",
        amount: 34.91,
    },
    {
        day: "wed",
        amount: 52.36,
    },
    {
        day: "thu",
        amount: 31.07,
    },
    {
        day: "fri",
        amount: 23.39,
    },
    {
        day: "sat",
        amount: 43.28,
    },
    {
        day: "sun",
        amount: 25.48,
    },
];



let graph = document.querySelector(".scard-graph-container");
let graphday = document.querySelector(".graph-day-container");
let totalSpends = document.querySelector(".scard-total-amt");
let daySpend = document.querySelector(".scard-day-spend");

let dayWiseAmount = []
let sum = 0;





const graphCal = () => {
    let graphArr = [];
    let graphDay = []
    
        data.map((content, index) => {
            console.log(1);
            graphArr = [...graphArr, `<div class = "graph-bar" style="height:${Math.floor(content.amount/7)}rem"></div>`, ``];
            graphDay = [...graphDay, `<div class =  "graph-day">${content.day}</div>`];
            sum = sum + content.amount;
            dayWiseAmount = [...dayWiseAmount, content.amount];
        })
    
    console.log(graphDay)
    graph.innerHTML = graphArr.join("");
    graphday.innerHTML = graphDay.join("");
    totalSpends.innerHTML = `$${sum}`;
}

graphCal();
