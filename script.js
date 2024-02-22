const inputs = document.querySelectorAll("input");

inputs.forEach((input,idx1) => {
    inputs.addEventListener("keyup",(e) => {
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;
        
        if(currentInput.value.length > 1){
            currentInput.value="";
            return;
        }
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !==""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        if(e.key === "Backspace"){
            inputs.forEach((input,idx2) => {
                if(idx1 <= idx2 && prevInput){
                    input.setAttribute("disabled",true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            });
        }
    });        
});
window.addEventListener('load',()=> inputs[0].focus());