import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import logo from "../img/logo.png";

const Home = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Verifica o tamanho da tela assim que o componente é montado
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className='home' id='Ínicio'>
            <div className='home__bg'>
                <div className={`header d__flex align__items__center pxy__30 ${showMobileMenu && isMobile ? 'active' : ''}`}>
                    <div className='logo'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='navigation pxy__30'>
                        <ul className='navbar d__flex'>
                            <a href='#Ínicio'><li className='nav__items mx__15'>Ínicio</li></a>
                            <a href='#Sobre'><li className='nav__items mx__15'>Sobre</li></a>
                            <a href='#Serviços'><li className='nav__items mx__15'>Serviços</li></a>
                            <a href='#Portifólio'><li className='nav__items mx__15'>Portifólio</li></a>
                            <a href='#Blog'><li className='nav__items mx__15'>Blog</li></a>
                            <a href='#Contato'><li className='nav__items mx__15'>Contato</li></a>
                        </ul>
                    </div>
                   
                    {isMobile && (
                        <div className="toggle__menu" onClick={toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-justify-right white pointer ${showMobileMenu ? 'active' : ''}`}>
                                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                    )}

                    {showMobileMenu && isMobile && (
                        <div className="sideNavbar">
                            <ul className="sidebar d__flex">
                                <li className="sideNavbar">
                                    <a href="#Ínicio">Ínicio</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Sobre">Sobre</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Serviços">Serviços</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Portifólio">Portifólio</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Blog">Blog</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className="home__text pz__10">
                                BEM VINDO AO MEU MUNDO
                            </h1>
                            <h2 className="home__text pz__10">
                               Olá, Meu Nome é Leandro
                            </h2>
                            <h3 className="home__text  sweet">
                                Desenvolvedor Fullstack.
                            </h3>
                            <h4 className="home__text pz__10">
                                CEO No Brasil.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
