// Convert Data From Labels and Series into Objects

// -------------- Example of Original Data would look like

// const origDataFormat = {
//     labels: ["M", "T", "W", "T", "F", "S", "S"],
//     series: ["Reed": [12, 17, 7, 17, 23, 18, 28], "Gary": [13, 19, 22, 10, 28, 18, 26], "Clive": [18, 12, 21, 24, 33, 29, 31], "Nicolas": [13, 18, 22, 17, 28, 24, 27]]
// }

export default function dataConverter(origDataFormat) {

    const dataArr = []
    origDataFormat.series.map(item => {
        const seriesSectionArr = [];
        for (var i = 0; i < item.count.length; i++) {
            seriesSectionArr.push({
                [item.name]: item.count[i]
            })
        }
        dataArr.push(seriesSectionArr);
    });

    const newData = [];
    for (var i = 0; i < origDataFormat.labels.length; i++) {
        const newObj = { "name": origDataFormat.labels[i] };
        for (var x = 0; x < origDataFormat.series.length; x++) {
            Object.assign(newObj, dataArr[x][i]);
        }
        newData.push(newObj);
    };

    console.log(newData);

    const keys = origDataFormat.series.map(item => item.name);
    
    return [newData, keys];
}

// --------------- Returns This

// const data = [
//     {
//         "name": "M",
//         "Reed": 12,
//         "Gary": 13
//     },
//     {
//         "name": "T",
//         "Reed": 7,
//         "Gary": 18
//     },
//     {
//         "name": "W",
//         "Reed": 32,
//         "Gary": 14
//     },
    // {
//         "name": "T",
//         "Reed": 26,
//         "Gary": 20
//     },
//     {
//         "name": "F",
//         "Reed": 16,
//         "Gary": 26
//     },
//     {
//         "name": "S",
//         "Reed": 8,
//         "Gary": 22
//     },
//     {
//         "name": "S",
//         "Reed": 24,
//         "Gary": 30
//     }
// ]