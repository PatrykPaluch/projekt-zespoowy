import React from 'react';
import { NavLink} from 'react-router-dom';
import './MessageNav.css';

function ProfileNav() {
    return (
        <div className='nav-message'>
            <ul className='nav-menu-message'>
              <li className='nav-item'>
                <NavLink to="/profile/data" className='nav-message-links'>Dane</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/subjects" className='nav-message-links'>Przedmioty</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/teachers" className='nav-message-links'>Nauczyciele</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/children" className='nav-message-links'>Dzieci</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/parent" className='nav-message-links'>Rodzic</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default ProfileNav;