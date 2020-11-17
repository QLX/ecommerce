export default function currencyFormatter(num) {
    num = String(Math.floor(num));
    if (num.length > 3) {
        const numStrArr = [];
        if (num.length % 3 !== 0) {
            numStrArr.push(num.slice(0, num.length % 3));
        }
        while (numStrArr.join().length < num.length) {
            numStrArr.push(num.slice(numStrArr.length, numStrArr.length + 3));
        }
        num = numStrArr.join(',');
    }
    return '$' + num;    
}