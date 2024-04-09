import React from 'react';
import '../styles/Footer.css';
import footerImg from '../img/logo.png'

const Footer = () => {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{"padding":"0.625rem 1.25rem","zIndex": "100"}}>
        <img src={footerImg} alt="" className="footer__img pointer" />
        <span className="copyrigth" style={{"color": "#c6c9d8","fontSize": "0.875rem","opacity":"0.75"}}>Todos os direitos reservados. @ 2021 Leandro Castro</span>
    </div>
  )
}

export default Footer;