import NavbarMin from './NavbarMin';
import NavbarMax from './NavbarMax';
import { useEffect, useState } from 'react';

const NavBar = () => {
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
    <div>
      {windowWidth < 768 ? <NavbarMin></NavbarMin> : <NavbarMax></NavbarMax>}
    </div>
  )
}

export default NavBar