import React from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import photo from '../../image/avatar.png'; 

function Children() {
    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Children">
        <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>Jan </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>Kowalski </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Pesel</h4> 
                        <h3>89030267456 </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Data urodzenia</h4> 
                        <h3>04.06.2005</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Klasa</h4> 
                        <h3>1b</h3>
                    </div>
                </div>
                <div className="Photo">
                    <div className="Data-item">
                    <img className="Photo-avatar" src={photo} alt={"User avatar"}/>
                    </div>
                </div>
            </div>
            <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>Jan </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>Kowalski </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Pesel</h4> 
                        <h3>89030267456 </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Data urodzenia</h4> 
                        <h3>04.06.2005</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Klasa</h4> 
                        <h3>1b</h3>
                    </div>
                </div>
                <div className="Photo">
                    <div className="Data-item">
                    <img className="Photo-avatar" src={photo} alt={"User avatar"}/>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Children;