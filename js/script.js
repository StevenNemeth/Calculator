var operator;
var tempNum;

function numButton(e){
    var elem = document.getElementById('equation')
    elem.innerText+=e.target.innerText
}
function operate(e){
    operator = e.target.innerText
    var elem = document.getElementById('equation')
    tempNum = elem.innerText
    elem.innerText = ""
}
function equal(e){
    if(operator) {
        var elem = document.getElementById('equation')
        var result = eval(tempNum + operator + elem.innerText)
        elem.innerText = result
        operator = null
    }
}
