var operator;
var tempNum;
var elem = document.getElementById('equation')
var expression = document.getElementById('expression')

function numButton(e){
    elem.innerText += e.target.innerText
}
function operate(e){
        if(elem.innerText === "" && !tempNum){
        return
    }
    if(operator){
        if(elem.innerText == ""){
        operator = e.target.innerText
        clearText(expression, tempNum + " " + operator)
        return
        }
        var result = eval(tempNum + operator + elem.innerText)
        tempNum = result
        operator = e.target.innerText
        clearText(elem)
        clearText(expression, tempNum + " " + operator)
        return
    }
    operator = e.target.innerText
    tempNum = elem.innerText
    clearText(expression, tempNum + " " + operator)
    clearText(elem)
}
function equal(e){
    if(operator && (tempNum || tempNum === 0) && elem.innerText) {
        var result = eval(tempNum + operator + elem.innerText)
        elem.innerText = result
        clearText(expression)
        operator = null
    }
}
function clearButton(e){  
    clearText(elem)
    clearText(expression)
    operator = null
}
function clearText(r, text){
    if (!text){
        r.innerText = ""
        return
    } 
    r.innerText = text
}