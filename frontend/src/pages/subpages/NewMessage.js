import React, {useEffect, useState} from 'react';
import MessageNav from '../../components/MessageNav';
import './NewMessage.css';
import Navbar from "../../components/Navbar";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Api} from "../../apiHandler/apiHandler";

function NewMessage() {
    const {register, handleSubmit} = useForm();

    const [users, setUsers] = useState({
        users: []
    });


    function getUsers() {
        Api.users().then(response => {
            if (response.status === 200) {
                setUsers({users:response.data.list});
            }
        });
    }

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

    useEffect(() => {
        getUsers();
    }, []);

    const onSubmit = formData => {
        Api.sendMessage(
            parseInt(formData.receiverUserNameSurname),
            formData.topic,
            formData.contents
        ).then(r => {
            console.log(r)
        }).catch(error => {
            console.log(error);
        });
    };

    /*const onSubmit = formData => {
        console.log(formData);
        axios.post(`http://localhost:8000/sendMessage`, {

            receiverUserNameSurname: onSubmit.receiverUserNameSurname,
            topic: onSubmit.topic,
            contents: onSubmit.contents
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };*/

    return (
       <>
        <Navbar/>
        <MessageNav/>
            <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
                <select 
                    className="receiver"
                    {...register("receiverUserNameSurname")
                    }>
                        {/*todo instead of tmp receivers*/}
                    {users.users.map((receiverUserNameSurname, key) => {
                        return <option value={receiverUserNameSurname.id} key={receiverUserNameSurname.id}>{receiverUserNameSurname.name} {receiverUserNameSurname.surname}</option>
                    })}
                </select>
                <input 
                    className="message-title" 
                    placeholder="Temat"
                    {...register("topic")}
                />
                <textarea
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