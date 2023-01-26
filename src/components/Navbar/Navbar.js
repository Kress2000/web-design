import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../components/Assets/imgs/logo.svg";
import Humbaga from "../../components/Assets/imgs/Humbaga.svg";

export default function NavbarComp(){
    const [isLinkActive, setIsLinkActive]= useState(null);
    const [noChange, setNoChange]= useState(0);
    const toggleActive=(id)=>{
        setIsLinkActive(id);
        setNoChange(null);
    }
    const NavLinks=["Home", "Menu", "Services", "Map", "About"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3 p-0 bg-none">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" id="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img src={Logo} /></a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto me-auto mt-2 mt-lg-0">
                {NavLinks.map((link, index)=>(
                    <li key={index} className={isLinkActive===index?"nav-item active":"nav-item mx-0 mx-lg-1"} onClick={()=>toggleActive(index)}>
                        <a className={index===noChange?"nav-link active":"nav-link"} href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
        <img className="d-none ms-auto d-lg-flex" src={Humbaga}/>
    </nav>
  );
}