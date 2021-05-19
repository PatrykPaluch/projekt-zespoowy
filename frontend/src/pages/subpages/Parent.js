import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import { Api } from '../../apiHandler/apiHandler';


function Parent() {
    const [parent,setParent] = useState({
        parents: []
    });

    function getParent() {
        Api.parents().then(response => {
            if (response.status === 200) {
                setParent({parents: response.data.list});
            }
        })
    }

    useEffect(() =>{
        getParent();
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
           <div className="Children">
           {parent.parents.map(parent=>(
               <div key={parent.id} className="User-data">
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
                           <h3>{parent.birthDate}</h3>
                       </div>
                       <div className="Data-item">
                           <h4>Numer telefonu</h4>
                           <h3>{parent.phone}</h3>
                       </div>
                   </div>
               </div>
           ))}
           </div>

       </>
    )
}

export default Parent;