import c3 from "c3";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

window.chartTransform = function (){
    FileMaker.PerformScript("onTransformChart");
};

window.loadChart = function (json) {
const obj = JSON.parse(json);
const data = obj.data;
const chartType = obj.chartType;

const options = {
    bindto: '#chart',
    axis:{
        x: { type: "category"},
        y: {},
    },
    data: {
        onclick: function (d, element){
            console.log("data",d);
            const index = d.index;
            const month = months[index];
            const item = d.name;
            const value = d.value;
            console.log("ITEM", item);
            let returnValues = { month,item,value,};
            FileMaker.PerformScript("onChartClick",JSON.stringify(returnValues));
        },
        labels: true,
        type: chartType,
        json: data,
        keys: {
            x: "month",
            value: ["Apples", "Peaches", "Pears"],
        },
    },
};

const chart = c3.generate(options);

window.transformChart = function (type) {
    chart.transform(type)
};

window.loadData = function(json){
    const obj = JSON.parse(json);
    const data = obj.data;
    console.log(data);
    chart.load({
        json: data,
        keys: {
            x: "month",
            value: ["Bananas"],
        },
    })
};
};