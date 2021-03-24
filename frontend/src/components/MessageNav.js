import React from 'react';
import { NavLink} from 'react-router-dom';
import './MessageNav.css';

function MessageNav() {
    return (
        <div className='nav-message'>
            <ul className='nav-menu-message'>
              <li className='nav-item'>
                <NavLink to="/messages/newmessage" className='nav-message-links'>Nowa Wiadomość</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/receivermessage" className='nav-message-links'>Skrzynka odbiorcza</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/sendmessage" className='nav-message-links'>Wiadomości wysłane</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/messages/trash" className='nav-message-links'>Kosz</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default MessageNav;