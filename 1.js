function display() {
   let p = parseFloat(document.querySelector("#la").value);
   let r = parseFloat(document.querySelector("#ir").value);
   let t = parseFloat(document.querySelector("#month").value);
    
   let a=p*(1+(r/100))**(t/12);
   let emi=a/t;
   document.querySelector("#emi").value= emi.toFixed(2);
}

document.querySelector("h1").style.textAlign= "center";