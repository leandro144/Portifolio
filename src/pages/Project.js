import React from 'react'
import '../styles/Project.css';
import Project1 from '../img/cfep.jpeg'
import Project2 from '../img/db.jpeg'
import Project3 from '../img/dbpr.jpeg'

const Project = () => {
  return (
    <div className='project component__space' id='Portifólio'>
         <div className="heading">
            <h1 className="heading">Meus Ultimos Projetos</h1>
            <p className="heading p__color">Existem muitas variações de passagens de lorem ipsum disponíveis</p>
            <p className="heading p__color">mas a maioria sofreu alteração</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col__3">
              <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={Project1} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="project__meta absolute">
                      <h5 className="project__text">Development</h5>
                      <h4 className="project__text">Site CFEP</h4>
                      <a href="https://www.cfep.org.br/" className="project__btn">Ver Detalhes</a>
                  </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={Project2} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="project__meta absolute">
                      <h5 className="project__text">Development</h5>
                      <h4 className="project__text">Site Colégio DomBosco</h4>
                      <a href="https://colegiodomboscovilamatilde.com/" className="project__btn">Ver Detalhes</a>
                  </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={Project3} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="project__meta absolute">
                      <h5 className="project__text">Development</h5>
                      <h4 className="project__text">Faculdade DomBosco - Paraná</h4>
                      <a href="https://sistema-faculdade-dom-bosco.vercel.app/" className="project__btn">Ver Detalhes</a>
                  </div>
              </div>
            </div>

            <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <button className="view__more pointer btn">Ver Mais</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project