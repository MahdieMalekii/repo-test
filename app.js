let input=document.getElementById("inputBox")
let buttonCalc=document.querySelectorAll("button")
// console.log(buttonCalc)
// console.log(input);
let string=""
buttonCalc.forEach(element => {
  element.addEventListener("click", (e)=>{
    if(e.target.innerText == "AC"){
      string=""
      input.value=string
    }
  else if(e.target.innerText == "DL")
    {
      string= string.substring(0, string.length -1)
      input.value=string
    }
    else if(e.target.innerText == "=")
    {
      string= String(eval(string))
      input.value=string
    }
    else if(e.target.innerText == "%")
    {
      string= String(eval(string/100))
      input.value=string
    }
    else{
      string +=e.target.innerText
     input.value=string
    console.log(string)
    }
  
    
  })
});
