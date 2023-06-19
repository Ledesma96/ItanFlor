import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarMax = () => {
  return (
    <div>
        <Navbar className='nav' variant="dark">
            <Link className='nav__div' to={`/`}>    
                <img className='logoNav' src='/logo1.png' width={32}/>
                <p className='logoNav__p'>ItanFlor</p>
            </Link>
            <div className='navbar__nav'>
                <Link className='nav__p' to={`/`}>
                    <p className='nav__p'>INICIO</p>
                </Link> 
                <Link className='nav__p' to={`/aboutus`}>
                    <p className='nav__p'>NOSOTROS</p>
                </Link>
                <Link className='nav__p' to={`/contact`}>
                    <p className='nav__p'> CONTACTO</p>
                </Link> 
            </div>
        </Navbar>
    </div>
  )
}

export default NavbarMax