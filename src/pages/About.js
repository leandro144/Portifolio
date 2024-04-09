import React from 'react';
import '../styles/About.css';
import AboutImg from "../img/about-1.jpg";

const About = () => {

    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    });

  return (
    <div className='about component__space' id='Sobre'>
        <div className="container">
            <div className="row">
                 <div className="col__2">
                <img src={AboutImg} alt="" className="about_img" />
            </div>
            <div className="col__2">
                <h1 className="about__heading">
                    Sobre Mim
                </h1>
                <div className="about__meta">
                    <p className="about__text p__color">
                        Como graduado em Análise e Desenvolvimento de Sistemas (ADS), adquiri uma base sólida em conceitos fundamentais de programação e desenvolvimento de software. Ao longo do meu curso, explorei diversas áreas da tecnologia da informação, desde a análise de requisitos até a implementação de soluções complexas. Durante esse período, desenvolvi habilidades essenciais que me permitiram enfrentar desafios e encontrar soluções inovadoras para problemas.
                    </p>
                    <p className="about__text p__color">
                        Complementando minha formação acadêmica, cursei um técnico em Desenvolvimento Fullstack JavaScript, onde pude aprofundar meu conhecimento em tecnologias web modernas. Ao longo do curso, explorei amplamente as capacidades do JavaScript, tanto no frontend quanto no backend, utilizando frameworks como React e Next.js.
                    </p>
                    <p className="about__text p__color">
                        Ao longo dos últimos dois anos, tive a oportunidade de trabalhar como desenvolvedor, onde apliquei meus conhecimentos em projetos do mundo real.
                    </p>
                    <div className="about__button d__flex aligm__items__center">
                        <a href="#"><button className='about btn pointer'>Download CV</button></a>
                        <a href="#"><button className='about btn pointer'>Contrate-Me</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="up__to__top__btn">
            <a href="#" className='bottom__to__top'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
            </a>
        </div>
    </div>
  )
}

export default About;