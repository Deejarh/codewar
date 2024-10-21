function flatten (value) {
    const result = [];
    const copy = value.slice()
    console.log(copy)
    while(copy.length) {
        const item = copy.shift()
        console.log(item)
        if (Array.isArray(item)) {
            copy.unshift(...item)
        } else {
            result.push(item)
        }
    }
    console.log(result)

}


flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
])

