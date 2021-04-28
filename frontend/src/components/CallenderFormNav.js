import React from 'react';
import { NavLink} from 'react-router-dom';
import './LeftNavBar.css';

const CallenderFormNav = () => {
    return (
<div className='nav-container'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink to="/messages/newmessage" className='nav-links'>Nowa Wiadomość</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/receivermessage" className='nav-links'>Skrzynka odbiorcza</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/sendmessage" className='nav-links'>Wiadomości wysłane</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/trash" className='nav-links'>Kosz</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default CallenderFormNav
