// Start value
const startNum = 1

// Array of strings to replace divisible numbers
const replaceValues = ['yu', 'gi', 'ho'];

let output = []

// Boolean checks for values divisible by one or two digits
let db1 = false, db2 = false;

// Check numbers that are divisible by a single digit
const checkDivisibilityByOne = (num, a, b, c) => {
    if (num % a == 0 && !(( num % b === 0 || num % c === 0 ))) {
        db1 = true
    }  else {
        db1 = false
    }
    return db1
}

// Check numbers divisible by two digits
const checkDivisibilityByTwo = (num, a, b, c) => {
    if (num % (a * b) === 0 && !((num % (b * c) === 0 || num % (a * c) === 0))) {
        db2 = true
    } else {
        db2 = false
    }
    return db2
}

// Replace values with a single divisor
const replaceSinglesWith = (val) => {
    let a;
    if (val === 2) {
        a = replaceValues[0]
    } else if (val === 3) {
        a = replaceValues[1]
    } else if (val === 5) {
        a = replaceValues[2]
    }

    return a;
}

//  Replace values with double divisors
const replaceDoublesWith = (a, b) => {
    let val, val1, val2;
    let arr1 = [], arr2 = [], arr3 = []
    if (a == 2 && b == 3) {
        val1 = replaceValues[0]
        val2 = replaceValues[1]

        arr1.push(val1, val2)
        val = arr1.join('-')
    } else if (a == 3 && b == 5) {
        val1 = replaceValues[1]
        val2 = replaceValues[2]

        arr2.push(val1, val2)
        val = arr2.join('-')
    } else if (a == 2 && b == 5) {
        val1 = replaceValues[0]
        val2 = replaceValues[2]

        arr3.push(val1, val2)
        val = arr3.join('-')
    }

    return val
    
}

// Replace numbers with 3 divisors
const replaceTripleWith = (a, b, c) => {
    let val, val1, val2, val3;
    let arr = [];
    if (a == 2 && b == 3 && c == 5) {
        val1 = replaceValues[0]
        val2 = replaceValues[1]
        val3 = replaceValues[2]

        arr.push(val1, val2, val3)
        val = arr.join('-')
    }

    return val
}

// The replaceNumber function
const replaceNumber = num => { 
    // Array to hold the numbers to be replaced
    let arr = [];
    // Temporary storage of the output
    let tempOutput = []
    for (let i = startNum; i <= num; i++) {
        // Push numbers into array
        arr.push(i)
    }
    // Loop thru array
    arr.forEach((i) => {
        
        if (i % 2 === 0 && checkDivisibilityByOne(i, 2, 3, 5)) {        
            i = replaceSinglesWith(2)
        } else if (i % 3 === 0 && checkDivisibilityByOne(i, 3, 5, 2)) {
            i = replaceSinglesWith(3)
        } else if (i % 5 === 0 && checkDivisibilityByOne(i, 5, 2, 3)) {
            i = replaceSinglesWith(5)
        }  else if (i % (2 * 3) === 0 && checkDivisibilityByTwo(i, 2, 3, 5)) {
            i = replaceDoublesWith(2, 3)
        } else if (i % (3 * 5) === 0 && checkDivisibilityByTwo(i, 3, 5, 2)) {
            i = replaceDoublesWith(3, 5)
        } else if (i % (2 * 5) === 0 && checkDivisibilityByTwo(i, 5, 2, 3)) {
            i = replaceDoublesWith(2, 5)
        } else if (i % (2 * 3 * 5) === 0) {
            i = replaceTripleWith(2, 3, 5)
        } 
        tempOutput.push(i)
    })

    output = [...tempOutput]
    console.log(output)
    return output

}

// Replace numbers 1 - 100
replaceNumber(100)

// Replace numbers 1 - 30
replaceNumber(30) 
