import React, { useState } from "react";
import "./Navbar.scss";

export default function NavbarComp(){
    const [isLinkActive, setIsLinkActive]= useState(null);
    const [noChange, setNoChange]= useState(0);
    const [idHome, setIdHome] = useState(true);
    const toggleActive=(id)=>{
        setIsLinkActive(id);
        setNoChange(null);
        setIdHome(false)
    }
    const NavLinks=["Home", "Menu", "Services", "Map", "About"];
  return (
    <nav className="navbar navbar-expand-md navbar-light mb-3 p-0 m-0 bg-none" id="navbar">
        <a className="navbar-brand" href="#"><img src="./imgs/logo.svg" /></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" id="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse m-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-md-auto me-auto mt-2 mt-md-0">
                {NavLinks.map((link, index)=>(
                    <li key={index} className={isLinkActive===index?"nav-item active":"nav-item mx-0 mx-lg-1"} onClick={()=>toggleActive(index)} id={idHome && index===0?"homeActive": ""}>
                        <a className={index===noChange?"nav-link active":"nav-link"} href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
        <img className="d-none ms-auto d-lg-flex" src="./imgs/Humbaga.svg"/>
    </nav>
  );
}