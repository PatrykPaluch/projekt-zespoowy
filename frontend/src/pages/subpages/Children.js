import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import axios from "axios";
import { Api } from '../../apiHandler/apiHandler';

function Children() {
    const [children,setChildren] = useState({
        kids: []
    });

    function getChildren() {
        /*Api.children().then(response => {
            if(response.status === 200){
                setChildren({kids:response.data});
            }
        })*/
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response =>{
            setChildren({kids:response.data});
            console.log(children);
        });
    }

    useEffect(() =>{
        getChildren();
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Children">
            {children.kids.map(child=> (
                <div className="User-data">
                    <div className="Data">
                        <div className="Data-item">
                            <h4>Imię</h4> 
                            <h3>{child.name} </h3>
                        </div>
                        <div className="Data-item">
                            <h4>Nazwisko</h4> 
                            <h3>{child.surname}</h3>
                        </div>
                        <div className="Data-item">
                            <h4>Pesel</h4> 
                            <h3>{child.pesel}</h3>
                        </div>
                        <div className="Data-item">
                            <h4>Data urodzenia</h4> 
                            <h3>{child.dateOfBirth}</h3>
                        </div>
                        <div className="Data-item">
                            <h4>Klasa</h4> 
                            <h3>{child.class}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </>
    )
}

export default Children;