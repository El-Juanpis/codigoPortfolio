import { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";
import cerrar from '../../assets/ComplementImages/cerrar.png';
import menu from '../../assets/ComplementImages/menu.png';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/HojaVida/HojaVidaJuanPablo.pdf'; 
    link.download = 'Hoja_Vida_JuanPabloRojas.pdf'; 
    link.click();
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-1">
            <span>&#123; J &#125;</span>
            </div>
            <div className="logo-2">
             <span>JUAN DEV</span>
            </div>
          </div>
          <ul>  
            <li>
              <a className="menu-item" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="menu-item" href="#experience">
                Experiencia
              </a>
            </li>
            <li>
              <a className="menu-item" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contac">
                Contacto
              </a>
            </li>
            {/* Agrega el botón para descargar el CV */}
            <li>
              <button className="contact-btn" onClick={handleDownload}>
                Download CV
              </button>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <img
              src={openMenu ? `${cerrar}` : `${menu}`}
              alt={openMenu ? "Close Menu" : "Open Menu"}
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      </nav>
    </>
  );
};
