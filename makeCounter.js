//Mutating a function's parameters is usually not recommended due to causing of side effects.
// However in this case initialValue is a primitive and incrementing 
//it will not cause any side effects.
// Object and arrays are passed by reference, primitive are copied

function makeCounter (value = 0) {
    return value++
}

console.log(makeCounter())
console.log(makeCounter(1))
console.log(makeCounter(makeCounter(5)))