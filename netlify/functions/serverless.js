function modMonth(month){
    if(month - 1 == 0){
        return 12;
    } else {
        return month - 1;
    }
}

function leap(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function modYear(year, month){
    if(modMonth(month) == 12){
        return year - 1;
    }
    else {
        return year;
    }
}

exports.handler = async function() {
    const dateVar = new Date();
    var month = (dateVar.getMonth()+1);
    var year = dateVar.getFullYear();
    var day = dateVar.getDate();
    var dateStr = [];
    var end_dateStr = [];
    for(var i = 0; i < 12; i++){
        if(day > maxDay(modMonth(month), modYear(year, month)))
        {
            var max = maxDay(modMonth(month), modYear(year, month));
            var difference = day - max;
            dateStr.push(modYear(year, month) + "-" + modMonth(month) + "-" + (max - difference))
            end_dateStr.push(year + "-" + month + "-" + day);
            if(max != day){ 
                day = (max - difference); 
            }
        } else {
            dateStr.push(modYear(year) + "-" + modMonth(month) + "-" + day) 
            end_dateStr.push(year + "-" + month + "-" + day);
        }
        if(year > modYear(year, month)){
            year = year - 1;
        }
        month = modMonth(month);
    } 

    // Check for leap year
    function maxDay(month, year){
        const maxDayMap = new Map();
        maxDayMap.set('1', 31);
        maxDayMap.set('3', 31);
        maxDayMap.set('4', 30);
        maxDayMap.set('5', 31);
        maxDayMap.set('6', 30);
        maxDayMap.set('7', 31);
        maxDayMap.set('8', 31);
        maxDayMap.set('9', 30);
        maxDayMap.set('10', 31);
        maxDayMap.set('11', 30);
        maxDayMap.set('12', 31);
        if(leap(year)){
            maxDayMap.set('2', 29);
        } else {
            maxDayMap.set('2', 28); 
        }
        return maxDayMap.get(month.toString());
    }


    return {
        statusCode: 200,
        body: JSON.stringify( [
            { 
                "start_date": dateStr[0],
                "end_date": end_dateStr[0] 
            },
            { 
                "start_date": dateStr[1],
                "end_date": end_dateStr[1] 
            },
            { 
                "start_date": dateStr[2],
                "end_date": end_dateStr[2] 
            },
            { 
                "start_date": dateStr[3],
                "end_date": end_dateStr[3] 
            },
            { 
                "start_date": dateStr[4],
                "end_date": end_dateStr[4] 
            },
            { 
                "start_date": dateStr[5],
                "end_date": end_dateStr[5] 
            },
            { 
                "start_date": dateStr[6],
                "end_date": end_dateStr[6] 
            },
            { 
                "start_date": dateStr[7],
                "end_date": end_dateStr[7] 
            },
            { 
                "start_date": dateStr[8],
                "end_date": end_dateStr[8] 
            },
            { 
                "start_date": dateStr[9],
                "end_date": end_dateStr[9] 
            },
            { 
                "start_date": dateStr[10],
                "end_date": end_dateStr[10] 
            },
            { 
                "start_date": dateStr[11],
                "end_date": end_dateStr[11] 
            }
        ])
    }
}