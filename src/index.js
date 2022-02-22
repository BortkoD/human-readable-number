module.exports = function toReadable(number) {
    if (number == 0) return 'zero';

    let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenth = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let ans = '';

    let lessThanHundred = function (tempNumber) {
        if (tempNumber < 10) return digits[tempNumber];
        else if (tempNumber >= 10 && tempNumber < 20) return tenth[tempNumber - 10];
        else return dozens[Math.floor(tempNumber / 10) - 2] + ' ' + digits[tempNumber % 10];
    }

    if (number < 100) ans = lessThanHundred(number);
    else if (number >= 100 && number < 1000) ans = digits[Math.floor(number / 100)] + ' hundred ' + lessThanHundred(number % 100);
    else if (number >= 1000) {
        ans = lessThanHundred(Math.floor(number / 1000)) + ' thousand ';
        if (number % 1000 >= 100) ans += digits[Math.floor(number / 100)] + ' hundred ' + lessThanHundred(number % 100);
    }
    return ans.trim();
}
