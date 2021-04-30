import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Home/>
            
       <Switch>
          <Route  path="/home">
            <Home />
          </Route>          
        </Switch>
    </Router>
  );
}

export default App;
