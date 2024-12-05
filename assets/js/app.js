const menu = document.querySelector(".hamburger");
const ul =document.querySelector("#list");

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "INPUT") return;
    ul.classList.toggle("none");
});



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    // Aquí se permite que el elemento se active un poco antes, a los 150px del top
    return rect.top <= window.innerHeight - 150 && rect.bottom >= 0;
}


const scroleadosDerecha = document.querySelectorAll('.scrollDerecha');
const scroleadosIzquierda = document.querySelectorAll('.scrollIzquierda');
const scroleadosArriba = document.querySelectorAll('.scrollArriba');
const scroleadosAbajo = document.querySelectorAll('.scrollAbajo');



function checkVisibility() {
    scroleadosDerecha.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visibleDerecha'); 
        }
    });
    scroleadosIzquierda.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visibleIzquierda'); 
        }
    });
    scroleadosArriba.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visibleArriba'); 
        }
    });
    scroleadosAbajo.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visibleAbajo'); 
        }
    });
}

window.addEventListener('scroll', checkVisibility);

window.addEventListener('load', checkVisibility);


