// Create a new class that is essentially another element that inherits the default HTMLElement
class customFooter extends HTMLElement {

    // This method is inherited from HTMLElement and is called each the element is added to the DOM/document and 
    connectedCallback() {
        this.innerHTML = 
        `
        <div class="container-fluid pt-5 bg-dark text-center text-white flex-grow-1">
            <div class="row">
                <div class="col">
                    <!-- Medium screens or larger have size 5, screens smaller than md will default to mt-6 class -->
                    <h1 class="mt-6 mt-md-5">Get In Touch</h1>
                    
                    <p class="mt-4">If you have any questions or concerns, feel free to contact me</p>
                    
                    <button type="button" class="btn btn-outline-light mt-5">CONTACT</button>


                    <!-- Medium or greater will have size 5, else will have mt-copyright -->
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
        <nav class="navbar navbar-expand-lg fw-bold fs-6 fixed-top">
            <!-- Container fluid for navbar to take full width -->
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- <img src="/media/mylogo.png" width="30" height="30" alt=""> -->
                </a>
                
                <!-- 
                    nav bar toggler when window is at a smaller width e.g. mobile device, to expand/collapse navbar items

                    will toggle elements in div with id navbarSupportedContent 

                    
                    
                -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                            <a class="nav-link active text-black text-center px-4 border border-dark" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="my_work.html">MY WORK</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-black text-center" href="#">CONTACT</a>
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

customElements.define("custom-footer", customFooter);
customElements.define("custom-navbar", customNavBar);
