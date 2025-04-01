function fillcut (str, len) {
    if (str.length === len) {
        return str
    } else if (str.length > len) {
        return str.slice(0, len)
    }
    return str.padStart(len, ".")
}

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“