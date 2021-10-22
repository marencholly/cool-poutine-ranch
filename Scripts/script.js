console.log("Page Load Successful");

const toggleButton = document.querySelector(".mobile-menu-toggle");
// instead of grabbing the navItems, we can just grab the nav-bar itself (the ul)
const navbar = document.querySelector(".nav-bar");

function toggleMenu(){
    if(navbar.classList.contains("visible")){
        // we no longer need the for loop because we're adding the visible class to only the one ul
        navbar.classList.remove("visible");
        toggleButton.innerHTML = `<i class="fas fa-bars"></i>`;
    }else{
        navbar.classList.add("visible");
        toggleButton.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }
}

toggleButton.addEventListener("click", toggleMenu);