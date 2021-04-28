import React from 'react';
import { NavLink} from 'react-router-dom';
import './LeftNavBar.css';

function MessageNav() {
    return (
        <div className='left-nav-container'>
            <ul className='left-nav-menu'>
              <li className='nav-item'>
                <NavLink to="/messages/newmessage" className='left-nav-links'>Nowa Wiadomość</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/receivermessage" className='left-nav-links'>Skrzynka odbiorcza</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/sendmessage" className='left-nav-links'>Wiadomości wysłane</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/trash" className='left-nav-links'>Kosz</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default MessageNav;