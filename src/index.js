import c3 from "c3";

const data =[
    {
    "month": "Jan",
    "Apples": 327,
    "Peaches": 437,
    "Pears": 111
    },
    {
    "month": "Feb",
    "Apples": 555,
    "Peaches": 454,
    "Pears": 222
    },
    {
    "month": "Mar",
    "Apples": 242,
    "Peaches": 864,
    "Pears": 343
    },
    {
    "month": "Apr",
    "Apples": 222,
    "Peaches": 454,
    "Pears": 434
    }
];

const options = {
    bindto: '#chart',
    axis:{
        x: { type: "category"},
        y: {},
    },
    data: {
        labels: true,
        type: "bar",
        json: data,
        keys: {
            x: "month",
            value: ["Apples", "Peaches", "Pears"],
        },
    },
};

const chart = c3.generate(options)