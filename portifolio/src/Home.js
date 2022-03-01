import React from 'react'
import './Home.css';
import logo from "./img/logo.png"

const Home = () => {
  return (
    <div className='home'>
        <div className='home__bg'>
            <div className='header d__flex align__items__center pxy__30'>
                <div className='logo'>
                    <img src={logo} alt="" />
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
            </div>
            {/* INICIO */}
            <div className="container">
                <div className="home__content">
                    <div className="home__meta">
                        <h1 className="home__text pz__10">
                            BEM VINDO AO MEU MUNDO
                        </h1>
                        <h2 className="home__text pz__10">
                           Ola, Meu Nome é Leandro
                        </h2>
                        <h3 className="home__text  sweet">
                            Desenvolvedor JS.
                        </h3>
                        <h4 className="home__text pz__10">
                            CEO No Brasil.
                        </h4>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home