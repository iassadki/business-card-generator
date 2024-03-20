// Javascript Functions

export function insertLineBreaks(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if (i % 14 === 0 && i !== 0) {
            newStr += '<br>';
        }
        newStr += str[i];
    }
    return newStr;
}