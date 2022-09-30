var bill = document.getElementById('BillAmount');

var tip = document.getElementById('Tip');

var nop = document.getElementById('Split');

let d = document.getElementById('display1');
let e = document.getElementById('display2');
let i = document.getElementById('display3');
let k = document.getElementById('display4');


var f = document.getElementById("tipamount");
var g = document.getElementById("total");
var h = document.getElementById("totaltipamount");
var j = document.getElementById("totalamount"); 



function calculate() {
    let a = parseInt(bill.value);
    let b = parseInt(tip.value);
    let c = parseInt(nop.value);
    f.style.display = "block";
    g.style.display = "block";
    h.style.display = "block";
    j.style.display = "block";
    
    let tipx = a / c;
    tipx = (tipx * b) / 100;
    document.getElementById("outputPart").style.transition="3000ms"
    document.getElementById("outputPart").style.display = "inline";

   
   
   
        d.innerText = parseInt(tipx);
        e.innerText = parseInt(tipx + a/c);
        i.innerText = parseInt(tipx * c);
        k.innerText = parseInt((tipx + a/c) * c);
       
       
    console.log(bill.value);
}