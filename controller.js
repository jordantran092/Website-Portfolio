
let expanded = false;
let scrolled = false;

// [ Solid background transition ]
// Window will track if user is scrolling, if so will call setNavBackground
window.addEventListener("scroll", setNavBackground);
function setNavBackground() {
    // Must define HTML elements in scope of this function or else will be initialized as undefined even though it may have been initialized outside of scope
    const navBarElement = document.querySelector(".navbar");
    const navBarTogglerElement = document.querySelector(".navbar-toggler-icon");
    const navBarContentElement = document.getElementById("navbarSupportedContent");
    
    let navHeight = navBarElement.offsetHeight;
    

    
    if(!navBarContentElement.classList.contains("show")) {
        
        // Adds the scrolled class to navbar, giving the solid background to navbar if scrolled past the navbar height. Else, removes the solid background
        if(window.scrollY >= navHeight) {
            navBarElement.classList.add("scrolled");
            
            // Changes navbar toggler to black
            navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;

            scrolled = !scrolled;

            
        }
        else if(window.scrollY < navHeight) {
            navBarElement.classList.remove("scrolled");

            // Changes navbar toggler back to white, only for home page, for easier visibility
            if (window.location.pathname === '/index.html') {
                navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
            }

            scrolled = !scrolled;

        }
    }
}




function setNavBackgroundOnClick() {
    const navBarElement = document.querySelector(".navbar");

    // if(!scrolled && expanded == false) {
    //     navBarElement.classList.add("scrolled");
    //     expanded = !expanded;
    // }
    // else if(!scrolled && expanded) {
    //     navBarElement.classList.remove("scrolled");
    //     expanded = !expanded;
    // }


}

