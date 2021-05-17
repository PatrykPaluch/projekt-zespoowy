import {NavLink} from "react-router-dom";
import "./ClassRegisterNav.css"
import TeacherRow from "./TeacherRow";
import React, {useState} from 'react'
import {u} from "react-select/dist/index-4bd03571.esm";

const ClassRegisterTeacherNav = (props) => {

    function handleChooseClass(pressed) {
        props.callback(pressed);
    }

    return (
        <div className='nav-register'>
            <ul className='nav-menu-register'>

                {Object.keys(props.classes).map((key) => {
                    return (<>
                            <li className='nav-item'>
                                <div onClick={() => handleChooseClass(key)} className='nav-register-links'>{key}</div>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    );
};

export default ClassRegisterTeacherNav;
