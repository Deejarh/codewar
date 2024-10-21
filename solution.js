






function accum(str) {
    let res = `${str.charAt(0).toUpperCase()}`;
    console.log(res)
    for (let i = 1; i < str.length; i++) {
        let duplicate = str.charAt(i).repeat(i + 1)
        res = `${res}-${duplicate.charAt(0).toUpperCase() + duplicate.slice(1)}`
    }
    return res

}




console.log(accum('ZpglnRxqenU'))

function findShort(s) {
    console.log(s)
    s = s.split(' ')
    let res = s.map((val, i) => val.length)
    let min = Math.min(...res)
    console.log(s)
    console.log(res)
    return min

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function arrayDiff(a, b) {

    b.forEach((itemDiff) => {
        a = a.filter((item => item !== itemDiff))
        console.log(a)

    })
    return a


}

console.log(arrayDiff([], [1, 2]))


function digitalRoot(n) {
    let dir = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
    let newDir = dir.map((val, arr) => val.length)
    console.log(newDir)
    while (n >= 10) {
        let result = 0
        n.toString().split('').forEach((val) => {
            result += parseInt(val)
        })
        n = result
    }
    console.log(n)
    return n
    // ...
}

console.log(digitalRoot(313357))

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let ns = 0
    let ew = 0


    walk.forEach((block) => {
        if (block === 'n') ns++
        if (block === 's') ns--
        if (block === 'w') ew++
        if (block === 'e') ew--
    })

    return ns === 0 && ew === 0
    //insert brilliant code here

}



console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))

function bouncingBall(h, bounce, window) {
    // your code here
    const isBounce = 0 < bounce && bounce < 1
    const isH = h > 0
    const isWindow = window < h

    if (isBounce && isH && isWindow) {
        let count = 1
        h = h * bounce
        while (h > window) {
            h = h * bounce
            count += 2
        }
        return count

    } else {
        return -1
    }

}

console.log(bouncingBall(30.0, 0.66, 1.5))

function high(x) {

    const AlphabetObj = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
        ['g', 7],
        ['h', 8],
        ['i', 9],
        ['j', 10],
        ['k', 11],
        ['l', 12],
        ['m', 13],
        ['n', 14],
        ['o', 15],
        ['p', 16],
        ['q', 17],
        ['r', 18],
        ['s', 19],
        ['t', 20],
        ['u', 21],
        ['v', 22],
        ['w', 23],
        ['x', 24],
        ['y', 25],
        ['z', 26]
    ])
    x = x.split(' ')

    let result = {}
    let score = 0


    x.forEach((str) => {
        console.log(str)
        for (let char of str) {
            score += AlphabetObj.get(char)

        }
        result[str] = score
        score = 0
    })
    const maxWord = Object.keys(result).reduce((a, b) => result[a] >= result[b] ? a : b)

    return maxWord

}

console.log(high('b aa'))

function humanReadable(seconds) {
    if (seconds < 0) return 'seconds must be a postive value'
    let HH = parseInt(seconds / 3600);
    let minutes = parseFloat(seconds % 3600)
    let MM = parseInt(minutes / 60)
    let SS = parseInt(minutes % 60)

    return `${HH < 10 ? `0${HH}` : HH}:${MM < 10 ? `0${MM}` : MM}:${SS < 10 ? `0${SS}` : SS}`;
}

console.log(humanReadable(359999))


function alphabetPosition(text) {
    const AlphabetObj = new Map([
        ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6], ['g', 7], ['h', 8],
        ['i', 9], ['j', 10], ['k', 11], ['l', 12], ['m', 13], ['n', 14], ['o', 15], ['p', 16],
        ['q', 17], ['r', 18], ['s', 19], ['t', 20], ['u', 21], ['v', 22], ['w', 23], ['x', 24],
        ['y', 25], ['z', 26]
    ])
    let textArr = text.replace(/\s+/g, '').toLowerCase().split('')
    let result = textArr.map((char) => char = AlphabetObj.get(char) ? AlphabetObj.get(char) : '')

    result = result.filter((val) => val != '')


    return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

function findOdd(A) {
    //happy coding!
    let result;
    //loop through the array and create a new array that saves unique value and number of times it occurs
    let countMap = new Map()
    A.forEach((val) => {

        if (countMap.has(val)) {
            countMap.set(val, countMap.get(val) + 1)
        } else {
            countMap.set(val, 1)
        }
    })

    for (let [key, count] of countMap)

        if (count % 2 !== 0) {
            return key
        }
    //const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

    //return the value that has odd count
    return 0;
}

function findEvenIndex(arr) {
    //Code goes here!

    //sum array
    // loop through array and sum, then check if (leftsum = totalsum-leftsum-arr[i])
    // return the index that meet the check

    const totalSum = arr.reduce((prev, curr) => prev + curr, 0)
    let leftSum = 0
    for (let i = 0; i < arr.length; i++) {

        if (leftSum == totalSum - leftSum - arr[i]) {
            return i
        }
        leftSum += arr[i]
    }
    return -1

}

(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))



function incrementString (strng) {
    // return incrementedString
     let reg = /\d*$/
      let numStrng = strng.match(reg)[0]
      if (numStrng) {
          const padLength = numStrng.length
          let num = parseInt(numStrng) + 1
          let numRes = num.toString().padStart(padLength, 0)
          return strng.slice(0, -padLength) + numRes
  
  
      }
      return `${strng}1`
  }

 console.log(incrementString('foo0042'))
console.log(incrementString('fo97obar79'))


// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
  //12 ==> 21
 // 513 ==> 531
 //2017 ==> 2071
 //If the digits can't be rearranged to form a bigger number, return -1 
function nextBigger(n){
    //your code here
    //check if numbers are equal return -1
    //slice the last digit if its not equal
    //revers the arr,
  }



  function nextBigger(n) {
    // Convert number to an array of digits
    let digits = n.toString().split('');
  
    // Step 1: Find the rightmost pair where the first digit is less than the next
    for (let i = digits.length - 2; i >= 0; i--) {
      if (digits[i] < digits[i + 1]) {
        // Step 2: Find the smallest digit to the right of digits[i] that's larger than digits[i]
        for (let j = digits.length - 1; j > i; j--) {
          if (digits[j] > digits[i]) {
            // Step 3: Swap digits[i] and digits[j]
            [digits[i], digits[j]] = [digits[j], digits[i]];
  
            // Step 4: Sort the remaining digits after i to get the smallest possible number
            let leftPart = digits.slice(0, i + 1);
            let rightPart = digits.slice(i + 1).sort();
  
            // Combine and return the result as a number
            return parseInt(leftPart.concat(rightPart).join(''), 10);
          }
        }
      }
    }
  
    // If no bigger number can be formed, return -1
    return -1;
  }
  //console.log(nextBigger(144))
 


  function solution(list){
   //loop through each item
   let result = [];
   let i = 0
   while (i < list.length) {
       let start = i
       while ( i < list.length-1 && (list[i + 1] === list[i]+1)) {
           i++
       }
       if (i - start >= 2){
           result.push(`${list[start]}-${list[i]}`)
       } else {
           for (j = start; j <=i; j++){
               result.push(`${list[j]}`)
           }
       }
       i++
   }
   console.log(result)
   return result.join(',')
   }

   console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))