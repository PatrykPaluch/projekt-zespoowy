import Annoucement from './Annoucement';
import React, {useEffect, useState} from 'react';
import {Api} from "../apiHandler/apiHandler";

function Announcements (){
    const [classAnnoucement,setClassAnnoucement] = useState({
        annoucements: []
    });

    function getClassAnnoucements() {
        Api.getClassAnnoucements().then(response => {
            if(response.status === 200){
                setClassAnnoucement({annoucements:response.data.list});
            }
        })
    }

    const [annoucement,setAnnoucement] = useState({
        annoucements: []
    });

    function getAnnoucements() {
        Api.getAnnoucements().then(response => {
            if(response.status === 200){
                setAnnoucement({annoucements:response.data.list});
            }
        })
    }

    useEffect(() =>{
        getClassAnnoucements();
        getAnnoucements();
    }, []);

    return (
        <div className='announcements'>
            <div className='title'>
                Ogloszenia
            </div>
            {annoucement.annoucements.map((annoucement) =>{
                console.log(annoucement)
                return (<Annoucement
                    key={annoucement.id}
                    title={annoucement.title}
                    contents={annoucement.contents}
                    date={annoucement.addDate}
                />)
            })}
            {classAnnoucement.annoucements.map((annoucement) =>{
                console.log(annoucement)
                return (<Annoucement
                    key={annoucement.id}
                    title={annoucement.title}
                    contents={annoucement.contents}
                    date={annoucement.addDate}
                />)
            })}
        </div>
    )
}

export default Announcements;
