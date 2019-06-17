function getRandom() {
    return Math.random();
}

function output(cb) {
    let someNumber = cb();
    return setTimeout(function() { console.log(someNumber) }, 2000);
}

output(getRandom);