function delay(cb) {
    setTimeout(function() { console.log(cb()) }, 2000);
}

function getRandom() {
    return Math.random();
}

delay(getRandom);