let x = "";
let p = [];

function calculate(value){
    p.push(x);
    x = x + value;
    document.getElementById("result").value = x;
}

function clearf(){
    p.push(x);
    x = "";
    document.getElementById("result").value = x;
}

function equalfunc(){
    p.push(x);
    x = eval(x);
    document.getElementById("result").value = "= "+x;
    document.getElementById("previous").value = p[p.length-1];
}

function delf(){
    x = p[p.length-1];
    p.pop();
    document.getElementById("result").value = x;

    document.getElementById("previous").value = p[p.length-1];
}

function signf(){
    p.push(x);
    x *= -1;
    document.getElementById("result").value = x;
}

function percentf(){
    p.push(x);
    x = eval(x);
    x = x/100;
    document.getElementById("result").value = x;
    document.getElementById("previous").value = p[p.length-1]+'/100';
}