import "./MobileNav.css";
import PropTypes from "prop-types";
const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/HojaVida/HojaVidaJuanPablo.pdf'; 
    link.download = 'Hoja_Vida_JuanPabloRojas.pdf'; 
    link.click();
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
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
            <button className="contact-btn" onClick={handleDownload}>Dowland cv</button>
          </ul>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};
export default MobileNav;
