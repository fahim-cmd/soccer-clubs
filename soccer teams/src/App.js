import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
  return (
    <Router>      
       <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
