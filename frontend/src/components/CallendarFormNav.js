import React from 'react'
import { NavLink} from 'react-router-dom';
import './LeftNavBar.css';
const CallendarFormNav = () => {
    return (
<div className='left-nav-container'>
            <ul className='left-nav-menu'>
              <li className='left-nav-item'>
                <NavLink to="/messages/newmessage" className='left-nav-links'>Klasy 1</NavLink>
                {/* <ul>
                  <li>
                  <NavLink to="/messages/newmessage" className='left-nav-links'>Klasa 1a</NavLink>
                  </li>
                </ul> */}
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/receivermessage" className='left-nav-links'>Klasy 2</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/callendarform" className='left-nav-links'>Klasy 3</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/callendarform" className='left-nav-links'>Klasy 4</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/callendarform" className='left-nav-links'>Klasy 5</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/callendarform" className='left-nav-links'>Klasy 6</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/callendarform" className='left-nav-links'>Klasy 7</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/callendarform" className='left-nav-links'>Klasy 8</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default CallendarFormNav
