const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let stringHold = "";
    for (let i = 0; i < num; i++) {
        stringHold += string;
    }
    return stringHold;
};

// Do not edit below this line
module.exports = repeatString;