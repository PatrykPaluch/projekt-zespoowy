import React, {useState, useEffect} from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';
import Navbar from "../../components/Navbar";
import axios from "axios";

function Trash() {
    const [message, setMessage] = useState({
        thrashedMessages : []
      });
    
      useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
          setMessage({ thrashedMessages: response.data});
        })            
      }, []);

    return (
        <>
            <Navbar/>
            <div className="rec">
                    <MessageNav/>
                    <div className='trash'>
                        <h1>Kosz</h1>
                        <ul className="rec-messages-list">
                        {
                            message.thrashedMessages!=null ? 
                            message.thrashedMessages.map(thrashedMessage =>
                                <li>
                                <h4>{thrashedMessage.senderUserNameSurname}</h4>
                                <p>{thrashedMessage.topic}</p>
                                <h6>{thrashedMessage.contents}</h6>
                                </li>
                                )
                            :
                            <li>
                                <h4>Brak wysłanych wiadomości</h4>
                            </li>
                        }
                        </ul>
                    </div>
            </div>
       </>
    )
}

export default Trash;