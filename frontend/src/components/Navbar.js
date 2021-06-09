import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Navbar.css';
import {ImCross, ImMenu} from 'react-icons/im';
import logo from '../image/LogoGreen.png';

import { Api } from "../apiHandler/apiHandler"

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [user,setUser] = useState({
        id: '',
        role: '',
        name: '',
        surname: '',
        pesel:  '',
        address: '',
        dateOfBirth: '',
        phoneNumber: '',
        photo: '',
        class: ''
    });

    const logout = () => {
        console.log('wyloguj');
        localStorage.removeItem('user');
        Api.logout().then(r => {
            if (r.status === 200) {
                window.location.href = '/login';
            }
        })
    }
    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id,
                    role: response.data.role.id,
                    name:response.data.name,
                    surname:response.data.surname,
                    pesel:  response.data.pesel,
                    address: response.data.address,
                    dateOfBirth: response.data.birthDate,
                    phoneNumber: response.data.phone
                })
            }
        })
        
    }

    useEffect(() =>{
        getUser();
    },[])

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
                            {
                            user?.role===2 ?
                            <Link to="/gradesteacher" onClick={closeMobileMenu} className='nav-links'>Dziennik</Link>
                            :
                            <Link to="/gradesstudent" onClick={closeMobileMenu} className='nav-links'>Dziennik</Link>
                            }
                            
                        </li>
                        <li className='nav-item'>
                            <Link to="/profile" onClick={closeMobileMenu} className='nav-links'>Profil</Link>
                        </li>
                        <li className='nav-item'>
                            <button className='nav-links' onClick={logout} >Wyloguj się</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Navbar;
