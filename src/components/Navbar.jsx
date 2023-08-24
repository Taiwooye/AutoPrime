import  {useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
const [click, setClick] =useState(false);
const handleClick =()=> setClick(!click);
const closeMobileMenu=()=>setClick(false);

  return (

    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faCar} className='nav-icon' /> <big className='nav1'> AUTO<bold className="nav-head">PRIME</bold></big>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link 
                    to='/' className='nav-links' 
                    onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                     to='/about-us' className='nav-links'
                      onClick={closeMobileMenu}>
                        About-us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    to='/cars' className='nav-links'
                     onClick={closeMobileMenu}>
                        Cars
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    to='/services' className='nav-links'
                     onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    to='/contacts' className='nav-links'
                     onClick={closeMobileMenu}>
                        Contacts
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
    </>
  );
}

export default Navbar;
