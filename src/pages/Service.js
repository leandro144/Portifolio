import React from 'react'
import '../styles/Service.css';

const Service = () => {
  return (
    <div className='service component__space' id='Serviços'>
        <div className="heading">
            <h1 className="heading">Meus Incríveis Serviços</h1>
            <p className="heading p__color">Existem muitas variações de passagens de lorem ipsum disponíveis</p>
            <p className="heading p__color">mas a maioria sofreu alteração</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">Desenvolvimento de sites</h1>
                            <p className="p service__text p__color">
                            Sites atraem, informam, conectam.
                            </p>
                            <p className="p service__text p__color">
                            Design, conteúdo, usabilidade: chave.
                            </p>
                            <p className="p service__text p__color">
                            Experiência única, marca forte.
                            </p>
                        </div>
                    </div>
                </div>
             
                <div className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">Desenvolvimento de sitemas</h1>
                            <p className="p service__text p__color">
                            Sistemas complexos, soluções inovadoras.
                            </p>
                            <p className="p service__text p__color">
                            Lógica, código, eficiência: essencial.
                            </p>
                            <p className="p service__text p__color">
                            Problemas, soluções, transformação digital.
                            </p>
                        </div>
                    </div>
                </div>
    
                <div className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">Desenvolvimento Web</h1>
                            <p className="p service__text p__color">
                            Web evolui constantemente, desafiando desenvolvedores
                            </p>
                            <p className="p service__text p__color">
                            Criatividade e código convergem.
                            </p>
                            <p className="p service__text p__color">
                            Interface, experiência, funcionalidade: harmonia
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Service