import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import axios from "axios";

function Subjects() {
    const [subjects, setSubjects] = useState({
        subjects: []
    });
    
    function getSubjects() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response =>{
            setSubjects({subjects:response.data});
            console.log(subjects);
        });
    }
    
    useEffect(() =>{
        getSubjects();
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Subjects">
            {subjects.subjects.map(subject=> (
                <div className="Subject-data">
                    <div className="Data">
                        <div className="Data-item">
                            <h4>Przedmiot</h4> 
                            <h3>{subject.name}</h3>
                        </div>
                        <div className="Data-item">
                            <h4>Klasy</h4> 
                            <h3>{subject.class}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </>
    )
}

export default Subjects;