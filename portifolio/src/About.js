import React from 'react';
import './About.css';
import AboutImg from "./img/about.jpg";

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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nulla ducimus excepturi. Obcaecati mollitia consectetur, praesentium veniam officia fuga aspernatur tenetur necessitatibus unde recusandae hic deserunt, reprehenderit tempore officiis voluptatem?
                    </p>
                    <p className="about__text p__color">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nulla ducimus excepturi. Obcaecati mollitia consectetur, praesentium veniam officia fuga aspernatur tenetur necessitatibus unde recusandae hic deserunt, reprehenderit tempore officiis voluptatem?
                    </p>
                    <p className="about__text p__color">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nulla ducimus excepturi. Obcaecati mollitia consectetur.
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