import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Resume from './components/Resume';
import AddResume from './components/AddResume';
import UpdateResume from './components/UpdateResume';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          
          <Route path="/resume" component={Resume}></Route>
          <Route path="/add-resume" component={AddResume}></Route>
          <Route path="/update-resume/:id" component={UpdateResume}></Route>          
         
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
