const sum = (n1, n2) => {
    return n1 + n2

}

const minus = (n1, n2) => {
    return n1 - n2
}

const multiply = (n1, n2) => {
    return n1 * n2
}

const divide = (n1, n2) => {
    if (n2 === 0) {
        console.log("error:can't divide by zero")
    }
    return n1 / n2
}


module.exports = { sum, minus, multiply, divide };
