import React from 'react'
import Info from './Info'
import Items from './Items'
import Carrousel from './Carrousel'
import { useState, useEffect } from 'react';
import Whatsapp from './Whatsapp';
import ReactPixel from "react-facebook-pixel"


const Home = () => {
  ReactPixel.pageView();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Limpia el evento del listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <>
    {windowWidth <= 500 ? <main className='home'>
      <img className='home__img' src="/wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.png" alt="" />
    </main> : <main className='home'>
      <img className='home__img' src='/bannerZ.png'  alt="" />
    </main>}
    <h2 className='title'>¡Estudiá en ItanFlor!</h2>
    <h4 className='subtitle'>Descubre el encanto del italiano, de la mano de clases particulares excepcionales</h4>
    <h4 className='subtitle'>Domina el idioma con lecciones a medida</h4>
    <h4 className='subtitle'>A tu ritmo y sin complicaciones</h4>
    <Info></Info>
    <Items></Items>
    <Carrousel></Carrousel>
    <Whatsapp></Whatsapp>
    </>
  )
}

export default Home