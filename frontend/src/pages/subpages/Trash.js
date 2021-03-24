import React from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';

function Trash() {
    return (
       <div className="rec">
            <MessageNav/>
            <div className='trash'>
                <h1>Kosz</h1>
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
       </div>
    )
}

export default Trash;