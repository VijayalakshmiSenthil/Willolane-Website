import React from "react";

function Navigation(){
    return(
        <>
        <nav className="navbar navbar-expand-md justify-content-center">
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
            <img src="images/logo.png" alt="logo" height="112px" />
    </nav>
    <nav className="navbar navbar-expand-md justify-content-center">
        <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">
            <ul className="navbar-nav">    
                <li className="nav-item p-2"><a className="nav-link" href="index.html">HOME</a></li>
                <li className="nav-item p-2"><a className="nav-link" href="#">ABOUT US</a></li>
                <li className="nav-item p-2"><a className="nav-link" href="pricelist.html">PRICE LIST</a></li>
                <li className="nav-item p-2"><a className="nav-link" href="#">GALLERY</a></li>
                <li className="nav-item p-2"><a className="nav-link" href="contact.html">CONTACT</a></li>
            </ul>
        </div>
    </nav>
    </>
    );
}

export default Navigation;
    