const czytaj = document.querySelector('.czytaj');
const ratusz = document.querySelector('.ratusz')

czytaj.addEventListener('click',(e)=>{
        ratusz.classList.toggle('show-more');
        if(czytaj.innerText === 'Czytaj mniej'){
            czytaj.innerText = 'Czytaj więcej';
        }else{
            czytaj.innerText = 'Czytaj mniej';
        }
    })

    const czytaj1 = document.querySelector('.czytaj1');
    const zamek = document.querySelector('.zamek')
    
    czytaj1.addEventListener('click',(e)=>{
            zamek.classList.toggle('show-more1');
            if(czytaj1.innerText === 'Czytaj mniej'){
                czytaj1.innerText = 'Czytaj więcej';
            }else{
                czytaj1.innerText = 'Czytaj mniej';
            }
        })
    
        const czytaj2 = document.querySelector('.czytaj2');
        const fara = document.querySelector('.fara')
        
        czytaj2.addEventListener('click',(e)=>{
               fara.classList.toggle('show-more2');
                if(czytaj2.innerText === 'Czytaj mniej'){
                    czytaj2.innerText = 'Czytaj więcej';
                }else{
                    czytaj2.innerText = 'Czytaj mniej';
                }
            })

            const czytaj3 = document.querySelector('.czytaj3');
        const palac = document.querySelector('.palac')
        
        czytaj3.addEventListener('click',(e)=>{
               palac.classList.toggle('show-more3');
                if(czytaj3.innerText === 'Czytaj mniej'){
                    czytaj3.innerText = 'Czytaj więcej';
                }else{
                    czytaj3.innerText = 'Czytaj mniej';
                }
            })

            const czytaj4 = document.querySelector('.czytaj4');
            const fort = document.querySelector('.fort')
            
            czytaj4.addEventListener('click',(e)=>{
                   fort.classList.toggle('show-more4');
                    if(czytaj4.innerText === 'Czytaj mniej'){
                        czytaj4.innerText = 'Czytaj więcej';
                    }else{
                        czytaj4.innerText = 'Czytaj mniej';
                    }
                })
      
         