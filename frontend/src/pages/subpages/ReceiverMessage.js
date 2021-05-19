import React, {useState, useEffect} from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';
import Navbar from "../../components/Navbar";
import axios from "axios";

function ReceiverMessage() {
  const [message, setMessage] = useState({
    receivedMessages : []
  });

  const [click, setClick] = useState({
    id: '',
    senderUserNameSurname : '',
    topic: '',
    contents: '',
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setMessage({ receivedMessages: response.data});
    })            
  }, []);

  const setMessageClicked = (u, t, c) =>{
    setClick({
      senderUserNameSurname: u,
      topic: t,
      contents: c
    });
    console.log(click);
  }

    return (
      <>
        <Navbar/>
        <div className="rec">
          <MessageNav/>
          <div className='receiver-messages'>
              <h1>Odebrane</h1>
              <ul className="rec-messages-list">
              {
                  message.receivedMessages!=null ? 
                  message.receivedMessages.map(receivedMessage =>
                    <li >
                      <h4 onClick={()=>setMessageClicked(receivedMessage.username, receivedMessage.topic, receivedMessage.contents)}>{receivedMessage.username}</h4>
                      <p>{receivedMessage.topic}</p>
                    </li>
                    )
                  :
                  <li>
                    <h4>Brak odebranych wiadomości</h4>
                  </li>
                }
              </ul>
          </div>
          <div className='receiver-message'>
              <h2>{click.topic}</h2>
              <h4>0d:{click.senderUserNameSurname}</h4>
              <p>{click.contents}</p>
          </div>
        </div>
       </>
    )
}

export default ReceiverMessage;