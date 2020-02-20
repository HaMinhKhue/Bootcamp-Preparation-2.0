function convert() {
    a=document.getElementById('amount').value;
    b=document.getElementById('country1').value;
    c=document.getElementById('country2').value;
    d=a/b*c;
    document.getElementById("result").value=d;
}
