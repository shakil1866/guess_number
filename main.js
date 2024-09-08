
let todo = () =>{     
    // Get the current input value
let input = document.getElementById("inputField")
let btn = document.getElementById("btn")
let output = document.getElementById("output") 
let num = 45
   
    if (input.value == "" ) {
        output.innerText= "please fill the input";
        
    }else if (input.value == num){
        output.innerText= "Congratulations! You guessed the number!";       

    }
    else if(input.value > num){
        output.innerHTML = "Too high!";
    }
    else{
        output.innerHTML = "Too low!";

    }
}

btn.addEventListener('click', () =>{
todo()
})