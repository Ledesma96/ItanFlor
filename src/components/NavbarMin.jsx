import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input
  } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon} from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const NavbarMin = () => {
  return (
    <div className='navMin'>
        <Menu >
            <MenuButton className="menu"
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <Link className='logomin' to={`/`}>
                <img className='logomin__img' src="/1668815273770[1750].png" alt=""/>
                <p className='logomin__p'>ItanFLor</p>
                </Link>
            <MenuList>
                <Link to={`/`}>
                    <MenuItem  color='black'>
                    Inicio
                    </MenuItem>
                </Link>
                <Link to={`/aboutus`}>
                    <MenuItem  color='black'>
                    Nosotros
                    </MenuItem>
                </Link>
                <Link to={`/contact`}>
                    <MenuItem  color='black'>
                    Contacto
                    </MenuItem>
                </Link> 
            </MenuList>
        </Menu>
    </div>
  )
}

export default NavbarMin