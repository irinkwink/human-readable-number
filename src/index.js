module.exports = function toReadable (number) {
    const numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    const dozens = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    let result = '';

    if (number === 0) {
        result = numbers[number];

    } else {
        if (number >= 100 && number < 1000) {
            const numberOfHundreds = Math.floor(number / 100);
            result += `${numbers[numberOfHundreds]} hundred `;
            number -= numberOfHundreds * 100;
        }
    
        if (number >= 20) {
            const numberOfDozens = Math.floor(number / 10);
            result += `${dozens[numberOfDozens - 2]} `;
            number -= numberOfDozens * 10;
        }
    
        if (number < 20 && number > 0) {
            result += numbers[number];
        }
    }

    return result.trim();
}
