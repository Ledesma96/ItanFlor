import React from 'react'


const Info = () => {
  return (
    <div className='info' id='info'>
        <main className='part2'>
            <div className='caard caard1'>
                <div className='card__circularletters'>
                    <img className='card__circularletters__image' src="/individuales.jpg" alt="mujer sentada escribiendo con una laptop sobre la mesa"></img>
                </div>
                <section className='caard__section'>
                    <h3 className='caard__section__h3 h3'>Clases individuales</h3>
                    <p className='caard__section__p'>Clases dos veces por semana, de 1 o 2 horas. ¡Para vos o para tu grupo (amigos, hermanos, compañeros, pareja, etc.)!
                    </p>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                    <a className='caard__section__a' href="https://api.whatsapp.com/send?phone=5491138540082&text=Hola%20Flor!%20¿cómo%20estás?%20Estoy%20interesada/o%20en%20clases%20indivuduales..." target='blank'>Comenzar</a>
                </section>
            </div>
            <div className='caard card2'>
                <div className='card__circularletters'>
                    <img className='card__circularletters__image' src="/networking-equipo.jpg" alt="grupo de tres cuatro amigos, dos de ellos sentados y dos parados, frente una laptop tomando una videoconferencia y sonriendo"></img>
                </div>
                <section className='caard__section'>
                    <h3 className='caard__section__h3 h3'>Clases grupales</h3>
                    <p className='caard__section__p'>Clases de grupos reducidos, una vez por semana, donde le sacamos el máximo provecho a la exposición y producción. </p>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                    <a className='caard__section__a' href="https://api.whatsapp.com/send?phone=5491138540082&text=Hola%20Flor!%20¿cómo%20estás?%20Estoy%20interesada/o%20en%20clases%20grupales..." target='blank'>Comenzar</a>
                </section>
            </div>
            <div className='caard card3'>
                <div className='card__circularletters'>
                    <img className='card__circularletters__image' src="/hombre-sonriente-guapo-joven-traje-casual-sentado-mesa-trabajando-computadora-portatil.jpg" alt="Hombre con lentes sentado alzando las manos y sonriendo en una videoconferencia con una laptop"></img>
                </div>
                <section className='caard__section'>
                    <h3 className='caard__section__h3 h3'>Clases de conversación</h3>
                    <p className='caard__section__p'>Clases para practicar la oralidad en italiano. Nuestras clases de conversación online te van a servir para dominar la fluidez oral que necesitás.</p>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                    <a className='caard__section__a' href="https://api.whatsapp.com/send?phone=5491138540082&text=Hola%20Flor!%20¿Cómo%20estás?%20Estoy%20interesada/o%20en%20clases%20de%20conversación..." target='blank'>Comenzar</a>
                </section>
            </div>
        </main>
    </div>
  )
}

export default Info