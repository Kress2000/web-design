import React, { useState } from "react";
import styles from './Navbar.module.scss';

export default function NavbarComp(){
    const [isLinkActive, setIsLinkActive]= useState(null);
    const [idHome, setIdHome] = useState(true);
    const toggleActive=(id)=>{
        setIsLinkActive(id);
        setIdHome(false)
    }
    const NavLinks=["Home", "Menu", "Services", "Map", "About"];
  return (
    <nav className={`navbar navbar-expand-md m-0 navbar-light ${styles.navbarHeader}`}>
        <a className="navbar-brand mr-auto" href><img src="./imgs/logo.svg" alt="logo"/></a>
         <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="./imgs/Humbaga.svg" alt="Humbaga img" id="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse p-0 h-100" id="navbarSupportedContent">
            <ul className={`navbar-nav position-relative h-100 p-0 ms-md-auto me-auto`}>
                {
                    NavLinks.map((link, index)=>(
                        <li
                            key={index}
                            className={isLinkActive===index?`nav-item h-100 m-0 mx-md-2 my-1 my-md-0 ${styles.navitem} ${styles.active}`: `nav-item ${styles.navitem}  h-100 m-0 mx-md-2 my-1 my-md-0 ${idHome && index===0? styles.active: "nav-item"}`}
                            onClick={()=>toggleActive(index)}
                        >
                            <a className={`nav-link ${styles.navlink}`} href>{link}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <img className="d-none ms-auto d-md-flex" src="./imgs/Humbaga.svg" alt="Humbaga img"/>
    </nav>
  );
}

