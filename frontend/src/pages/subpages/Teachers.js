import React from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';

function Teachers() {
    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Teachers">
            <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Przedmiot</h4> 
                        <h3>Język Polski</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>Jan </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>Kowalski </h3>
                    </div>
                </div>
            </div>
            <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Przedmiot</h4> 
                        <h3>Matekmatyka</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>Jan </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>Kowalski </h3>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Teachers;