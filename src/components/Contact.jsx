import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useRef, useState } from 'react'

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const date = new Date();

  const dataBase = getFirestore();
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const sendMessage = () => {
    const mensaje = {
      nombre: name,
      apellido: lastname,
      telefono: telephone,
      email: email,
      mensaje: message,
      fecha: date
    }
    const messagerCollection = collection(dataBase, "mensajes")
      if (name == "" || telephone == "" || message == "" || email == "" ){
        console.log("campos vacios");
      } else {
        addDoc(messagerCollection, mensaje).then(({id}) => {
          setMessage(id);
        })
        setTimeout(() => {
          form.current.reset();
        }, 1000)
        
      }
  }
  return (
    <div className='contact'>
      <main className="contact__main">
        <h3 className='contact__main__h3'>PONGÁMONOS EN CONTACTO</h3>
          <form ref={form} onSubmit={handleSubmit} id="form" className="contact__main__form" action="">
            <div className='divInputs'>
              <div className="contact__main__form__boxes">
                <label className='contact__main__form__boxes__label' for="nombre">Nombre</label>
                <input onChange={(e) => setName(e.target.value)} name="name" className="transparencia input" type="text" placeholder="Nombre" required/>
              </div>
              <div className="contact__main__form__boxes">
                <label className='contact__main__form__boxes__label' for="nombre">Apellido</label>
                <input onChange={(e) => setLastname(e.target.value)} name="name" className="transparencia input" type="text" placeholder="Apellido" required/>
              </div>
            </div>
            <div className='divInputs'>
              <div className="contact__main__form__boxes">
                <label className='contact__main__form__boxes__label' for="apellido">Teléfono</label>
                <input onChange={(e) => setTelephone(e.target.value)} name="telefono" className="transparencia input" type="text" placeholder="+54911..." required/>
              </div>
              <div className="contact__main__form__boxes">
                <label className='contact__main__form__boxes__label' for="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name="email" className="transparencia input" type="email" placeholder="Ingresá tu Email" required/>
              </div>
            </div>
            <div className="contact__main__form__boxes div_message">
                <label className='contact__main__form__boxes__label' for="mensaje">Mensaje</label>
                <textarea onChange={(e) => setMessage(e.target.value)} className="transparencia message" name="message" id="" cols="30" rows="10" placeholder="Ingresá tu mensaje..."></textarea>
            </div>
            <div className="contact__main__form__boxes">
                <input onClick={sendMessage} className="contact__main__form__boxes__send handleSubmit" type="submit" value="Enviar"/>
            </div>
          </form>
        </main>
        <section className="contact__section">
          <div className='contact__section__div'>
            <h1 className='contact__section__div__h1'>Información de contacto</h1>
            <p className='contact__section__div__p'>Te dejamos nuestros datos para que te pongas en contacto con nosotros.¿Qué estás esperando?</p>
          </div>
          <span className='span'></span>
          <div className="contact__section__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <div className="contact__section__item__info">
              <h3 className='contact__section__item__info__h3'>Localización</h3>
              <p className='contact__section__item__info__p'> Buenos Aires - Argentina</p>
            </div>
          </div>
          <div className="contact__section__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
            </svg>
            <div className="contact__section__item__info">
              <h3 className='contact__section__item__info__h3'>Correo electrónico</h3>
              <p className='contact__section__item__info__p'>itanflorclases@gmail.com</p>
            </div>
          </div>
          <div className="contact__section__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            <div className="contact__section__item__info">
              <h3 className='contact__section__item__info__h3'>WhatsApp</h3>
              <p className='contact__section__item__info__p'>+5491138540082</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact