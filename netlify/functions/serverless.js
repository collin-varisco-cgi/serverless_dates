function modMonth(end){
    if(end == true && start_month == final_month && start_year == final_year){
        return final_month;
    }
    if(start_month == 12){
        return 1;
    } else {
        return start_month + 1;
    }
}

function modDay(){
    // The current day is used as the 'end' query paramter on the last query
    if(start_day == 1 && start_month == final_month && start_year == final_year){
        return final_day + 1;
    } else {
        return 1;
    }
    
}

function modYear(m_month){
    if(m_month == 1){
        return start_year + 1;
    } else {
        return start_year;
    }
}

// 7 - 1 - 2021 : The first day of recorded data
const default_month = 7;
const default_day = 1;
const default_year = 2021;

// Grabs current date. Used in the final query.
const dateVar = new Date();
const final_month = (dateVar.getMonth()+1);
const final_year = dateVar.getFullYear();
const final_day = dateVar.getDate();

// Start at beginning of data : 7 - 1 - 2021
var start_month = default_month;
var start_day = default_day;
var start_year = default_year;

// End variables are a month ahead of start variables
var end_month = modMonth(start_month);
var end_day = modDay(start_month, start_year);
var end_year = modYear(end_month)

var jsonObject = []; // Contains dates

// Append new start and end date object
function addDates(startDate, endDate){
    var jsonDate = { "start_date": startDate, "end_date": endDate };
    jsonObject.push(jsonDate);
}

exports.handler = async function() {
    // Loop until all query dates are added to object
    var go = true;
    while(go) {
        if(start_year == final_year && start_month == (final_month)  ) { go = false; }
        var startingDate = start_year + "-" + start_month + "-" + start_day;
        var endingDate = end_year + "-" + end_month + "-" + end_day;
        addDates(startingDate, endingDate);
        start_day = modDay();
        start_month = modMonth(false);
        start_year = modYear(start_month);
        end_month = modMonth(true);
        end_year = modYear(end_month);
        end_day = modDay();
    }

    return {
        statusCode: 200,
        body: JSON.stringify(jsonObject)
    }
}