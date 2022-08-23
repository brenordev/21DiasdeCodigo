const previousOperationText = document.querySelector("#previous-operations");
const currentOperationsText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("buttons-container button");

class Calculator{
  constructor()
}

buttons.forEach((btn)=>{
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    if(+value >= 0 || value === "."){
      console.log(value);
    } else{
      console.log("Op: " + value);
    }
  });
});