function showSideBar(){
    const sideBar = document.querySelector(".Nav-side")
    sideBar.style.display = "block"
}

function closeSideBar(){
    const closeSideBar = document.querySelector(".Nav-side")
    closeSideBar.style.display = "none"
}


function chengeTheme(){
    const theme = document.querySelector("body")
    theme.classList.toggle("light")
}


let buttom = document.querySelector(".ri-sun-fill");
let body = document.querySelector("body");

buttom.addEventListener("click", ()=>{
    body.classList.toggle("light");
})