const display = document.getElementById("input");
function call(arg) {
    display.value += arg;
}
function callplus() {
    display.value += "+";
}
function callmin() {
    display.value += "-";
}
function calldiv() {
    display.value += "/";
}
function callmul() {
    display.value += "*";
}
function calldot() {
    display.value += ".";
}
function callclr() {
    display.value = "";
}
function callans() {
    let temp = display.value
    display.value = eval(temp)

}