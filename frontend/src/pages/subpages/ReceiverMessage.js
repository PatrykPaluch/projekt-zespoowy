import React, {useState, useEffect} from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';
import Navbar from "../../components/Navbar";
import {Api} from "../../apiHandler/apiHandler";

function ReceiverMessage() {
  const [message, setMessage] = useState({
    receivedMessages: []
  });

    const [hasMessage, setHasMessage] = useState(false);

    const [user,setUser] = useState({
        id: ''
    });

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id,
                })
            }
        })
    }

    function getMessages(id) {
        Api.messages().then(response => {
            if (response.status === 200) {
                const found = response.data.list.find(element => element.receiver.id === id);
                if(found){
                    setHasMessage(true);
                }
                setMessage({receivedMessages: response.data.list});
            }
        });
    }

  const [click, setClick] = useState({
      senderName : '',
      senderSurname : '',
      topic: '',
      contents: '',
  });

    useEffect(() => {
        getUser();
        getMessages(user.id);
    }, [user.id]);

  const setMessageClicked = (n, m, t, c) =>{
    setClick({
      senderName: n,
      senderSurname: m,
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
              {
                  hasMessage===true ?
                      <ul className="rec-messages-list">
                          {
                              message.receivedMessages.map(receivedMessage =>{
                                  if(receivedMessage.receiver.id===user.id){
                                      return <li key={receivedMessage.id} onClick={()=>setMessageClicked(receivedMessage.sender.name,receivedMessage.sender.surname, receivedMessage.title, receivedMessage.contents)}>
                                          <h4>{receivedMessage.sender.name} {receivedMessage.sender.surname}</h4>
                                          <p>{receivedMessage.title}</p>
                                      </li>
                                  }})
                          }
                      </ul>
                      :
                      <h4>Brak odebranych wiadomości</h4>
              }
          </div>
          <div className='receiver-message'>
              <h2>{click.topic}</h2>
              <h4>0d: {click.senderName} {click.senderSurname}</h4>
              <p>{click.contents}</p>
          </div>
        </div>
       </>
    )
}

export default ReceiverMessage;