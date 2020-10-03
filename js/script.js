function numButton(e){
    console.log(e.target.innerText, 'raw')
    var elem = document.getElementById('equation')
    elem.innerText+=e.target.innerText
}