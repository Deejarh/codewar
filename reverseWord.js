function reverseString(str) {

    let strArray = str.split('')
    // take first and last index, if its not the same reverse
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        let right = strArray[i];
        let left = strArray[strArray.length - 1 - i];
        if (left !== right) {
            strArray[i] = left
            strArray[str.length - 1 - i] = right


        }
    }
    return strArray.join('')
}

console.log(reverseString('name'))