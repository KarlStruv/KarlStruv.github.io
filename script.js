var clicks = 0;
function add() {
    clicks += 1;
    document.getElementById("output").innerHTML = clicks;
}

function takeAway() {
    clicks -= 1;
    document.getElementById("output").innerHTML = clicks;
}