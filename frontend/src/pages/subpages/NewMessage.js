import React, {useState} from 'react';
import MessageNav from '../../components/MessageNav';
import './NewMessage.css';
import Navbar from "../../components/Navbar";
import axios from "axios";
import {useForm} from "react-hook-form";

function NewMessage() {
    const {register, handleSubmit} = useForm();

    const [user, setUser] = useState({
        currentUserId: 1
    });

    // useEffect(() => {
    //     axios.get('http://localhost:8000/currentUser').then(response => {
    //             setUser({
    //                  currentUserId:response.data[0].id
    //          });
    //          console.log(user);
    //         });
    // }, []);

    let tmp = ['Sylwia Rusek', 'Marcin Poręba', 'Agnieszka Rejczak'];
    // useEffect(() => {
    //     let tmpReceivers = [];
    //     axios.get('url to get receivers')
    //         .then(response => {
    //             response.forEach(s => {
    //                 tmpReceivers.push(s);
    //             })
    //         })
    //     setReceivers(tmpReceivers);
    // })

    const onSubmit = formData => {
        console.log(formData);
        axios.post(`http://localhost:8000/sendMessage`, {
            currentUserId: user.currentUserId,
            receiverUserNameSurname: onSubmit.receiverUserNameSurname,
            topic: onSubmit.topic,
            contents: onSubmit.contents
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
       <>
        <Navbar/>
        <MessageNav/>
            <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
                <select 
                    className="receiver" 
                    {...register("receiverUserNameSurname")}>
                        {/*todo instead of tmp receivers*/}
                    {tmp.map((receiverUserNameSurname, key) => {
                        return <option value={receiverUserNameSurname} key={key}>{receiverUserNameSurname}</option>
                    })}
                </select>
                <input 
                    className="message-title" 
                    placeholder="Temat"
                    {...register("topic")}
                />
                <input 
                    className="message-input" 
                    placeholder="Wiadomość"
                    name="contents"
                    type="text"
                    {...register("contents")}
                />
                <button className="send" type="submit"> Wyślij wiadomość</button>
            </form>
       </>
    )
}

export default NewMessage;