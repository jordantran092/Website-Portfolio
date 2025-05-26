



// Window will track if user is scrolling, if so will call setNavBackground
window.addEventListener("scroll", setNavBackground);


function setNavBackground() {
    // Must define navBarElement in scope of this function or else will be initialized as undefined even though it may have been initialized outside of scope
    const navBarElement = document.querySelector(".navbar");
    
    let navHeight = navBarElement.offsetHeight;
    
    // Adds the scrolled class to navbar, giving the solid background to navbar if scrolled past the navbar height. Else, removes the solid background
    if(window.scrollY >= navHeight) {
        navBarElement.classList.add("scrolled");
    }
    else if(window.scrollY < navHeight) {
        navBarElement.classList.remove("scrolled");
    }
}