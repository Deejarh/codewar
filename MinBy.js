
function minBy(array, iteratee) {
    let computed; let result;

    for (const value of array) {
        const current = iteratee(value)
        if (current != null && (computed === undefined || current < computed)) {
            computed = current
            result = value
        }
    }
    return result
}

console.log(minBy([2, 3, 1, 4], (num) => num))

console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n))

function functionLength (func) {
return func.length
}

function foo() {}
function bar(a) {}
function baz(a, b) {}

console.log(functionLength(foo)); // 0
functionLength(bar); // 1
console.log(functionLength(baz)); // 2


function clamp (value, lower, upper) {
return Math.min(upper, (Math.max(value, lower)))
}

console.log(clamp(-10, -3, 5))
console.log(clamp(3, 0, 5))