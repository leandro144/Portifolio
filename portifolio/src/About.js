import React from 'react';
import './About.css';
import AboutImg from "./img/about.jpg";

const About = () => {
  return (
    <div className='about component__space'>
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
    </div>
  )
}

export default About