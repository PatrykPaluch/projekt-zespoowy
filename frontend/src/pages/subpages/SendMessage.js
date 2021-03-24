import React from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';

function SendMessage() {
    return (
       <div className="rec">
        <MessageNav/>
        <div className='receiver-messages'>
            <h1>Wysłane</h1>
            <ul className="rec-messages-list">
              <li>
                <h4>message@gmail.pl</h4>
                    <p>temat</p>
              </li>
              <li>
                <h4>message@gmail.pl</h4>
                    <p>temat</p>
              </li>
            </ul>
        </div>
        <div className='receiver-message'>
            <h2>Temat</h2>
            <h4>Do:message@gmail.pl</h4>
            <p>tresc</p>
        </div>
       </div>
    )
}

export default SendMessage;