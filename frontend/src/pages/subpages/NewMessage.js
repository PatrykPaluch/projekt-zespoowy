import React from 'react';
import MessageNav from '../../components/MessageNav';
import './NewMessage.css';
import Navbar from "../../components/Navbar";

function NewMessage() {
    return (
       <>
        <Navbar/>
        <MessageNav/>
            <form className="message-form">
                <input className="receiver" placeholder="Do"></input>
                <input className="message-title" placeholder="Temat"></input>
                <input className="message-input" placeholder="Wiadomość"></input>
                <button className="send" type="submit"> Wyślij wiadomość</button>
            </form>
       </>
    )
}

export default NewMessage;