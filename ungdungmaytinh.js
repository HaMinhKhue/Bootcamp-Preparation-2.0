function cong() {
a=parseFloat(document.getElementById('a').value);
b=parseFloat(document.getElementById('b').value);
document.getElementById("r").value=a+b;
}
function tru() {
    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    document.getElementById("r").value=a-b;
}
function nhan() {
    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    document.getElementById("r").value=a*b;
}
function chia() {
    a=parseFloat(document.getElementById('a').value);
    b=parseFloat(document.getElementById('b').value);
    document.getElementById("r").value=a/b;
}