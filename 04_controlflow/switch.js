//------------------------------SWITCH STATEMENT------------------------------//
// The switch statement is used to perform different actions based on different conditions.
// It is often used as an alternative to multiple if...else if...else statements when you have a single variable to evaluate against multiple possible values.

/*
    switch(key){
        case value:
            ----
            break;
        case value2:
            ----
            break;
        ...
        default:
            ----
    }
            if break is omitted, the next cases will be executed, except default even if the condition does not match (fall-through behavior).
*/

const month = 3;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
    
}