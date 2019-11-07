(()=> {

    const openForm = e => {
        const buttonRecall = document.getElementById('recall');
        const circle = document.querySelectorAll('.circle');
        const recallForm = document.querySelector('.recall');
        
        if(e.target === buttonRecall) (
            recallForm.classList.toggle('d-block')
        )        

        circle.forEach(el => {
            el.addEventListener('click', () => {       
                    recallForm.classList.remove('d-block')
            })
        })
    }

    document.addEventListener('click', openForm );

    // const buttonRecall = document.getElementById('recall');
    // const recallForm = document.querySelector('.recall');
    // const circle = document.querySelectorAll('.circle');
    // const buttonMoreDetails = document.querySelectorAll('.article__button')
    // const moreDetails = document.querySelector('.more-details');
    
    // const toggleForm = () => {
        
    //     recallForm.classList.toggle('d-block');
    // }
    
    // const closeForm = () => {       
    //     recallForm.classList.remove('d-block');
    // }



    // circle.forEach( el =>
    //     el.addEventListener('click', closeForm))
    
    //     buttonRecall.addEventListener('click', toggleForm);

    // const openFormMoreDetails = () => { 
    //     moreDetails.classList.toggle('d-block');
    // }

    // buttonMoreDetails.forEach( el => {
    //     el.getAttribute('name');
    //     el.addEventListener('click', openFormMoreDetails)
    // });

    



})();