import React from 'react'
import './Blog.css';
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

const Blog = () => {
  return (
    <div className="blog component__space">
         <div className="heading">
            <h1 className="heading">Ultimas Noticias</h1>
            <p className="heading p__color">Existem muitas variações de passagens de lorem ipsum disponíveis</p>
            <p className="heading p__color">mas a maioria sofreu alteração</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col__3">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={Blog1} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="Blog__meta absolute">
                      <h5 className="project__text">Development</h5>
                      <h4 className="project__text">Getting tickets to the big show</h4>
                      <a href="" className="blog project__btn btn">+ Noticias</a>
                  </div>
              </div>
                </div>

                <div className="col__3">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={Blog2} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="Blog__meta absolute">
                      <h5 className="project__text">Development</h5>
                      <h4 className="project__text">Getting tickets to the big show</h4>
                      <a href="" className="blog project__btn btn">+ Noticias</a>
                  </div>
              </div>
                </div>

                <div className="col__3">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={Blog3} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="Blog__meta absolute">
                      <h5 className="project__text">Development</h5>
                      <h4 className="project__text">Getting tickets to the big show</h4>
                      <a href="" className="blog project__btn btn">+ Noticias</a>
                  </div>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog