console.log("Page Load Successful");

const toggleButton = document.querySelector(".mobile-menu-toggle");
const navItems = document.querySelectorAll(".nav-item");

function toggleMenu(){
    // if menu is invisible, turn it back on using visible class
    // if menu is already visible, turn it off by removing visible class
    if(navItems[0].classList.contains("visible")){
        // turn the menu off
        for(let counter = 0; counter<=(navItems.length-1); counter++){
            navItems[counter].classList.remove("visible");
        }
        toggleButton.innerHTML = `<i class="fas fa-bars"></i>`;
    }else{
        //turn the menu on
        for(let counter = 0; counter<=(navItems.length-1); counter++){
            navItems[counter].classList.add("visible");
        }
        toggleButton.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }
}

toggleButton.addEventListener("click", toggleMenu);