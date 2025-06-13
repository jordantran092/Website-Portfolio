const navBarElement = document.querySelector(".navbar");
const navBarTogglerElement = document.querySelector(".navbar-toggler-icon");




// Set border around nav item correspondingly, each time a page is loaded
let navItemElem;
if(window.location.pathname === '/index.html' || window.location.pathname === "/") {
    navItemElem = document.getElementById("index");
}
else if(window.location.pathname === '/my_work.html') {
    navItemElem = document.getElementById("myWork");
}
else if(window.location.pathname === '/about.html') {
    navItemElem = document.getElementById("about");
}
else if(window.location.pathname === '/contact.html') {
    navItemElem = document.getElementById("contact");
}
navItemElem.classList.add("border", "border-dark");












// [ Solid background transition ]
// Window will track if user is scrolling, if so will call setNavBackground
let scrolled = false;
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
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
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
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    navBarTogglerElement.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                }
            }
            else {
                navBarElement.classList.add("scrolled");

                // Changes navbar toggler to black, only for home page, for easier visibility
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
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





































// Get all forms the need validation to utilize custom Bootstrap validation styles
var forms = document.querySelectorAll('.needs-validation');

// Array.prototype.slice.call is used because forms is a non-array object, returning the elements in a new array. Then for each is called onto this array and applies the corresponding function with variable 'form' taking on each element
Array.prototype.slice.call(forms)
.forEach(function (form) {
    
    // Tracks each form for submission and then calls corresponding function
    form.addEventListener('submit', function (event) {
        // Checks if input in form was valid, if not then 
        if (!form.checkValidity()) {
            // Prevent any default action to handle the event and prevents any calling of the same submit event for other connected elements
            event.preventDefault();
            event.stopPropagation();
        }

        // Let form be validated
        form.classList.add('was-validated');
    }, false);
});