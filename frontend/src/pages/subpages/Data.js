import React, {useState, useEffect } from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import { Api } from '../../apiHandler/apiHandler'

function Data() {
    const [user,setUser] = useState({
        role: '',
        name: '', 
        surname: '',
        pesel:  '',
        address: '',
        dateOfBirth: '',
        phoneNumber: '',
        class: '',
        photo: ''
    });

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    name:response.data.name,
                    surname:response.data.surname,
                    pesel:  response.data.pesel,
                    address: response.data.address,
                    dateOfBirth: response.data.birthDate,
                    phoneNumber: response.data.phone

                })

            }
        })
        
    }

    useEffect(() =>{
        getUser();
    }, []);
    
    return (
       <>
        <Navbar/>
        <ProfileNav/>
            <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>{user.name} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>{user.surname} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Pesel</h4> 
                        <h3>{user.pesel}</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Adres</h4> 
                        <h3>{user.address}</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Data urodzenia</h4> 
                        <h3>{user.dateOfBirth}</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Numer telefonu</h4> 
                        <h3>{user.phoneNumber}</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Klasa</h4> 
                        <h3>{user.class}</h3>
                    </div>
                </div>
                <div className="Photo">
                    <div className="Data-item">
                    <img className="Photo-avatar" src={user.photo} alt={"User avatar"}/>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Data;