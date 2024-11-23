const menu = document.querySelector(".hamburger");
const ul =document.querySelector("#list");

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "INPUT") return;
    ul.classList.toggle("none");
});

