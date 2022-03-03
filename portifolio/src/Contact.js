import React from 'react'
import './Contact.css';
import ContactImg from './img/about-9.jpg'

const Contact = () => {
  return (
    <div className="contact component__space" id='Contato'>
        <div className="row">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Contrate-me</h1>
                <p className="hire__text white">Estou disponível para trabalho freelancer. Conecte-se comigo pelo telefone:</p>
                <p className="hire__text white"><strong>(11) 951685-5569</strong> Ou Email <strong>leandro_castro980@hotmail.com</strong> </p>
              </div>
              <div className="input__box">
                <input type="text" className="contact name" placeholder='Seu Nome ' />
                <input type="text" className="contact email" placeholder='Seu Email ' />
                <input type="text" className="contact subject" placeholder='Escreva um assunto ' />
                <textarea name="message" id="message" placeholder='Escreva uma menssagem'></textarea>
                <button className='btn contact pointer' type='submit'>Enviar</button>
              </div>
            </div>
          </div>
          <div className="col__2">
              <img src={ContactImg} alt="" className="contact__img" />
          </div>
        </div>
    </div>
  )
}

export default Contact