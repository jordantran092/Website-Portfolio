//  * Copyright 2025, Jordan Tran
//  * All rights reserved. 
 

// Custom Elements: Create a new class that is essentially another element that inherits the default HTMLElement
class customFooter extends HTMLElement {

    // This method is inherited from HTMLElement and is called each time the class is added to the DOM/document to adopt the re-usable footer code 
    connectedCallback() {
        this.innerHTML = 
        `
        <!-- Footer container -->
        <!-- Footer is a flex item and enable grow to fill space all the way to bottom of its flex container/viewport -->
        
        <div class="container-fluid pt-5 bg-dark text-center text-white flex-grow-1">
            <div class="row">
                <div class="col">
                    
                    <h1 class="mt-5">Get In Touch</h1>
                    
                    <p class="mt-4 px-1">If you have any questions or concerns, feel free to contact me</p>
                    
                    <button type="button" class="btn btn-outline-light mt-5" onclick="location.href='contact.html';">CONTACT</button>

                    <!-- Medium or greater will have size 6, else smaller screens will have mt-copyright -->
                    <div class="mt-md-6 mt-copyright" id="iconContainer">
                        
                        <a href="mailto:jordantran092@gmail.com" class="mx-2">
                            <i class="bi bi-envelope icon"></i>
                        </a>
                        
                        <a href="https://github.com/jordantran092" target="_blank" class="mx-2">
                            <i class="bi bi-github icon"></i>
                        </a>

                        <a href="https://linkedin.com/in/jordan-tran-5444b62a3" target="_blank" class="mx-2">
                            <i class="bi bi-linkedin icon"></i>
                        </a>
                        
                        
                    </div>
                    
                    <p class="mt-4">© 2025 Jordan Tran</p>
                    
                </div>
            </div>
        </div>
        `
    }
}


class customNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <!-- 
            Fixed-top to allow navbar to be on top of background image because it has position: absolute so that other elements can stay in the normal flow , and fixed to the top of screen even when scroll down 
        -->

        <nav class="navbar navbar-expand-xl fw-bold fs-6 fixed-top">
            <!-- Container fluid for navbar to take full width -->
            <div class="container-fluid">

            
                <!-- Logo -->
                <a class="navbar-brand"></a>
                
                
                <!-- 
                    nav bar toggler appears when window is at a smaller width e.g. mobile device, for expand/collapse navbar items

                    will toggle items in the div with #navbarSupportedContent 

                -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick="setNavBackgroundOnClick(this)">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- 
                        mx-auto centers the navbar
                    -->
                    <ul class="navbar-nav mx-auto my-4">
                        <!-- Giving it class nav-item gives this item the properties to become a navbar item
                        
                        ms-xl-4 so that nav items have proper spacing in between on >= xl, but then none on < xl so that nav items can be centered properly on mobile nav bar -->

                
                        <li class="nav-item ms-xl-4">
                            <!-- give px-4 so that border isn't too close to content -->
                            <a class="nav-link text-black text-center px-4 mx-auto" href="index.html" id="index">HOME</a>
                        </li>
                        <li class="nav-item ms-xl-4">
                            <!-- give px 4 on xl so that border isn't too close to content

                            mx-auto to center the item
                            
                            HOWEVER, px-0 on smaller screens so that 'my work' doesn't wrap to a new line -->
                            <a class="nav-link text-black text-center px-0 px-xl-4 mx-auto" href="my_work.html" id="myWork">MY WORK</a>
                        </li>
                        <li class="nav-item ms-xl-4">
                            <a class="nav-link text-black text-center px-4 mx-auto" href="about.html" id="about">ABOUT</a>
                        </li>
                        <li class="nav-item ms-xl-4">
                            <a class="nav-link text-black text-center px-4 mx-auto" href="contact.html" id="contact">CONTACT</a>
                        </li>
                        <li class="nav-item ms-xl-4">
                            <a class="nav-link text-black text-center mx-auto" href="My Resume.pdf" target="_blank">RESUME</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        `
    }
}

// Connects the classes to the custom HTML tag
customElements.define("custom-footer", customFooter);
customElements.define("custom-navbar", customNavBar);
