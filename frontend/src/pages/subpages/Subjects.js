import React from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';

function Subjects() {
    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Subjects">
            <div className="Subject-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Przedmiot</h4> 
                        <h3>Język Polski</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Klasy</h4> 
                        <h3>1b, 3a, 5c </h3>
                    </div>
                </div>
            </div>
            <div className="Subject-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Matematyka</h4> 
                        <h3>Język Polski</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Klasy</h4> 
                        <h3>1b, 3a, 5c </h3>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Subjects;