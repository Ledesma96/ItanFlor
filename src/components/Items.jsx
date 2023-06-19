import React from 'react'

const Items = () => {
  return (
    <main className='items'>
        <div className='items__div items__1'>
            <div className='items__div__div'>
                <p className='items__div__number'>01</p>
            </div>
            <section className='items__div__section'>
                <h4 className="items__div__section__h4" >CLASES ONLINE SINCRÓNICAS</h4>
                <p className="items__div__section__p" >¡No te movés de tu casa! Son clases sincrónicas, con seguimiento personalizado de tu avance a través del Italiano, sin quedarte atrás. </p>
            </section>
        </div>
        <div className='items__div items__2'>
            <div className='items__div__div'>
                <p className='items__div__number'>02</p>
            </div>
            <section  className='items__div__section'>
                <h4 className="items__div__section__h4" >CLASES PERSONALIZADAS</h4>
                <p className="items__div__section__p" >¿Ya te vas a Italia?¡Anotate en estas clases personalizadas! Vamos a tocar los temas <br></br> neurálgicos para que puedas defenderte en Italia, a nivel comprensión y producción!</p>
            </section>
        </div>
        <div className='items__div items__3'>
            <div className='items__div__div'>
                <p className='items__div__number'>03</p>
            </div>
            <section className='items__div__section'>
                <h4 className="items__div__section__h4" >CLASES DINÁMICAS</h4>
                <p className="items__div__section__p" >En todas nuestras clases vamos a contar con material didáctico como: videos, audios y música!<br></br> Vamos a proyectar desde la “clase 1”, la adquisición de comprensión auditiva y producción oral!
                </p>
            </section> 
        </div>
        <div className='items__div items__4'>
            <div className='items__div__div'>
                <p className='items__div__number'>04</p>
            </div>
            <section className='items__div__section'>
                <h4 className="items__div__section__h4" >GRATIS CON LOS CURSOS</h4>
                <p className="items__div__section__p" >Curso de pronunciación en Italiano, asistencia en redacción de mails a comunas y <br></br> de currículums vitae en Italiano y también apoyo en la lectura de mails en Italiano.
                </p>
            </section>
        </div>
    </main>
  )
}

export default Items