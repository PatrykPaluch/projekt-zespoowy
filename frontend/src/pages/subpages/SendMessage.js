import React, {useState, useEffect} from 'react';
import MessageNav from '../../components/MessageNav';
import './ReceiverMessage.css';
import Navbar from "../../components/Navbar";
import {Api} from "../../apiHandler/apiHandler";

function SendMessage() {
    const [message, setMessage] = useState({
        sentMessages : []
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
                const found = response.data.list.find(element => element.sender.id === id);
                if(found){
                    setHasMessage(true);
                }
                setMessage({sentMessages: response.data.list});
            }
        });
    }

  const [click, setClick] = useState({
    recipinetName : '',
    recipinetSurname : '',
    topic: '',
    contents: '',
  });

    useEffect(() => {
        getUser();
        getMessages(user.id);
  }, [user.id]);

  const setMessageClicked = (n, m, t, c) =>{
    setClick({
      recipinetName: n,
      recipinetSurname: m,
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
              {
                  hasMessage===true ?
                      <ul className="rec-messages-list">
                          {
                              message.sentMessages.map(sentMessage =>{
                                  if(sentMessage.sender.id===user.id){
                                      return<li key={sentMessage.id} onClick={()=>setMessageClicked(sentMessage.receiver.name, sentMessage.receiver.surname, sentMessage.title, sentMessage.contents)}>
                                          <h4>{sentMessage.receiver.name} {sentMessage.receiver.surname}</h4>
                                          <p>{sentMessage.title}</p>
                                      </li>
                                  }})
                          }
                      </ul>
                      :
                      <h4>Brak wysłanych wiadomości</h4>
              }
          </div>
          <div className='receiver-message'>
              <h2>{click.topic}</h2>
              <h4>Do: {click.recipinetName} {click.recipinetSurname}</h4>
              <p>{click.contents}</p>
          </div>
        </div>
      </>
    )
}

export default SendMessage;