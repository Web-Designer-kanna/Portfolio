const toggleMode=document.querySelector(".mode");
const menuToggle=document.querySelector("header nav .fa-bars");
const ul=document.querySelector("header nav ul");
const closeBtn=document.querySelector("header nav ul .fa-close");
const Body=document.querySelector("body");

toggleMode.addEventListener("click",()=>{
    Body.classList.toggle("active");
});
menuToggle.addEventListener("click",()=>{
    ul.classList.toggle("active");
});
closeBtn.addEventListener("click",()=>{
    ul.classList.toggle("active");
});