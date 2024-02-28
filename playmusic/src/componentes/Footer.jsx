import React from 'react';


const Footer = () => {
  return (
    <footer>
        
    <div className="footer-container">
        <div className="footer-content-container">
            <h3 className="website-logo">SoundWave</h3>
            <span className="footer-info">5573480764</span>
            <span className="footer-info">SoundWave@Gmail.com</span>
        </div>
        <div className="footer-menus">
            <div className="footer-content-container">
                <span className="menu-title">menu</span>
                <a2 href="" className="menu-item-footer">Contacto</a2>
                <a2 href="" className="menu-item-footer">Nosotros</a2>
            </div>
          
        </div>
        
        <div className="footer-content-container">
            <span className="menu-title">Redes Sociales</span>
            <div className="social-container">
                <a2 href="" className="social-link"></a2>
                <a2 href="" className="social-link"></a2>
                <a2 href="" className="social-link"></a2>
            </div>
        </div>
    </div>
    <div className="copyright-container">
        <span className="copyright">Copyright 2024, SoundWave. Derechos Reservados.</span>
    </div>
</footer>

  );
}



export default Footer;