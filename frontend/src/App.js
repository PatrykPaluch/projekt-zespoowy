import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import CallendarPage from './pages/CallendarPage';
import CallendarFormPage from './pages/CallendarFormPage';
import Register from './pages/Register';
import Login from './pages/Login';
// import Profile from './pages/Profile';
import Data from './pages/subpages/Data';
import Children from './pages/subpages/Children';
import Parent from './pages/subpages/Parent';
import Teachers from './pages/subpages/Teachers';
import Subjects from './pages/subpages/Subjects';
import NewMessage from './pages/subpages/NewMessage';
import ReceiverMessage from './pages/subpages/ReceiverMessage';
import SendMessage from './pages/subpages/SendMessage';
import ClassRegisterStudent from "./pages/ClassRegisterStudent";
import ClassRegisterTeacher from "./pages/ClassRegisterTeacher";

import AuthApi from "./Auth/AuthApi";


function App() {
    const [auth, setAuth] = React.useState(false);
    const test = () => {
        const loggedUser = localStorage.getItem('user')
        if (loggedUser) {
            setAuth(true);
        }
    }

    React.useEffect(() => {
        test();
    })


    return(
        <AuthApi.Provider value={{auth, setAuth}}>
            <Router>
                <Routes/>
            </Router>
        </AuthApi.Provider>


    )
}

const Routes = () => {
    const Auth = React.useContext(AuthApi);

    return (
        <Switch>
            <ProtectedRoute exact path="/" auth={Auth.auth} component={Home}/>
            <ProtectedLogin exact path="/login" auth={Auth.auth} component={Login}/>
            <Route exact path="/register" component={Register}/>
            <ProtectedRoute exact path="/callendar" auth={Auth.auth} component={CallendarPage}/>
            <ProtectedRoute exact path="/profile" auth={Auth.auth} component={Data}/>
            <ProtectedRoute exact path="/profile/data" auth={Auth.auth} component={Data}/>
            <ProtectedRoute exact path="/profile/subjects" auth={Auth.auth} component={Subjects}/>
            <ProtectedRoute exact path="/profile/teachers" auth={Auth.auth} component={Teachers}/>
            <ProtectedRoute exact path="/profile/children" auth={Auth.auth} component={Children}/>
            <ProtectedRoute exact path="/profile/parent" auth={Auth.auth} component={Parent}/>
            <ProtectedRoute exact path="/messages" auth={Auth.auth} component={NewMessage}/>
            <ProtectedRoute path="/messages/newmessage" auth={Auth.auth} component={NewMessage}/>
            <ProtectedRoute path="/messages/receivermessage" auth={Auth.auth} component={ReceiverMessage}/>
            <ProtectedRoute path="/messages/sendmessage" auth={Auth.auth} component={SendMessage}/>
            <ProtectedRoute path="/messages/trash" auth={Auth.auth} component={Trash}/>
            <ProtectedRoute path="/callendarform" auth={Auth.auth} component={CallendarFormPage}/>

            <ProtectedRoute path="/gradesteacher" auth={Auth.auth} component={ClassRegisterTeacher}/>
            <ProtectedRoute path="/gradesstudent" auth={Auth.auth} component={ClassRegisterStudent}/>


        </Switch>
    );
}

const ProtectedRoute = ({auth, component:Component,...rest}) => {
    return (
        <Route
            {...rest}
            render={ () => auth? (
                    <Component/>
                ):
                (
                    <Redirect to="/login"/>
                )}
        />
        )

}

const ProtectedLogin = ({auth, component:Component,...rest}) => {
    return (
        <Route
            {...rest}
            render={ () => !auth? (
                    <Component/>
                ):
                (
                    <Redirect to="/"/>
                )}
        />
        )

}

export default App;
