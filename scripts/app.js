let movieposter = document.querySelector('.poster-picture');

let modal = document.querySelector('#mymodal');

let closeBtn = document.querySelector('.closeBtn');

let modalimage = document.querySelector('.movie.poster-modal');

movieposter .addEventListener('click', ()=> {
    modal.style.display = 'block' ;
    modalimage.src = movieposter.src
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none'
    }
});