import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
            <Route path="/" extact component={Home}/> 
        </Switch>
    </Router>
  );
}

export default App;
