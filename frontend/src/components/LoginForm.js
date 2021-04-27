import React, {useState} from 'react';
import './RegisterForm.css';
import logo from '../image/LogoGreen.png'; 
function LoginForm(){
    const [state, setState] = useState({
        pesel: '',
        password: ''
    });
    const handlePeselChange = (e) => {
        setState({
            pesel: e.target.value
        });
    }

    const handlePasswordChange = (e) => {
        setState({
           password: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            pesel: state.pesel,
            password: state.password
        });        
    }
        return (
            <div className="App-log">
                <div className="Register">
                    <div className="Logo-place-register">
                        <img className="Logo" src={logo} alt={"this is logo"}/>
                    </div>
                    <form className="Login-form" onSubmit={handleSubmit}>
                        <text>Pesel</text>
                        <input
                            type="number"
                            value={state.pesel}
                            onChange={handlePeselChange}
                        />
                        <text>Hasło</text>
                        <input
                            type="password"
                            value={state.password}
                            onChange={handlePasswordChange} 
                        />
                        <button 
                            className="Register-button" 
                            type="submit"
                        >Zaloguj się</button>
                    </form>
                </div>
            </div>
        );
}

export default LoginForm;