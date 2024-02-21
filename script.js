const cde = document.querySelectorAll('.code');
    cde[0].focus();
    
    cde.forEach((code,idx) => {
        code.addEventListener("keydown",(e) => {
            
            if( e.key >=0 && e.key <=9){
                
                cde[idx + 1].focus();
                setTimeout(()=>cde[idx + 1].focus(),10);

            }else if(e.key === "Backspace"){
                
                cde[idx - 1].focus();
                setTimeout(()=>cde[idx - 1].focus(),10);
            }
        });        
    });