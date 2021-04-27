import React from 'react';
import { NavLink} from 'react-router-dom';
import './LeftNavBar.css';

function ProfileNav() {
    return (
        <div className='left-nav-container'>
            <ul className='left-nav-menu'>
              <li className='nav-item'>
                <NavLink to="/profile/data" className='left-nav-links'>Dane</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/subjects" className='left-nav-links'>Przedmioty</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/teachers" className='left-nav-links'>Nauczyciele</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/children" className='left-nav-links'>Dzieci</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/profile/parent" className='left-nav-links'>Rodzic</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default ProfileNav;