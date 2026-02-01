hamburger = document.getElementById("hamburger");
navbar = document.getElementById("navbar")

hamburger.addEventListener("click", ()=> {
    if(navbar.classList.contains("hidden")){
        navbar.classList.remove("hidden")
    }else{
        navbar.classList.add("hidden")
    }
})