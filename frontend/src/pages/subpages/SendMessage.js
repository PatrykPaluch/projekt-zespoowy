import React, {useState, useEffect} from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';
import Navbar from "../../components/Navbar";
import axios from "axios";

function SendMessage() {
  const [message, setMessage] = useState({
    sentMessages : []
  });

  const [click, setClick] = useState({
    recipinetUserNameSurname : '',
    topic: '',
    contents: '',
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setMessage({ sentMessages: response.data});
    })            
  }, []);

  const setMessageClicked = (u, t, c) =>{
    setClick({
      recipinetUserNameSurname: u,
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
              <h1>Wysłane</h1>
              <ul className="rec-messages-list">
                {
                  message.sentMessages!=null ? 
                  message.sentMessages.map(sentMessage =>
                    <li onClick={()=>setMessageClicked(sentMessage.recipinetUserNameSurname, sentMessage.topic, sentMessage.contents)}>
                      <h4>{sentMessage.recipinetUserNameSurname}</h4>
                      <p>{sentMessage.topic}</p>
                    </li>
                    )
                  :
                  <li>
                    <h4>Brak wysłanych wiadomości</h4>
                  </li>
                }
              </ul>
          </div>
          <div className='receiver-message'>
              <h2>{click.topic}</h2>
              <h4>Do:{click.recipinetUserNameSurname}</h4>
              <p>{click.contents}</p>
          </div>
        </div>
      </>
    )
}

export default SendMessage;