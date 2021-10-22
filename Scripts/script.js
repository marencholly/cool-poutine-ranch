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
        toggleButton.innerText = "=";
    }else{
        //turn the menu on
        for(let counter = 0; counter<=(navItems.length-1); counter++){
            navItems[counter].classList.add("visible");
        }
        toggleButton.innerText = "X";
    }
}

toggleButton.addEventListener("click", toggleMenu);