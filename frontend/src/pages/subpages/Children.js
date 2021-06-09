import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import { Api } from '../../apiHandler/apiHandler';
import Child from "./Child";

function Children() {
    const [children,setChildren] = useState({
        kids: []
    });

    function getChildren() {
        Api.children().then(response => {
            if(response.status === 200){
                setChildren({kids:response.data.list});
            }
        })
    }

    useEffect(() =>{
        getChildren();
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Children">
            {children.kids.map((child)=>(
                <Child
                    id={child.id}
                    name={child.name}
                    surname={child.surname}
                    pesel={child.pesel}
                    birthDate={child.birthDate}
                />
            ))}
        </div>
       </>
    )
}

export default Children;