import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import {ImCross, ImMenu} from 'react-icons/im';
import logo from '../image/LogoGreen.png'; 
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to="/" onClick={closeMobileMenu} ><img className="Logo" src={logo} alt={"this is logo"}/></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <ImCross/> : <ImMenu/>}
                    </div>
                    <ul
                        className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" onClick={closeMobileMenu} className='nav-links'>Strona główna</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Callendar" onClick={closeMobileMenu} className='nav-links'>Terminarz</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Messages" onClick={closeMobileMenu} className='nav-links'>Wiadomości</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/classregisterstudent" onClick={closeMobileMenu} className='nav-links'>Dziennik</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/profile" onClick={closeMobileMenu} className='nav-links'>Profil</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Navbar;
