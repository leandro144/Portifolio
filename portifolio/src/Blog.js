import React from 'react'
import './Blog.css';
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

const Blog = () => {
  return (
    <div className="blog component__space" id='Blog'>
         <div className="heading">
            <h1 className="heading">Ultimas Noticias</h1>
            <p className="heading p__color">Noticias do mundo todo, aqui voce fica informado.</p>
            <p className="heading p__color">do que esta acontecendo no mundo!</p>
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
                      <h5 className="project__text">Noticias</h5>
                      <h4 className="project__text">Sobre o Racismo</h4>
                      <a href="https://www.afpesp.org.br/noticias/opiniao/10-maneiras-de-se-combater-o-racismo" className="blog project__btn btn">+ Noticias</a>
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
                      <h5 className="project__text">Noticias</h5>
                      <h4 className="project__text">Tudo sobre a Moda</h4>
                      <a href="https://veja.abril.com.br/noticias-sobre/moda/" className="blog project__btn btn">+ Noticias</a>
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
                      <h5 className="project__text">Noticias</h5>
                      <h4 className="project__text">Noticias sobre o mundo LGBTQIA+</h4>
                      <a href="https://www.stoodi.com.br/blog/atualidades/movimento-lgbt-o-que-e/?utm_source=google&utm_medium=cpc&utm_term=&utm_content=&utm_campaign=perfomance-max-cronograma-lead&gclid=CjwKCAjwxOCRBhA8EiwA0X8hi-CX2tVOeIQ-0W-OVlYe8BhJaN9gtSIB8MRclC141lgzK_WbcPwBkBoCBXUQAvD_BwE" className="blog project__btn btn">+ Noticias</a>
                  </div>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;