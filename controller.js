const navBarElement = document.querySelector(".navbar");

// Window will track if user is scrolling, if so will call setNavBackground
window.addEventListener(scroll, setNavBackground);

/*

If scrollY has reached the height of navbar, then make navbar solid, else transparent. Then apply smooth animation in css 0.5s. 
Might have to find method to get length of navbar height because it changes with screen size

*/

function setNavBackground() {
    if(scrollY )
}