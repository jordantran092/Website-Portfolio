// Create a new class that is essentially another element that inherits the default HTMLElement
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
                    <!-- Medium screens or larger have size 5, screens smaller than md will default to mt-6 class -->
                    <h1 class="mt-6 mt-md-5">Get In Touch</h1>
                    
                    <p class="mt-4">If you have any questions or concerns, feel free to contact me</p>
                    
                    <button type="button" class="btn btn-outline-light mt-5" onclick="func()">CONTACT</button>


                    <!-- Medium or greater will have size 5, else smaller screens will have mt-copyright -->
                    <p class="mt-copyright mt-md-5">© 2025 Jordan Tran</p>
                    
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
            Fixed-top to allow navbar to be on top of background image and fixed to the top of screen even when scroll down, so that other elements can stay in the normal flow 
        -->

        <nav class="navbar navbar-expand-xl fw-bold fs-6 fixed-top">
            <!-- Container fluid for navbar to take full width -->
            <div class="container-fluid">

            
                <a class="navbar-brand" href="#">
            
                </a>
                
                <!-- 
                    nav bar toggler when window is at a smaller width e.g. mobile device, to expand/collapse navbar items

                    will toggle elements in div with id navbarSupportedContent 

                    
                    
                -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick="setNavBackgroundOnClick(this)">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- 
                        mx-auto centers the navbar
                        margin adds 
                    -->
                    <ul class="navbar-nav mx-auto my-4">
                        <!-- Giving it class nav-item gives this item the properties to become a navbar item -->

                
                        <li class="nav-item ms-4">
                            <!-- if border is too tight to content, px-4 
                                
                            border border-dark is TEMP


                            -->
                            <a class="nav-link active text-black text-center px-4 border border-dark" aria-current="page" href="index.html">HOME</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="my_work.html">MY WORK</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="about.html">ABOUT</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="contact.html">CONTACT</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="#">RESUME</a>
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
