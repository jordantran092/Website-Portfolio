

const navBarElement = document.querySelector(".navbar");
const navBarTogglerElement = document.querySelector(".navbar-toggler-icon");

let scrolled = false;


// [ Solid background transition ]
// Window will track if user is scrolling, if so will call setNavBackground
window.addEventListener("scroll", setNavBackground);
function setNavBackground() {
    
    const navBarContentElement = document.getElementById("navbarSupportedContent");
    
    const navHeight = navBarElement.offsetHeight;
    

    
    
        
    // Adds the scrolled class to navbar, giving the solid background to navbar if scrolled past the navbar height. Else, removes the solid background
    if(window.scrollY >= navHeight) {
        if(!navBarContentElement.classList.contains("show")) {
            navBarElement.classList.add("scrolled");
            
            // Changes navbar toggler to black
            navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
        }


        scrolled = true;
        
    }
    else if(window.scrollY < navHeight) {
        if(!navBarContentElement.classList.contains("show")) {
            navBarElement.classList.remove("scrolled");

            // Changes navbar toggler back to white, only for home page, for easier visibility
            if (window.location.pathname === '/') {
                navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
            }
        }

        scrolled = false;
        

    }
    
}



function setNavBackgroundOnClick(button) {

    // Only execute if button is not disabled
    if(button.disabled == false) {

        // Lock button so that it can't get executed until time out finishes which corresponds to waiting until navbar transition finishes
        button.disabled = true;

        /*
        
        Only decide to remove or add when user has not scrolled down past original navbar height because once scrolled past the navbar height, this decision does should not be in effect. Whether scrolled or not is determined by setNavBackground()

        Scrolled class is simply just to add the solid background change of css properties for navbar

        */
        if(!scrolled) {
            
            if(window.getComputedStyle(navBarElement).backgroundColor == "rgb(255, 255, 255)") {
                navBarElement.classList.remove("scrolled");

                // Changes navbar toggler back to white, only for home page, for easier visibility
                if (window.location.pathname === '/') {
                    navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                }
            }
            else {
                navBarElement.classList.add("scrolled");

                // Changes navbar toggler to black, only for home page, for easier visibility
                if (window.location.pathname === '/') {
                    navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                }
            }
        }


        // Set timeout for 500ms to approximately correspond to when solid background color change in navbar is done. Then, once transition is done, unlock the button. Do not set to the real 200ms transition in CSS of navbar class, because it's still too fast and will bug the background color

        setTimeout(function() {
            button.disabled = false;
        }, 500);
    }


}
