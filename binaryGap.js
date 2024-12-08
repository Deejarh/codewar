// A binary gap within a positive integer N is any maximal sequence of consecutive zeros
// that is surrounded by ones at both ends in the binary representation of N.
//The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// The number 20 has binary representation 10100 and contains one binary gap of length 1. 
//The number 15 has binary representation 1111 and has no binary gaps. 
// The number 32 has binary representation 100000 and has no binary gaps.
// Write a function: function solution(N); that, given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.


function solution(N) {
    // Implement your solution here
    //convert number to binary
    const binary = N.toString(2)
    const gaps = binary.split('1')
    if (binary.endsWith('0')){
    gaps.pop()
}
    const gapLength = gaps.map(gap => gap.length).filter(gapLength => gapLength > 0)
    if ( gapLength.length > 0 ){
     const result = Math.max(...gapLength)
     return result
    } else {
        return 0
    }
    
}
