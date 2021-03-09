module.exports = function toReadable(number) {
    // Create array of number names from zero to nineteen
    const zeroNineteen = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    // Create array of dozens' names
    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    // Convert number to string
    let numberString = number.toString();

    // Convert hundreds and dozens values from string to numbers
    let unitHundred = parseInt(numberString[2]);
    let dozenHundred = parseInt(numberString[1]);

    // If number equals 0 return 'zero'
    if (number === 0) {
        return "zero";
    }

    // If number in between 1 - 19
    if (number <= 19) {
        return zeroNineteen[number];
    }

    // If number equals to 20, 30, 40, 50, 60, 70, 80, 90
    if (number > 19 && number < 100 && dozenHundred === 0) {
        return dozens[numberString[0]];
    }

    // If number in between 20 - 99 and doesn't equal to 20, 30, 40, 50, 60, 70, 80, 90
    if (number > 19 && number < 100 && dozenHundred > 0) {
        return dozens[numberString[0]] + " " + zeroNineteen[numberString[1]];
    }

    // If number equals to 100, 200, 300, 400, 500, 600, 700, 800, 900
    if (number > 99 && dozenHundred === 0 && unitHundred === 0) {
        return zeroNineteen[numberString[0]] + " hundred";
    }

    // If number equals to hundreds
    if (numberString.length === 3) {
        // Make string from second and third values of numberString
        let numberStringDozenUnit = numberString.substring(1, 3);
        // If number in between 1-9[hundred]0-19
        if (dozenHundred <= 1 && unitHundred <= 9) {
            return (
                zeroNineteen[numberString[0]] +
                " hundred " +
                //Converting to integer numberStringDozenUnit to be able to match array 'zeroNineteen' value
                zeroNineteen[parseInt(numberStringDozenUnit)]
            );
            // If number in between 1-9[hundred]0
        } else if (dozenHundred >= 2 && unitHundred === 0) {
            return (
                zeroNineteen[numberString[0]] +
                " hundred " +
                dozens[numberStringDozenUnit[0]]
            );
            // If number in between 1-9[hundred][dozen[2-9]]1-9
        } else if (dozenHundred >= 2 && unitHundred > 0) {
            return (
                zeroNineteen[numberString[0]] +
                " hundred " +
                dozens[numberStringDozenUnit[0]] +
                " " +
                zeroNineteen[numberString[2]]
            );
        }
    }
};
