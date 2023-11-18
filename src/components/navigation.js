import React from "react";

function Navigation(){
    return(
        <>
        <nav class="navbar navbar-expand-md justify-content-center">
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
            <img src="images/logo.png" alt="logo" height="112px" />
    </nav>
    <nav class="navbar navbar-expand-md justify-content-center">
        <div class="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">
            <ul class="navbar-nav">    
                <li class="nav-item px-2"><a class="nav-link" href="index.html">HOME</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="#">ABOUT US</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="pricelist.html">PRICE LIST</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="#">GALLERY</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="contact.html">CONTACT</a></li>
            </ul>
        </div>
    </nav>
    </>
    );
}

export default Navigation;
    