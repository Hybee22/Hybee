const startNum = 1

const replaceValues = ['yu', 'gi', 'ho'];

let output = []

let db1 = false, db2 = false;

const checkDivisibilityByOne = (num, a, b, c) => {
    if (num % a == 0 && !(( num % b === 0 || num % c === 0 ))) {
        db1 = true
    }  else {
        db1 = false
    }
    return db1
}

const checkDivisibilityByTwo = (num, a, b, c) => {
    if (num % (a * b) === 0 && !((num % (b * c) === 0 || num % (a * c) === 0))) {
        db2 = true
    } else {
        db2 = false
    }
    return db2
}

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


const replaceNumber = num => { 
    let arr = [];
    let tempOutput = []
    for (let i = startNum; i <= num; i++) {
        arr.push(i)
    }
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


replaceNumber(100)

replaceNumber(30) 
