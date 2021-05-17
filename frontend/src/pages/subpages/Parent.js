import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import photo from '../../image/avatar.png'; 
import axios from "axios";

function Parent() {
    const [parent, setParent] = useState({
        role: '',
        name: '', 
        surname: '',
        pesel:  '',
        address: '',
        dateOfBirth: '',
        phoneNumber: '',
        photo: ''
    });

    function getParent() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response =>{
            setParent({
                role:response.data.role,
                name:response.data.name,
                surname:response.data.surname,
                pesel:  response.data.pesel,
                address: response.data.address,
                dateOfBirth: response.data.dateOfBirth,
                phoneNumber: response.data.phoneNumber,
                photo: response.data.photo
            });
            console.log(parent);
        });
    }

    useEffect(() =>{
        getParent();
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
            <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>{parent.name} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>{parent.surname} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Pesel</h4> 
                        <h3>{parent.pesel} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Adres</h4> 
                        <h3>{parent.address} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Data urodzenia</h4> 
                        <h3>{parent.dateOfBirth}</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Numer telefonu</h4> 
                        <h3>{parent.phoneNumber}</h3>
                    </div>
                </div>
                <div className="Photo">
                    <div className="Data-item">
                    <img className="Photo-avatar" src={parent.photo} alt={"User avatar"}/>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Parent;