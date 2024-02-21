
const inputs = document.querySelectorAll('input');
    window.addEventListener('load',()=> inputs[0].focus());
    
    inputs.forEach((code,idx) => {
        code.addEventListener("keydown",(e) => {
            
            if( e.key >=0 && e.key <=9){
                
                inputs[idx + 1].focus();
                setTimeout(()=>inputs[idx + 1].focus(),10);

            }else if(e.key === "Backspace"){
                
                inputs[idx - 1].focus();
                setTimeout(()=>inputs[idx - 1].focus(),10);
            }
        });        
    });