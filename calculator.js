function Calculator(){
  console.log("Calculating");
  let num1 = Number(prompt("Enter num1:"));
  let num2 = Number(prompt("Enter num2:"));
  sum(num1,num2);

}

function sum(a,b){
  let total = a + b;
document.getElementById("sumRes").innerHTML=`<p> ${a} + ${b} = ${total} </p>`;

  }