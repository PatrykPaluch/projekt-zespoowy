import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import './LeftNavBar.css';
import {Api} from "../apiHandler/apiHandler";

function ProfileNav() {
    const [user,setUser] = useState({
        role: '',
    });

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    role: response.data.role.id
                })

            }
        })

    }

    useEffect(() =>{
        getUser();
    }, []);

    return (
        <div className='left-nav-container'>
            <ul className='left-nav-menu'>
                <li className='nav-item'>
                    <NavLink to="/profile/data" className='left-nav-links'>Dane</NavLink>
                </li>
                {
                    user.role===1 ?
                        <li className='nav-item'>
                            <NavLink to="/profile/teachers" className='left-nav-links'>Nauczyciele</NavLink>
                        </li>
                        :
                        null
                }
                {
                    user.role===1 ?
                        <li className='nav-item'>
                            <NavLink to="/profile/parent" className='left-nav-links'>Rodzic</NavLink>
                        </li>
                        :
                        null
                }
                {
                    user.role===2 ?
                        <li className='nav-item'>
                            <NavLink to="/profile/subjects" className='left-nav-links'>Przedmioty</NavLink>
                        </li>
                        :
                        null
                }
                {
                    user.role===3 ?
                        <li className='nav-item'>
                            <NavLink to="/profile/children" className='left-nav-links'>Dzieci</NavLink>
                        </li>
                        :
                        null
                }
            </ul>
        </div>
    )
}

export default ProfileNav;