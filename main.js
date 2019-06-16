function getRandom() {
    return Math.random();
}

function output(cb) {
    let someNumber = cb();
    return console.log(someNumber);
}

output(getRandom);