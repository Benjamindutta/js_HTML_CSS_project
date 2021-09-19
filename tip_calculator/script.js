const button=document.querySelector("button");
const output=document.querySelector(".output");
const cost=document.querySelector("input");
button.addEventListener("click",function(){
    let tip=(cost.value*0.15).toFixed(2);
    let out=`<h1>You should tip $${tip} on bill of $${cost.value}</h1>`;
    output.innerHTML=out;
});
