import {NavLink} from "react-router-dom";
import "./ClassRegisterNav.css"

const ClassRegisterTeacherNav = () => {
    return (
        <div className='nav-register'>
            <ul className='nav-menu-register'>
                <li className='oceny'>
                    <NavLink to="/gradesteacher" className='nav-register-links'>Oceny</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/classregisterstudent/gradesstudent" className='nav-register-links'>Frekwencja</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default ClassRegisterTeacherNav;
