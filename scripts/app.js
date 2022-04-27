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

const slides = document.getElementsByClassName('carousel__item');
const slidesTotal = slides.length;
const nextButton = document.querySelector('#carousel__button--next');
const prevButton = document.querySelector('#carousel__button--prev');

let slidePosition = 0;

nextButton.addEventListener('click', () => {

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === slidesTotal -1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

slides[slidePosition].classList.add('carousel__item--visible');
});

prevButton.addEventListener('click', () => {
    
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }
   if(slidePosition === 0) {
       slidePosition = slidesTotal - 1;
   } else {
       slidePosition--;
   }
slides[slidePosition].classList.add('carousel__item--visible');
});

