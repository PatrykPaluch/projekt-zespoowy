import React from 'react';
import { NavLink} from 'react-router-dom';
import './LeftNavBar.css';

function ProfileNav() {
    return (
        <div className='nav-container'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink to="/profile/data" className='nav-links'>Dane</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/subjects" className='nav-links'>Przedmioty</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/teachers" className='nav-links'>Nauczyciele</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/children" className='nav-links'>Dzieci</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/parent" className='nav-links'>Rodzic</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default ProfileNav;