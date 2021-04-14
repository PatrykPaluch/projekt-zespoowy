import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CallendarPage from './pages/CallendarPage';
import Messages from './pages/Messages';
import NewMessage from './pages/subpages/NewMessage';
import ReceiverMessage from './pages/subpages/ReceiverMessage';
import SendMessage from './pages/subpages/SendMessage';
import Trash from './pages/subpages/Trash';
import Navbar from './components/Navbar';
import ClassRegisterStudent from "./pages/ClassRegisterStudent";
import GradesStudent from "./pages/subpages/GradesStudent";


function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/callendar" component={CallendarPage}/> 
            <Route exact path="/messages" component={Messages}/> 
            <Route path="/messages/newmessage" component={NewMessage}/> 
            <Route path="/messages/receivermessage" component={ReceiverMessage}/> 
            <Route path="/messages/sendmessage" component={SendMessage}/> 
            <Route path="/messages/trash" component={Trash}/>

            <Route path="/classregisterstudent" component={ClassRegisterStudent}/>
            <Route path="/gradesstudent" component={GradesStudent}/>

        </Switch>
    </Router>
  );
}

export default App;
