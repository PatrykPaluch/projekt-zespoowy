import {NavLink} from "react-router-dom";
import "./ClassRegisterStudentNav.css"
const ClassRegisterStudentNav = () => {
    return (
        <div className='nav-register-students'>
            <ul className='nav-menu-register-students'>
                <li className='Oceny'>
                    <NavLink to="/gradesstudent" className='nav-register-students-links'>Oceny</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/classregisterstudent/gradesstudent" className='nav-register-students-links'>Frekwencja</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default ClassRegisterStudentNav;
