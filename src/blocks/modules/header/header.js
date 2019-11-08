(()=> {

    const openForm = e => {
        const buttonRecall = document.getElementById('recall');
        const circleRecall = document.querySelector('.recall .circle');
        const recallForm = document.querySelector('.recall');
        const buttonsMoreDetails = document.querySelectorAll('.article__button');
        const formMoreDetails = document.querySelector('.more-details');
        const circlesMoreDetails = document.querySelector('.more-details .circle');
        const suitable = document.querySelector('.suitable');
        const inputHidden = document.getElementById('inputHidden');
        
        if(e.target === buttonRecall) {
            recallForm.classList.toggle('d-block');
            circleRecall.addEventListener('click', () => {       
                        recallForm.classList.remove('d-block');
            })            
        }  
        
        buttonsMoreDetails.forEach( el => {
            if (e.target === el) {
                const suitableCoord = suitable.getBoundingClientRect();
                const coord = el.getBoundingClientRect();
                const number = coord.top - suitableCoord.top + 60;
                formMoreDetails.style.top = `${number}px`;
                formMoreDetails.classList.toggle('d-block');
                const name = el.getAttribute('name');
                inputHidden.setAttribute('name', name );
                
                circlesMoreDetails.addEventListener('click', () => {
                    formMoreDetails.classList.remove('d-block');
                })
            }
        })
        


    }

    document.addEventListener('click', openForm );

    

})();