import React, {useState, useEffect } from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import { Api } from '../../apiHandler/apiHandler';

function Data() {
    const [user,setUser] = useState({
        id: '',
        role: '',
        name: '',
        surname: '',
        pesel:  '',
        address: '',
        dateOfBirth: '',
        phoneNumber: '',
        photo: '',
        class: ''
    });

    const [student, setStudent] = useState({
        class: ''
    });

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id,
                    role: response.data.role.id,
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

    function getStudent (id) {
        Api.getStudent(id).then(response => {
            if(response.status === 200){
                setStudent({
                    class: response.data.class.name
                })
            }
        })
    }

    useEffect(() =>{
        getUser();
        if(user.role===1){
            getStudent (user.id);
        }
    }, [user.id, user.role]);
    
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
                    {
                        (user.role===2 || user.role===3) ?
                            <div className="Data-item">
                                <h4>Numer telefonu</h4>
                                <h3>{user.phoneNumber}</h3>
                            </div>
                            : null
                    }
                    {
                        user.role===1 ?
                            <div className="Data-item">
                                <h4>Klasa</h4>
                                <h3>{student.class}</h3>
                            </div>
                            :null
                    }

                </div>
            </div>
       </>
    )
}

export default Data;