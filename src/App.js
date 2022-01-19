import './App.css';
import Navber from './Components/Navber/Navber';
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"; 
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import MainServices from './Components/MainServices/MainServices';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <MainServices></MainServices>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;