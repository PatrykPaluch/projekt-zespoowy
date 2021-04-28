import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
import Trash from './pages/subpages/Trash';
import ClassRegisterStudent from "./pages/ClassRegisterStudent";
import GradesStudent from "./pages/subpages/GradesStudent";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/register" component={Register}/> 
            <Route exact path="/callendar" component={CallendarPage}/> 
            <Route exact path="/profile" component={Data}/> 
            <Route exact path="/profile/data" component={Data}/> 
            <Route exact path="/profile/subjects" component={Subjects}/> 
            <Route exact path="/profile/teachers" component={Teachers}/> 
            <Route exact path="/profile/children" component={Children}/> 
            <Route exact path="/profile/parent" component={Parent}/> 
            <Route exact path="/messages" component={NewMessage}/> 
            <Route path="/messages/newmessage" component={NewMessage}/> 
            <Route path="/messages/receivermessage" component={ReceiverMessage}/> 
            <Route path="/messages/sendmessage" component={SendMessage}/> 
            <Route path="/messages/trash" component={Trash}/>
            <Route path="/classregisterstudent" component={ClassRegisterStudent}/>
            <Route path="/gradesstudent" component={GradesStudent}/>
            <Route path="/callendarform" component={CallendarFormPage}/>

        </Switch>
    </Router>
  );
}

export default App;
